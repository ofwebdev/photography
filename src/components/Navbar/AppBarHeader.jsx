import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import { Link } from "react-router-dom";
import { Avatar, Button } from "@mui/material";
import DarkModeToggle from "../Dark/DarkModeToggle";

import { AuthContext } from "../../provider/AuthProvider";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function AppBarHeader() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const { user, logOut } = React.useContext(AuthContext);

  console.log(user);

  const logoutHandler = () => {
    logOut()
      .then(() => {
        setSuccess(true);
        setTimeout(() => {
          setSuccess(false);
        }, 1000);
      })
      .catch((error) => console.log(error));
  };

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem component={Link} to={"/profile"} onClick={handleMenuClose}>
        {user ? (
          <Typography>{user.displayName}</Typography>
        ) : (
          <Typography>Guest</Typography>
        )}
      </MenuItem>

      <MenuItem component={Link} to="/" color="inherit">
        Your selected class
      </MenuItem>

      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem component={Link} to="/" color="inherit">
        Home
      </MenuItem>
      <MenuItem component={Link} to="/instructors" color="inherit">
        Instructors
      </MenuItem>
      <MenuItem component={Link} to="/classes" color="inherit">
        Classes
      </MenuItem>
      {user && (
        <MenuItem component={Link} to="/dashboard" color="inherit">
          Dashboard
        </MenuItem>
      )}

      {user ? (
        <MenuItem onClick={logoutHandler} component={Link} color="inherit">
          Logout
        </MenuItem>
      ) : (
        <MenuItem component={Link} to="/login" color="inherit">
          Login
        </MenuItem>
      )}
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          edge="end"
          aria-label="account of current user"
          aria-controls={menuId}
          aria-haspopup="true"
          onClick={handleProfileMenuOpen}
          color="inherit"
          sx={{ paddingLeft: 0, marginRight: "1px" }}
        >
          {user ? (
            <div>
              {user.photoURL && (
                <Avatar
                  alt={user.displayName}
                  src={user.photoURL}
                  sx={{ width: 30, height: 30, borderRadius: "50%" }}
                />
              )}
            </div>
          ) : (
            <AccountCircle />
          )}
        </IconButton>
        <Typography>Profile</Typography>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }} alignItems={"center"}>
      <AppBar position="static">
        <Toolbar>
          <img
            src={
              "https://phero-web.nyc3.cdn.digitaloceanspaces.com/website-prod-images/public/files/1673291260756.png"
            }
            style={{ width: "50px", height: "50px", marginRight: "15px" }}
            alt=""
          />
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <MenuItem component={Link} to="/" color="inherit">
              Home
            </MenuItem>
            <MenuItem component={Link} to="/instructors" color="inherit">
              Instructors
            </MenuItem>
            <MenuItem component={Link} to="/classes" color="inherit">
              Classes
            </MenuItem>
            {user && (
              <MenuItem component={Link} to="/dashboard" color="inherit">
                Dashboard
              </MenuItem>
            )}

            {user ? (
              <MenuItem
                onClick={logoutHandler}
                component={Link}
                color="inherit"
              >
                Logout
              </MenuItem>
            ) : (
              <MenuItem component={Link} to="/login" color="inherit">
                Login
              </MenuItem>
            )}

            <DarkModeToggle />
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              {user ? (
                <div>
                  {user.photoURL && (
                    <Avatar
                      alt={user.displayName}
                      src={user.photoURL}
                      sx={{ width: 30, height: 30, borderRadius: "50%" }}
                    />
                  )}
                </div>
              ) : (
                <AccountCircle />
              )}
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
