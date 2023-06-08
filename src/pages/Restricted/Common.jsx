import React from "react";
import styled from "@emotion/styled";
import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const BigText = styled(Typography)`
  font-size: 48px;
  font-weight: bold;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
`;

function Common({ title, subtitle, img, btn }) {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" mt={8}>
      <BigText variant="subtitle1">{title}</BigText>
      <Typography variant="body1">{subtitle}</Typography>
      <img style={{ width: "300px" }} src={img} alt={"Image"} />
      <Button variant="contained" color="primary">
        <StyledLink to={"/"}>{btn}</StyledLink>
      </Button>
    </Box>
  );
}

export default Common;
