import React, { useState, useEffect, useRef } from "react";
//import { FaComments } from "react-icons/fa";
import image from "../../../assets/askme.png";
import image2 from "../../../assets/ThirdSection/askme2.png";
import image3 from "../../../assets/ThirdSection/askmeblack.png";
const FloatingChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(true);
  const chatRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (chatRef.current && !chatRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      setIsTyping(true);
      setTimeout(() => setIsTyping(false), 2000);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <div style={{ position: "relative", zIndex: 999999999999999 }}>
      <div
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          cursor: "pointer",
          zIndex: 999999999999999,
          animation: "bounce 1s infinite", // Bouncing animation
        }}
        onClick={() => setIsOpen(true)}
      >
        <img src={image2} style={{ width: 120, height: 120 }} alt="image" />
      </div>

      {/* Chat Modal */}
      {isOpen && (
        <div
          ref={chatRef}
          style={{
            position: "fixed",
            bottom: "80px",
            right: "20px",
            width: "320px",
            height: "400px",
            backgroundColor: "white",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            border: `1px solid var(--accent-color)`,
            animation: "fadeIn 0.3s ease-in-out",
            zIndex: 999999999999999,
          }}
        >
          {/* Header */}
          <div
            style={{
              backgroundColor: `var(--accent-color)`,
              color: `var(--background-color)`,
              padding: "16px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontSize: "16px",
              fontWeight: "bold",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: 4,
                justifyItems: "center",
                alignItems: "center",
              }}
            >
              <img
                src={image3}
                style={{
                  width: 48,
                  height: 48,
                  marginBottom: -12,
                  marginRight: -9,
                }}
                alt="image"
              />
              <span> Chatbot</span>
            </div>
            <span
              style={{
                cursor: "pointer",
                fontSize: "20px",
              }}
              onClick={() => setIsOpen(false)}
            >
              ✖
            </span>
          </div>

          {/* Chatbox Body */}
          <div
            style={{
              flex: 1,
              padding: "10px",
              display: "flex",
              flexDirection: "column",
              overflowY: "auto",
              backgroundColor: `var(--background-color)`,
              color: `var(--primary-color)`,
            }}
          >
            <p>
              👋 Hi! Welcome to <strong>Chat Wazobia AI</strong>.
            </p>

            <div
              style={{
                gap: -24,
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "flex-start",
              }}
            >
              <img src={image} style={{ width: 64, height: 64 }} alt="image" />

              {/* Spiral Typing Effect */}
              {isTyping ? (
                <>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      position: "relative",
                      width: "50px",
                      height: "50px",
                    }}
                  >
                    <span
                      style={{
                        position: "absolute",
                        animation: "spiralMove 1s infinite",
                        fontSize: "24px",
                      }}
                    >
                      •
                    </span>
                    <span
                      style={{
                        position: "absolute",
                        animation: "spiralMove 1s infinite 0.3s",
                        fontSize: "24px",
                      }}
                    >
                      •
                    </span>
                    <span
                      style={{
                        position: "absolute",
                        animation: "spiralMove 1s infinite 0.6s",
                        fontSize: "24px",
                      }}
                    >
                      •
                    </span>
                    <style>
                      {`
                    @keyframes spiralMove {
                      0% { transform: translate(0, 0); }
                      25% { transform: translate(5px, -5px); }
                      50% { transform: translate(10px, 0); }
                      75% { transform: translate(5px, 5px); }
                      100% { transform: translate(0, 0); }
                    }
                  `}
                    </style>
                  </div>
                </>
              ) : (
                <>
                  <p
                    style={{
                      fontSize: 14,
                      color: `var(--secondary-color)`,
                      backgroundColor: "#ffffff12",
                      padding: 16,
                      borderRadius: 12,
                      margin: 0,
                      marginLeft: -12,
                    }}
                  >
                    Our AI model is currently under development and will be
                    finished shortly to enable you to translate languages in
                    your local dialect.
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FloatingChat;

const styles = {
  bounce: `
      @keyframes bounce {
        0% {
          transform: translateY(0);
        }
        50% {
          transform: translateY(-10px); /* Bounce height */
        }
        100% {
          transform: translateY(0);
        }
      }
    `,
};

const styleSheet = document.styleSheets[0] as CSSStyleSheet;
styleSheet.insertRule(styles.bounce, styleSheet.cssRules.length);
