import WhatIsChatWaZoBiaAI from "../../Sections/WhatIsChatWaZoBiaAI";
import SixthSection from "../Section/SixSection/SixthSection";
import AboutHero from "./AboutHero";
import VisionMissionAI from "./VisionMissionAI";

export const AboutIndex = () => {
  return (
    <div>
      <AboutHero />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: `120px 12px`,
        }}
      >
        <WhatIsChatWaZoBiaAI />
      </div>
      <VisionMissionAI />
      <SixthSection />
    </div>
  );
};
