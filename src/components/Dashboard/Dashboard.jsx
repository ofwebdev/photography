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
import AddBoxIcon from "@mui/icons-material/AddBox";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import PortraitIcon from "@mui/icons-material/Portrait";
import styled from "@emotion/styled";
import useAdmin from "../../hooks/useAdmin";
import useInstructor from "../../hooks/useInstructor";
import useStudent from "../../hooks/useStudent";
import Loader from "../Loader/Loader";

const StyledNavButton = styled(Button)`
  width: 100%;
  text-align: left;
  justify-content: flex-start;
  text-transform: capitalize;
  font-size: 16px;
`;

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin, isAdminLoading] = useAdmin();
  const [isInstructor, isInstructorLoading] = useInstructor();
  const [isStudent, isStudentLoading] = useStudent();

  if (isAdminLoading || isInstructorLoading || isStudentLoading) {
    // Loading state
    return <Loader />;
  }

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

          {isAdmin && (
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
                to="/dashboard/allclasses"
                sx={{ "&.active": { color: "red" } }}
              >
                <SettingsIcon sx={{ fontSize: 24, pr: 2 }} />
                Manage classes
              </StyledNavButton>

              <StyledNavButton
                component={Link}
                to="/dashboard/allusers"
                sx={{ "&.active": { color: "red" } }}
              >
                <ManageAccountsIcon sx={{ fontSize: 24, pr: 2 }} />
                Manage User
              </StyledNavButton>
            </Box>
          )}

          {isInstructor && (
            <Box
              display="flex"
              alignItems="flex-start"
              flexDirection="column"
              p={2}
            >
              <StyledNavButton component={Link} to="/dashboard">
                <SpaceDashboardIcon sx={{ fontSize: 24, pr: 2 }} />
                Dashboard
              </StyledNavButton>

              <StyledNavButton
                component={Link}
                to="/dashboard/addclass"
                sx={{ "&.active": { color: "red" } }}
              >
                <AddBoxIcon sx={{ fontSize: 24, pr: 2 }} />
                Add class
              </StyledNavButton>

              <StyledNavButton
                component={Link}
                to="/dashboard/myclass"
                sx={{ "&.active": { color: "red" } }}
              >
                <AddPhotoAlternateIcon sx={{ fontSize: 24, pr: 2 }} />
                My class
              </StyledNavButton>

              <StyledNavButton
                component={Link}
                to="/dashboard/profile"
                sx={{ "&.active": { color: "red" } }}
              >
                <PortraitIcon sx={{ fontSize: 24, pr: 2 }} />
                Profile
              </StyledNavButton>
            </Box>
          )}

          {isStudent && (
            <Box
              display="flex"
              alignItems="flex-start"
              flexDirection="column"
              p={2}
            >
              <StyledNavButton component={Link} to="/dashboard">
                <SpaceDashboardIcon sx={{ fontSize: 24, pr: 2 }} />
                Dashboard
              </StyledNavButton>

              <StyledNavButton
                component={Link}
                to="/dashboard/select"
                sx={{ "&.active": { color: "red" } }}
              >
                <SettingsIcon sx={{ fontSize: 24, pr: 2 }} />
                Selected Class
              </StyledNavButton>

              <StyledNavButton
                component={Link}
                to="/dashboard/enroll"
                sx={{ "&.active": { color: "red" } }}
              >
                <SettingsIcon sx={{ fontSize: 24, pr: 2 }} />
                Enrolled Classes
              </StyledNavButton>
            </Box>
          )}
        </Box>
      </Grid>
      <Outlet />
    </Grid>
  );
};

export default Dashboard;
