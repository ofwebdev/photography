import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Auth context
import AuthProvider from "./provider/AuthProvider.jsx";

// React router dom
import { RouterProvider } from "react-router-dom";
import { router } from "./components/Router/router.jsx";

// Mui theme
import { theme } from "./components/Theme/theme.js";
import { ThemeProvider } from "@mui/material/styles";

// Create a query client
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </QueryClientProvider>
    </ThemeProvider>
  </React.StrictMode>
);
