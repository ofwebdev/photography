import React from "react";
import { Box, Drawer } from "@mui/material";
import useResponsive from "../../../hooks/useResponsive";
import NavContent from "./NavContent";

const NAV_WIDTH = 280;

function Nav({ openNav, onCloseNav }) {
  const isDesktop = useResponsive("up", "lg");

  return (
    <Box
      component="nav"
      sx={{
        flexShrink: { lg: 0 },
        width: { lg: NAV_WIDTH },
      }}
    >
      {isDesktop ? (
        <Drawer
          open
          variant="permanent"
          PaperProps={{
            sx: {
              width: NAV_WIDTH,
              bgcolor: "background.default",
              borderRightStyle: "solid",
            },
          }}
        >
          <NavContent />
        </Drawer>
      ) : (
        <Drawer
          open={openNav}
          onClose={onCloseNav}
          ModalProps={{
            keepMounted: true,
          }}
          PaperProps={{
            sx: { width: NAV_WIDTH },
          }}
        >
          <NavContent />
        </Drawer>
      )}
    </Box>
  );
}

export default Nav;
