import React, { useState, useEffect } from "react";
import AppPreviewImage from "../../../../assets/FifthSection/sixth.png";
import "./SixthSection.css";
import VerifiedIcon from "../../../../Components/Icons/Verified";
import WaitlistModal from "../../../../Components/WaitlistModal/WaitlistModal"; // Adjust path if needed

const SixthSection: React.FC = () => {
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 765);
  const [isModalOpen, setIsModalOpen] = useState(false); // <-- Added

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 765);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          gap: isMobile ? "20px" : "0",
          alignItems: "center",
          justifyContent: "center",
          padding: "20px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* Left Image Section */}
        <div
          style={{
            backgroundImage: `url(${AppPreviewImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            width: isMobile ? "100%" : "49%",
            height: "700px",
            borderRadius: "0px",
          }}
          className="sixth-section-image"
        ></div>

        {/* Right Text Section */}
        <div
          style={{
            height: "660px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            borderRadius: 24,
            backgroundColor: `var(--primary-color)`,
            width: isMobile ? "100%" : "49%",
            padding: "20px",
            textAlign: isMobile ? "center" : "left",
          }}
        >
          <h1 className="sixth-section-content-h1">
            Stay Up to Date with Chat WaZoBia AI App
          </h1>
          <p className="sixth-section-content-p">
            Unlock Exciting Features for an Enhanced Experience and Discover New
            Functions for Enhanced Communication.
          </p>
          <button
            className="join-btn"
            style={{
              backgroundColor: "#000",
              alignSelf: isMobile ? "center" : "flex-start",
              color: "#fff",
            }}
            onClick={openModal} // <-- Added
          >
            <VerifiedIcon width={24} height={24} color={"#fff"} />
            Subscribe to Our Newsletter
          </button>
        </div>
      </div>

      {/* Waitlist Modal */}
      <WaitlistModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default SixthSection;
