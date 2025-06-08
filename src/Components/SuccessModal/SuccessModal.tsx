// components/Modals/SuccessModal.tsx
import "./SuccessModal.css";

const SuccessModal = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="success-modal-content">
          <h2 style={{ fontSize: 64 }}>🎉</h2>
          <h2>Success!</h2>
          <p>You've been added to the waitlist!</p>
          <p>
            Thank you for your interest. We're thrilled to have you on board as
            we prepare to launch our cutting-edge AI-powered translation and
            transcription platform.
          </p>
          <p>
            Stay tuned for updates — we’ll be reaching out with exclusive early
            access, product news, and other exciting announcements.
          </p>
          <button className="close-btn" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;
