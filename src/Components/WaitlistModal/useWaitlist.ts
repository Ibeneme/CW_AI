import { useState } from "react";
import axios from "axios";

//const BASE_URL = "http://localhost:1008";
//https://cw-nodejs-server.onrender.com


const BASE_URL = `https://cw-nodejs-server-01.onrender.com`;

export const useWaitlist = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [alreadySubscribed, setAlreadySubscribed] = useState(false);

  const handleSubmit = async (email: string) => {
    if (!email) return;

    setIsSubmitting(true);
    setError(null);
    setShowSuccess(false);
    setAlreadySubscribed(false);

    try {
      const res = await axios.post(`${BASE_URL}/api/waitlist/subscribe`, {
        email,
      });

      if (res.data.success) {
        setShowSuccess(true);
      } else {
        if (
          res.data.message &&
          res.data.message.toLowerCase().includes("already exists")
        ) {
          setAlreadySubscribed(true);
          setError("This email is already subscribed to the waitlist.");
        } else {
          setError(res.data.message || "Something went wrong.");
        }
      }
    } catch (err) {
      console.error("Submission error:", err);
      setError("An error occurred while submitting your email.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    isSubmitting,
    showSuccess,
    alreadySubscribed,
    error,
    handleSubmit,
    setShowSuccess,
    setError,
  };
};