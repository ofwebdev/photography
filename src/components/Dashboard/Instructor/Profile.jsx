import React, { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import { Box, Button, Paper } from "@mui/material";
import { Link } from "react-router-dom";

function Profile() {
  const { user } = useContext(AuthContext);

  const handleUpdateProfile = () => {
    // Add the logic to handle the update profile functionality
    console.log("Updating profile...");
  };

  return (
    <Box ml={5} mt={5}>
      <Paper>
        <Box p={4}>
          <h2>Profile Details</h2>

          <p>{user.photoURL}</p>
          <p>Name: {user.displayName}</p>
          <p>Email: {user.email}</p>
          <Button
            component={Link}
            to={"/profile/update"}
            variant="contained"
            onClick={handleUpdateProfile}
          >
            Update Profile
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}

export default Profile;
