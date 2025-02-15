import React from "react";
import "./TwoSectionComponent.css";
import a from "../../../src/assets/demo/a.png";
import b from "../../../src/assets/demo/b.png";
import c from "../../../src/assets/demo/c.png";
import d from "../../../src/assets/demo/d.png";

const sectionData = [
  {
    image: a,
    header: "AI Photo Generator",
    text: `Transform your ideas into stunning AI-generated images. Customize avatars, experiment with virtual outfits, and bring your creativity to life with ease.`,
    //bgColor: "#92FFBF", // Light Green
    bgColor: "#ffffff16",
  },
  {
    image: d,
    header: "Crystal-Clear Video Calls",
    text: `Connect seamlessly with high-definition video calls. Enjoy smooth, secure, and lag-free conversations with friends, family, and colleagues—anytime, anywhere.`,
    //bgColor: "#D0FFE3", // Light Mint
    bgColor: "#ffffff16",
  },
  {
    image: c,
    header: "Instant Messaging",
    text: `Stay in touch with fast, reliable messaging. Share media, react with emojis, and enjoy real-time conversations with enhanced security and privacy.`,
    //bgColor: "#E8F5E9", // Soft Green
    bgColor: "#ffffff16",
  },
  {
    image: b,
    header: "High-Quality Voice Calls",
    text: `Experience crystal-clear voice calls with advanced noise cancellation. Talk effortlessly with friends and colleagues, no matter the distance.`,
    //bgColor: "#92FFBF", // Light Green
    bgColor: "#ffffff16",
  },
];

const TwoSectionComponent: React.FC = () => {
  return (
    <div className="container">
      {[0, 1].map((sectionIndex) => (
        <section key={sectionIndex} className="section">
          {sectionData
            .slice(sectionIndex * 2, sectionIndex * 2 + 2)
            .map((item, index) => (
              <div
                key={index}
                className="content-box"
                style={{ backgroundColor: item.bgColor }}
              >
                <img src={item.image} alt={item.header} className="image" />
                <h2
                  style={{
                    marginTop: 48,
                    color: "#D8D5D1",
                    marginBottom: 0,
                    fontSize: 36,
                    maxWidth: 350,
                    textAlign: "center",
                  }}
                >
                  {item.header}
                </h2>
                <p
                  style={{
                    marginTop: 2,
                    color: "#7D7A77",
                    padding: 16,
                    maxWidth: 350,
                    textAlign: "center",
                  }}
                >
                  {item.text}
                </p>
              </div>
            ))}
        </section>
      ))}
    </div>
  );
};

export default TwoSectionComponent;
