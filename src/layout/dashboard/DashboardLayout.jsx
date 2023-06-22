import React, { useState } from "react";
import styled from "@emotion/styled";

import Header from "../../components/Dashboard/Header/Header";
import Nav from "../../components/Dashboard/Nav/Nav";
import { Outlet } from "react-router-dom";

const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 92;

const StyledRoot = styled("div")({
  display: "flex",
  minHeight: "100%",
  overflow: "hidden",
});

const Main = styled("div")(({ theme }) => ({
  flexGrow: 1,
  overflow: "auto",
  minHeight: "100%",
  paddingTop: APP_BAR_MOBILE + 24,
  // paddingBottom: theme.spacing(10),
  [theme.breakpoints.up("lg")]: {
    // paddingTop: APP_BAR_DESKTOP + 24,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
}));

function DashboardLayout() {
  const [open, setOpen] = useState(false);
  return (
    <StyledRoot>
      <Nav openNav={open} onCloseNav={() => setOpen(false)} />
      <Header onOpenNav={() => setOpen(true)} />

      <Main>
        <Outlet />
      </Main>
    </StyledRoot>
  );
}

export default DashboardLayout;
