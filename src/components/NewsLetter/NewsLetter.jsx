import React, { useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";
import SectionTitle from "../SectionTitle/SectionTitle";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(email);
    // Reset the email field
    setEmail("");
  };

  return (
    <Box my={10}>
      <SectionTitle title="Subscribe our news letter" />
      <Box
        component={"form"}
        onSubmit={handleSubmit}
        sx={{
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 2,

          "@media (max-width: 600px)": {
            flexDirection: "column",
          },
        }}
      >
        <TextField
          label="Email"
          type="email"
          value={email}
          onChange={handleEmailChange}
          required
          placeholder="Enter your Email"
          sx={{
            width: "400px",
            "@media (max-width: 600px)": {
              width: "270px",
            },
          }}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          py={10}
          sx={{ height: "50px" }}
        >
          Subscribe
        </Button>
      </Box>
    </Box>
  );
};

export default Newsletter;
