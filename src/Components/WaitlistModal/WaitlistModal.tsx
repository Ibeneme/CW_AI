import { useState } from "react";
import "./WaitlistModal.css";
import { useWaitlist } from "./useWaitlist";

const WaitlistModal = ({ isOpen, onClose, demo }: any) => {
  const [email, setEmail] = useState("");
  const {
    isSubmitting,
    showSuccess,
    alreadySubscribed,
    error,
    handleSubmit,
    setError,
  } = useWaitlist();

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setError(null);
  };

  const onSubmit = () => {
    handleSubmit(email);
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        {!showSuccess ? (
          <div>
            <h2>
              {demo
                ? "This is a demo game. Our app is coming soon! Join our waitlist."
                : "Join our waitlist."}
            </h2>
            <p>Enter your email to join the waitlist for exclusive updates.</p>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleEmailChange}
              disabled={isSubmitting}
              className="input-mod"
            />

            {error && (
              <p
                style={{
                  color: `var(--accent-color)`,
                  backgroundColor: "#05FA6F21",
                  padding: 12,
                  borderRadius: 48,
                  marginBottom: -12,
                  marginTop: 12,
                }}
                className={`error-message ${
                  alreadySubscribed ? "info-message" : ""
                }`}
              >
                {error}
              </p>
            )}

            <>
              <button
                onClick={onSubmit}
                disabled={isSubmitting || !email}
                className="submit-btn"
              >
                {isSubmitting ? "Submitting..." : "Join Waitlist"}
              </button>

              {/* Optional close button, uncomment if needed */}
              {/* <button onClick={onClose} className="close-btn">
                Close
              </button> */}
            </>
          </div>
        ) : (
          <div className="success-modal-content">
            <h2 style={{ fontSize: 64 }}>🎉</h2>
            <h2>Success!</h2>
            <p>You've been added to the waitlist!</p>
            <p>
              Thank you for your interest. We're thrilled to have you on board
              as we prepare to launch our cutting-edge AI-powered translation
              and transcription platform.
            </p>
            <p>
              Stay tuned for updates — we’ll be reaching out with exclusive
              early access, product news, and other exciting announcements.
            </p>

            <button onClick={onClose} className="submit-btn">
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default WaitlistModal;
