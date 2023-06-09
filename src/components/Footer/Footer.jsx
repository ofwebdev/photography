import React from "react";
import { Grid, Typography } from "@mui/material";
import styled from "@emotion/styled";

// const FooterBg = styled("footer")`
//   background-color: red;
// `;

const FooterBg = styled("footer")(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark" ? theme.palette.mode : theme.palette.mode,
  padding: theme.spacing(4),
}));

const Footer = () => {
  return (
    <FooterBg>
      <Grid container spacing={2}>
        <Grid item xs={6} sm={3}>
          <Typography variant="h6">Column 1</Typography>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Typography>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Typography variant="h6">Column 2</Typography>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Typography>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Typography variant="h6">Column 3</Typography>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Typography>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Typography variant="h6">Column 4</Typography>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Typography>
        </Grid>
      </Grid>
    </FooterBg>
  );
};

export default Footer;
