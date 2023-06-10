import React, { useContext } from "react";
import { Avatar, Box, Button, Grid, Typography } from "@mui/material";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { AccountCircle } from "@mui/icons-material";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import EmailIcon from "@mui/icons-material/Email";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import styled from "@emotion/styled";
import AllUser from "./AllUser";
import AddClass from "./AddClass";

const StyledNavButton = styled(Button)`
  width: 100%;
  text-align: left;
  justify-content: flex-start;
  text-transform: capitalize;
  font-size: 16px;
`;

const Dashboard = () => {
  const { user } = useContext(AuthContext);

  return (
    <Grid container spacing={2}>
      {/* Left Side - User Image, User Name, and Link */}
      <Grid item xs={6} md={3}>
        <Box borderRight="1px dashed #f1f1f1" sx={{ paddingRight: "16px" }}>
          <Box sx={{ mx: 2, my: 3 }}>
            <img
              src={
                "https://phero-web.nyc3.cdn.digitaloceanspaces.com/website-prod-images/public/files/1673291260756.png"
              }
              style={{ width: "40px", height: "40px", marginRight: "15px" }}
              alt=""
            />
          </Box>

          <Box
            display="flex"
            alignItems="center"
            sx={{
              gap: "10px",
              padding: "20px",
              backgroundColor: "#f2f2f2",
              borderRadius: "10px",
              mx: 2,
              mb: 3,
            }}
          >
            <div>
              {user ? (
                <div>
                  {user.photoURL && (
                    <Avatar
                      alt={user.displayName}
                      src={user.photoURL}
                      sx={{ width: 40, height: 40, borderRadius: "50%" }}
                    />
                  )}
                </div>
              ) : (
                <AccountCircle />
              )}
            </div>

            <div>
              {user ? (
                <Typography>{user.displayName}</Typography>
              ) : (
                <Typography>Guest</Typography>
              )}
            </div>
          </Box>

          <Box
            display="flex"
            alignItems="flex-start"
            flexDirection={"column"}
            p={2}
          >
            <StyledNavButton component={Link} to="/dashboard">
              <SpaceDashboardIcon sx={{ fontSize: 24, pr: 2 }} />
              Dashboard
            </StyledNavButton>

            <StyledNavButton
              component={Link}
              to="/profile"
              sx={{ "&.active": { color: "red" } }}
            >
              <PersonIcon sx={{ fontSize: 24, pr: 2 }} />
              Profile
            </StyledNavButton>

            <StyledNavButton
              component={Link}
              to="/dashboard/addclass"
              sx={{ "&.active": { color: "red" } }}
            >
              <SettingsIcon sx={{ fontSize: 24, pr: 2 }} />
              Add class
            </StyledNavButton>

            <StyledNavButton
              component={Link}
              to="/messages"
              sx={{ "&.active": { color: "red" } }}
            >
              <EmailIcon sx={{ fontSize: 24, pr: 2 }} />
              Messages
            </StyledNavButton>

            <StyledNavButton
              component={Link}
              to="/logout"
              sx={{ "&.active": { color: "red" } }}
            >
              <ExitToAppIcon sx={{ fontSize: 24, pr: 2 }} />
              Logout
            </StyledNavButton>
            <StyledNavButton
              component={Link}
              to="/dashboard/allusers"
              sx={{ "&.active": { color: "red" } }}
            >
              <ManageAccountsIcon sx={{ fontSize: 24, pr: 2 }} />
              User
            </StyledNavButton>
          </Box>
        </Box>
      </Grid>

      {/* Right Side - Content */}
      <Outlet />
    </Grid>
  );
};

export default Dashboard;
