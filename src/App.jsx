import AppBarHeader from "./components/Navbar/AppBarHeader";
import HeroSection from "./components/Hero/HeroSection";
import Features from "./components/Section/Features";
import CustomImageList from "./components/Gallery/ImgMediaCard";
import Learn from "./components/Section/Learn";
import Newsletter from "./components/NewsLetter/NewsLetter";
import Footer from "./components/Footer/Footer";

import { CssBaseline, Container } from "@mui/material";
import { alpha, useTheme } from "@mui/material/styles";

function App() {
  const theme = useTheme();
  console.log(theme);
  console.log(alpha);
  return (
    <>
      <CssBaseline />
      <AppBarHeader />
      <HeroSection />

      <Container maxWidth="xl">
        <Features />
        <CustomImageList />
        <Learn />
        <Newsletter />
      </Container>

      <Footer />
    </>
  );
}

export default App;
