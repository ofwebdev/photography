import React from "react";
import { Typography } from "@mui/material";
import styled from "@emotion/styled";

const DivCenter = styled("div")`
  display: flex;
  //   justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 15px 0px;
`;

export default function SectionTitle({ title, subTitle }) {
  return (
    <DivCenter>
      <Typography variant="h4" sx={{ fontWeight: "bold" }}>
        {title}
      </Typography>
      <Typography variant="subtitle1">{subTitle}</Typography>
    </DivCenter>
  );
}
