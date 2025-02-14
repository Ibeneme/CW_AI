import Hero from "./Hero/Hero";
import FirstSection from "./Section/FirstSection/FirstSection";
import SecondSection from "./Section/SecondSection/SecondSection";
import ThirdSection from "./Section/ThirdSection/ThirdSection";
import FourthSection from "./Section/FourthSection/FourthSection";
import CommentSection from "./Section/CommentSection/CommentSection";
import FifthSection from "./Section/FifthSection/FifthSection";
import FAQPage from "../Faqs/FAQPage";
import SixthSection from "./Section/SixSection/SixthSection";
import TwoSectionComponent from "../Sections/TwoSectionComponent";

const Index = () => {
  return (
    <div style={{ padding: 0 }}>
      <Hero />
      {/* <GameBoard /> */}
      {/* <AyoBoard /> */}
      {/* <FirstSection />
      <SecondSection />
      <div style={{ padding: 0 }}>
        <ThirdSection />
      </div> */}
      {/* <FirstSection /> */}
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <TwoSectionComponent />
      <FourthSection /> {/* <CommentSection /> */}
      <FifthSection />
      <CommentSection />
      <FAQPage />
      <SixthSection />
    </div>
  );
};

export default Index;
