import React from "react";
import { Box, IconButton } from "@mui/material";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import styled from "@emotion/styled";

const StyledRoot = styled("div")({
  display: "flex",
  flexDirection: "column",
});
function Header({ onOpenNav }) {
  return (
    <StyledRoot>
      <IconButton
        onClick={onOpenNav}
        sx={{
          mr: 1,
          color: "text.primary",
          display: { lg: "none" },
        }}
      >
        <MenuOpenIcon />
      </IconButton>
      {/* <Box>Header</Box> */}
      <Box sx={{ flexGrow: 1 }} />
    </StyledRoot>
  );
}

export default Header;
