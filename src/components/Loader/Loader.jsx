import React from "react";
import { Box, LinearProgress } from "@mui/material";

function Loader() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Box sx={{ width: "30%" }}>
        <LinearProgress />
      </Box>
    </Box>
  );
}

export default Loader;
