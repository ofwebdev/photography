import React, { useEffect, useState } from "react";
import { IconButton } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

const DarkModeToggle = () => {
  const storedMode = localStorage.getItem("darkMode");
  const initialDarkMode = storedMode === "dark";
  const [darkMode, setDarkMode] = useState(initialDarkMode);

  // useEffect(() => {
  //   // Apply the theme or any other logic that depends on the darkMode state
  //   document.documentElement.setAttribute(
  //     "data-theme",
  //     darkMode ? "dark" : "light"
  //   );
  // }, [darkMode]);

  const handleDarkModeToggle = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem("darkMode", newDarkMode ? "dark" : "light");
    window.location.reload();
  };

  return (
    <IconButton
      color="inherit"
      aria-label="Toggle dark mode"
      onClick={handleDarkModeToggle}
    >
      {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
    </IconButton>
  );
};

export default DarkModeToggle;
