import React from "react";
import { Box, Grid, Paper, Typography } from "@mui/material";
import styled from "@emotion/styled";

import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CopyrightIcon from "@mui/icons-material/Copyright";
import { Link } from "react-router-dom";

const FooterBg = styled("footer")(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark" ? theme.palette.mode : theme.palette.mode,
  padding: theme.spacing(4),
  marginTop: "50px",
}));

const StyledLink = styled(Link)`
  text-decoration: none;
  transition: 0.5s;

  &:hover {
    text-decoration: underline;
    padding-left: 8px;
  }
`;

const Footer = () => {
  return (
    <Paper p={4} mt={8}>
      <FooterBg>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6">Services</Typography>
            <Typography component={StyledLink} to={"/"}>
              Web design
            </Typography>
            <br />
            <Typography component={StyledLink} to={"/"}>
              Development
            </Typography>
            <br />
            <Typography component={StyledLink} to={"/"}>
              Hosting
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6">About</Typography>
            <Typography component={StyledLink} to={"/"}>
              Company
            </Typography>
            <br />
            <Typography component={StyledLink} to={"/"}>
              Team
            </Typography>
            <br />
            <Typography component={StyledLink} to={"/"}>
              Legacy
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6">Careers</Typography>
            <Typography component={StyledLink} to={"/"}>
              Job openings
            </Typography>
            <br />
            <Typography component={StyledLink} to={"/"}>
              Employee success
            </Typography>
            <br />
            <Typography component={StyledLink} to={"/"}>
              Benefits
            </Typography>
          </Grid>
        </Grid>

        <Box
          sx={{
            padding: "20px",
            textAlign: "center",
            mt: 5,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: "10px",
              marginBottom: "20px",
            }}
          >
            <InstagramIcon />
            <FacebookIcon />
            <TwitterIcon />
            <LinkedInIcon />
          </Box>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 1,
            }}
          >
            <CopyrightIcon fontSize="20" /> {new Date().getFullYear()} Your
            Website. All rights reserved.
          </Typography>
        </Box>
      </FooterBg>
    </Paper>
  );
};

export default Footer;
