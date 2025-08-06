// src/App.jsx
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import TrustedBy from "./components/TrustedBy";
import FeaturesSection from "./components/FeatureSection";
import ImpactMetricsSection from "./components/ImpactMetricSection";
import AboutUsCarousel from "./components/AboutUsCarousel";
import ContactUsSection from "./components/ContactUsSection";
import Footer from "./components/Footer";
import Benefits from "./components/Benefits";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeaturesSection />

      <Benefits />
      {/* <ImpactMetricsSection /> */}
      <AboutUsCarousel />
      <TrustedBy />
      <ContactUsSection />
      <Footer />
    </>
  );
}

export default App;
