import { useState } from "react";
import "./Hero.css";
import Illustration from "../../../assets/Hero/heroRightGreen.png";
import VerifiedIcon from "../../../Components/Icons/Verified";
import { useWaitlist } from "../../../Components/WaitlistModal/useWaitlist";
import SuccessModal from "../../../Components/SuccessModal/SuccessModal";

const Hero = () => {
  const [email, setEmail] = useState("");
  const {
    isSubmitting,
    showSuccess,
    error,
    handleSubmit,
    setShowSuccess,
    setError,
  } = useWaitlist();

  const onEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setError(null);
  };

  const onSubmit = () => {
    handleSubmit(email);
  };

  const handleCloseModal = () => {
    setShowSuccess(false);
    setEmail("");
    setError(null);
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          With <span className="hero-content-span">AI,</span> we’re
          <br /> making translation <br />
          and transcription <br />
          effortless for you.
        </h1>
        <p>
          With our advanced AI model, we’re here to provide you with seamless,
          accurate, and instant language solutions that make communication
          easier than ever.
        </p>

        <div className="input-section">
          <div className="text-input">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={onEmailChange}
              className="email-input"
              disabled={isSubmitting}
              readOnly={isSubmitting}
            />
            <button
              className="join-btn"
              onClick={onSubmit}
              disabled={isSubmitting || !email}
            >
              <VerifiedIcon width={24} height={24} />
              {isSubmitting ? "Submitting..." : "Join our waitlist"}
            </button>
          </div>

          {error && (
            <p
              className="error-message"
              style={{ color: `var(--accent-color)` }}
            >
              {error}
            </p>
          )}

          <p className="terms">
            By clicking Join the waitlist, you're confirming that you agree with
            our
            <a href="/terms" className="terms-link">
              {" "}
              Terms and Conditions
            </a>
            .
          </p>
        </div>
      </div>

      <img src={Illustration} alt="Illustration" className="hero-images" />

      {showSuccess && <SuccessModal onClose={handleCloseModal} />}
    </section>
  );
};

export default Hero;
