import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import { Box, Typography } from "@mui/material";
import styled from "@emotion/styled";

const BorderBottom = styled("div")`
  border-bottom: 2px solid #ccc;
  margin-bottom: 30px;
  padding: 30px 200px;
  @media (max-width: 600px) {
    padding: 10px 20px;
  }
`;

const Paragraph = styled(Typography)`
  font-size: 20px;
`;

export default function Learn() {
  return (
    <BorderBottom>
      <Box mb={8}>
        <SectionTitle title={`Learn Photography Properly`} />
      </Box>
      <Paragraph mb={2}>
        Many photography students are confused by the sheer volume of
        information out there. We cut the wheat from the chaff, delivering easy
        to understand, professionally produced videos and guides that ensure
        you're on the right track from the outset.
      </Paragraph>

      <Paragraph>
        Since 2002 we've been training people to take beautiful photographs. By
        investing in our education, you'll be giving yourself the clearest, most
        concise and enjoyable photography training in the world.
      </Paragraph>
    </BorderBottom>
  );
}
