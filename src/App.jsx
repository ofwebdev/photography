import { useState } from "react";
import "./App.css";
import AppBarHeader from "./components/Navbar/AppBarHeader";
import HeroSection from "./components/Hero/HeroSection";
import Learn from "./components/Section/Learn";
import Features from "./components/Section/Features";
import Footer from "./components/Footer/Footer";
import { CssBaseline } from "@mui/material";
import DarkModeToggle from "./components/Dark/DarkModeToggle";

function App() {
  return (
    <>
      <CssBaseline />
      <AppBarHeader />
      <HeroSection />
      <Features />

      <Learn />
      <Footer />
    </>
  );
}

export default App;
