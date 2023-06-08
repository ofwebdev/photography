import { useState } from "react";
import "./App.css";
import AppBarHeader from "./components/Navbar/AppBarHeader";
import HeroSection from "./components/Hero/HeroSection";
import Learn from "./components/Section/Learn";
import Features from "./components/Section/Features";
// import CustomImageList from "./components/Gallery/CustomImageList";

function App() {
  return (
    <>
      <AppBarHeader />
      <HeroSection />
      <Features />

      <Learn />
      {/* <CustomImageList /> */}
    </>
  );
}

export default App;
