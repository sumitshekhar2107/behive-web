import React from "react";
// import logo from "./logo.svg";
import Header from "./widgets/Header";
import HeroSection from "./widgets/HeroSection";
import Overview from "./widgets/Overview";
import WhyChooseUs from "./widgets/WhyChooseUs";
import DownloadApp from "./widgets/DownloadApp";
import Footer from "./widgets/Footer";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <WhyChooseUs />
      <Overview />
      <DownloadApp />
      <Footer />
    </div>
  );
};

export default App;
