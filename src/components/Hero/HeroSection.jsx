import React from "react";
import styled from "@emotion/styled";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const HeroSectionWrapper = styled("div")`
  position: relative;
  width: 100%;
  height: 100vh;
  background-image: url(https://images.pexels.com/photos/3767346/pexels-photo-3767346.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2);
  background-size: cover;
  background-position: center;
  overflow: hidden;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(
    0,
    0,
    0,
    0.5
  ); /* Adjust the overlay color and opacity as needed */
`;

const ContentWrapper = styled("div")`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
`;

const BigText = styled(Typography)`
  font-size: 48px;
  font-weight: bold;
`;

const Paragraph = styled(Typography)`
  margin-top: 20px;
`;

const RoundedButton = styled(Button)`
  border-radius: 20px; /* Adjust the border radius as needed */
  margin-top: 20px;
`;

const HeroSection = () => {
  return (
    <HeroSectionWrapper>
      <Overlay />
      <ContentWrapper>
        <BigText>THE SCHOOL OF PHOTOGRAPHY</BigText>
        <Paragraph>Add your desired content here</Paragraph>
        <RoundedButton variant="contained" color="primary">
          Get start here
        </RoundedButton>
      </ContentWrapper>
    </HeroSectionWrapper>
  );
};

export default HeroSection;
