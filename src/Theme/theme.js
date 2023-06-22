import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    common: { black: "#000", white: "#fff" },
    mode: localStorage.getItem("darkMode") === "dark" ? "dark" : "light",
    primary: {
      main: "#f44336", // Red color for primary elements
      light: "#ff7961",
      dark: "#ba000d",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#3f51b5", // Blue color for secondary elements
      light: "#7986cb",
      dark: "#303f9f",
      contrastText: "#ffffff",
    },
    success: {
      main: "#66bb6a", // Green color for success elements
      light: "#98ee99",
      dark: "#338a3e",
      contrastText: "#ffffff",
    },
    error: {
      main: "#e91e63", // Pink color for error elements
      light: "#ff6090",
      dark: "#b0003a",
      contrastText: "#ffffff",
    },
    warning: {
      main: "#ff9800", // Orange color for warning elements
      light: "#ffc947",
      dark: "#c66900",
      contrastText: "#ffffff",
    },
  },
  shape: {
    borderRadius: 12,
  },
});
