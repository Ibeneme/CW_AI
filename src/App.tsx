import { useEffect, useState } from "react";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import Hero from "./Pages/Home/Index";
import ScrollToTop from "./ScrollToTop";
import "./assets/fonts/fonts.css";
import Navbar from "./Components/Navbar/Navbar";
import logoSrc from "../src/assets/Logo/Layer_x0020_1.png";
import FAQPage from "./Pages/Faqs/FAQPage";
import Footer from "./Components/Footer/Footer";
import SixthSection from "./Pages/Home/Section/SixSection/SixthSection";
import { AboutIndex } from "./Pages/Home/About/AboutIndex";
import TermsAndConditions from "./Pages/TermsAndConditions/TermsAndConditions";
import WaitlistModal from "./Components/WaitlistModal/WaitlistModal";
import PrivacyPolicy from "./Pages/PrivacyPolicy/PrivacyPolicy";
import AyoGameIndex from "./Pages/AyoGame/AyoGameIndex";
import PuzzleGameIndex from "./Pages/PuzzleGameIndex/PuzzleGameIndex";
import FloatingChat from "./Pages/Home/AfricanCountriesTable/FloatingChat";
import AdminLogin from "./Admin/AdminLogin/AdminLogin";
import AdminDashboard from "./Admin/AdminDashboard/AdminDashboard";

const BASE_URL = `https://cw-nodejs-server-01.onrender.com`;

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const pingServer = async () => {
      try {
        await axios.get(BASE_URL);
        await axios.get(BASE_URL);
      } catch (error) {}
    };

    pingServer();
  }, []);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <WaitlistModal isOpen={isModalOpen} onClose={closeModal} />
      <ScrollToTop />
      <FloatingChat />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar logoSrc={logoSrc} openModal={openModal} />
              <Hero />
              <Footer />
            </>
          }
        />
        <Route
          path="/ayo"
          element={
            <>
              <Navbar logoSrc={logoSrc} openModal={openModal} />
              <AyoGameIndex />
              <Footer hideContactUs />
            </>
          }
        />
        <Route
          path="/puzzle"
          element={
            <>
              <Navbar logoSrc={logoSrc} openModal={openModal} />
              <PuzzleGameIndex />
              <Footer hideContactUs />
            </>
          }
        />
        <Route
          path="/faqs"
          element={
            <>
              <Navbar logoSrc={logoSrc} openModal={openModal} />
              <div style={{ marginTop: 130 }} />
              <FAQPage />
              <SixthSection />
              <Footer />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <Navbar logoSrc={logoSrc} openModal={openModal} />
              <AboutIndex />
              <Footer />
            </>
          }
        />
        <Route
          path="/terms"
          element={
            <>
              <Navbar logoSrc={logoSrc} openModal={openModal} />
              <TermsAndConditions />
              <Footer />
            </>
          }
        />
        <Route
          path="/privacy-policy"
          element={
            <>
              <Navbar logoSrc={logoSrc} openModal={openModal} />
              <PrivacyPolicy />
              <Footer />
            </>
          }
        />

        <Route
          path="/admin-login"
          element={
            <>
              <AdminLogin />
              <Footer hideContactUs />
            </>
          }
        />
        <Route
          path="/admin-dashboard"
          element={
            <>
              <AdminDashboard />
              <Footer hideContactUs />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
