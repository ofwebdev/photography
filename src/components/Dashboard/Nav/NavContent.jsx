import React, { useContext } from "react";
import useAdmin from "../../../hooks/useAdmin";
import useInstructor from "../../../hooks/useInstructor";
import useStudent from "../../../hooks/useStudent";
import styled from "@emotion/styled";
import Loader from "../../Loader/Loader";
import { AuthContext } from "../../../provider/AuthProvider";

import { AccountCircle } from "@mui/icons-material";
import SchoolIcon from "@mui/icons-material/School";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import PaymentIcon from "@mui/icons-material/Payment";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import PortraitIcon from "@mui/icons-material/Portrait";
import AddBoxIcon from "@mui/icons-material/AddBox";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import SettingsIcon from "@mui/icons-material/Settings";

import {
  Avatar,
  Box,
  Drawer,
  Paper,
  Typography,
  Button,
  Stack,
  alpha,
} from "@mui/material";
import { Link } from "react-router-dom";
import Scrollbar from "../../Scroll";

const StyledNavButton = styled(Button)`
  width: 100%;
  text-align: left;
  justify-content: flex-start;
  text-transform: capitalize;
  font-size: 16px;
`;

const StyledAccount = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  padding: theme.spacing(2, 2.5),
  borderRadius: Number(theme.shape.borderRadius) * 1.5,
  backgroundColor: alpha(theme.palette.grey[500], 0.12),
}));

function NavContent() {
  const { user } = useContext(AuthContext);

  const [isAdmin, isAdminLoading] = useAdmin();
  const [isInstructor, isInstructorLoading] = useInstructor();
  const [isStudent, isStudentLoading] = useStudent();

  if (isAdminLoading || isInstructorLoading || isStudentLoading) {
    // Loading state
    return <Loader />;
  }

  const renderContent = (
    <Scrollbar>
      <Box>
        <Box sx={{ px: 2.5, py: 3, display: "inline-flex" }}>
          <Link to={"/"}>
            <img
              src={
                "https://phero-web.nyc3.cdn.digitaloceanspaces.com/website-prod-images/public/files/1673291260756.png"
              }
              style={{ width: "40px", height: "40px", marginRight: "15px" }}
              alt=""
            />
          </Link>
        </Box>

        <Box sx={{ mb: 5, mx: 2.5 }}>
          <StyledAccount>
            <Box>
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
            </Box>

            <Box>
              {user ? (
                <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
                  {user.displayName}
                </Typography>
              ) : (
                <Typography>Guest</Typography>
              )}
            </Box>
          </StyledAccount>
        </Box>

        {isAdmin && (
          <Box
            display="flex"
            alignItems="flex-start"
            flexDirection={"column"}
            p={1}
          >
            <StyledNavButton
              component={Link}
              to="/dashboard"
              sx={{
                "&.active": {
                  color: "text.primary",
                  bgcolor: "action.selected",
                  fontWeight: "fontWeightBold",
                },
              }}
            >
              <SpaceDashboardIcon sx={{ fontSize: "35px", pr: 2 }} />
              Dashboard
            </StyledNavButton>
            <StyledNavButton
              component={Link}
              to="/dashboard/allclasses"
              sx={{ "&.active": { color: "red" } }}
            >
              <SettingsIcon sx={{ fontSize: "35px", pr: 2 }} />
              Manage classes
            </StyledNavButton>

            <StyledNavButton
              component={Link}
              to="/dashboard/allusers"
              sx={{ "&.active": { color: "red" } }}
            >
              <ManageAccountsIcon sx={{ fontSize: "35px", pr: 2 }} />
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
              <SpaceDashboardIcon sx={{ fontSize: "35px", pr: 2 }} />
              Dashboard
            </StyledNavButton>

            <StyledNavButton
              component={Link}
              to="/dashboard/addclass"
              sx={{ "&.active": { color: "red" } }}
            >
              <AddBoxIcon sx={{ fontSize: "35px", pr: 2 }} />
              Add class
            </StyledNavButton>

            <StyledNavButton
              component={Link}
              to="/dashboard/myclass"
              sx={{ "&.active": { color: "red" } }}
            >
              <AddPhotoAlternateIcon sx={{ fontSize: "35px", pr: 2 }} />
              My class
            </StyledNavButton>

            <StyledNavButton
              component={Link}
              to="/dashboard/profile"
              sx={{ "&.active": { color: "red" } }}
            >
              <PortraitIcon sx={{ fontSize: "35px", pr: 2 }} />
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
              <SpaceDashboardIcon sx={{ fontSize: "35px", pr: 2 }} />
              Dashboard
            </StyledNavButton>

            <StyledNavButton
              component={Link}
              to="/dashboard/select"
              sx={{ "&.active": { color: "red" } }}
            >
              <SchoolIcon sx={{ fontSize: "35px", pr: 2 }} />
              Selected Class
            </StyledNavButton>

            <StyledNavButton
              component={Link}
              to="/dashboard/enroll"
              sx={{ "&.active": { color: "red" } }}
            >
              <SubscriptionsIcon sx={{ fontSize: "35px", pr: 2 }} />
              Enrolled Classes
            </StyledNavButton>

            <StyledNavButton
              component={Link}
              to="/dashboard/payment-history"
              sx={{ "&.active": { color: "red" } }}
            >
              <PaymentIcon sx={{ fontSize: "35px", pr: 2 }} />
              Payment History
            </StyledNavButton>
          </Box>
        )}

        <Box sx={{ px: 2.5, pb: 3, mt: 10 }}>
          <Stack
            alignItems="center"
            spacing={3}
            sx={{ pt: 5, borderRadius: 2, position: "relative" }}
          >
            <Box
              component="img"
              src={`https://minimal-kit-react.vercel.app/assets/illustrations/illustration_avatar.png`}
              sx={{ width: 100, position: "absolute", top: -50 }}
            />

            <Box sx={{ textAlign: "center" }}>
              <Typography gutterBottom variant="h6">
                Get more?
              </Typography>

              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                From only $69
              </Typography>
            </Box>

            <Button href="/" target="_blank" variant="contained">
              Upgrade to Pro
            </Button>
          </Stack>
        </Box>
      </Box>
    </Scrollbar>
  );
  return renderContent;
}

export default NavContent;
