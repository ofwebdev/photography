import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  InputAdornment,
  IconButton,
} from "@mui/material";
import styled from "@emotion/styled";
import { Visibility, VisibilityOff, Google } from "@mui/icons-material";

const NeedPadding = styled(Box)`
  padding-left: 80px;
  padding-right: 80px;

  @media (max-width: 600px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;
const GoogleButton = styled(Button)`
  background-color: #fff;
  color: #757575;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 16px;
  text-transform: none;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;

  &:hover {
    background-color: #f1f1f1;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #66bb6a;
  font-weight: bold;
`;

function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform form submission logic here
    console.log("Form submitted");
    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Confirm Password:", confirmPassword);

    // Reset form fields
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleGoogleRegister = () => {
    // Handle Google login logic here
    console.log("Logging in with Google");
  };
  return (
    <Grid
      container
      spacing={2}
      justifyContent="center"
      alignItems="center"
      //   py={8}
    >
      <Grid item xs={12} sm={6}>
        <img
          src={`https://i.ibb.co/WPJFwCC/illustration-dashboard.png`}
          alt=""
          style={{ width: "100%", height: "auto" }}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <NeedPadding marginTop={4}>
          <Box>
            <Typography variant="h5" mb={2} sx={{ fontWeight: "bold" }}>
              Get started absolutely free
            </Typography>
            <Typography
              variant="subtitle1"
              display="flex"
              mb={5}
              sx={{ gap: "10px" }}
            >
              Already have an account?
              <StyledLink to="/login">Sign in</StyledLink>
            </Typography>
          </Box>
          <form onSubmit={handleSubmit} style={{ width: "100%" }}>
            <Box mb={3} display={"flex"} sx={{ gap: "15px" }}>
              <TextField
                label="First Name"
                type="text"
                fullWidth
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <TextField
                label="Last Name"
                type="text"
                fullWidth
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </Box>
            <Box mb={3}>
              <TextField
                label="Email address"
                type="email"
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Box>
            <Box mb={3}>
              <TextField
                label="Password"
                type={showPassword ? "text" : "password"}
                fullWidth
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Box>
            <Box mb={3}>
              <TextField
                label="Confirm Password"
                type={showPassword ? "text" : "password"}
                fullWidth
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={handleTogglePassword}>
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
            <Typography
              variant="subtitle2"
              mt={3}
              display="flex"
              justifyContent="flex-end"
            >
              <Link to="/forgot-password">Forgot password?</Link>
            </Typography>
            <Box mt={2}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                sx={{ padding: "16px" }}
              >
                Login
              </Button>
              <Box mt={2}>
                <GoogleButton onClick={handleGoogleRegister} fullWidth>
                  <Google />
                  Register with Google
                </GoogleButton>
              </Box>
            </Box>
          </form>
        </NeedPadding>
      </Grid>
    </Grid>
  );
}

export default Register;
