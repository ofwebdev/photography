import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
  CardActions,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Menu,
  IconButton,
  MenuItem,
} from "@mui/material";

import { MoreVert as MoreVertIcon } from "@mui/icons-material";

import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import useAxiosSecureInterceptor from "../../hooks/useAxiosSecureInterceptor";

const AllClasses = () => {
  const [axiosSecure] = useAxiosSecureInterceptor();

  const [anchorEl, setAnchorEl] = useState(null);

  const {
    data: classes = [],
    isLoading,
    isError,
    refetch,
  } = useQuery(["class"], async () => {
    const res = await axiosSecure.get("/class");
    return res.data;
  });

  if (isLoading) {
    return <Typography>Loading...</Typography>;
  }

  if (isError) {
    return <Typography>Error fetching classes.</Typography>;
  }

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Grid item xs={12} md={9} mt={10}>
      <List>
        {classes.map((classItem) => (
          <ListItem
            key={classItem._id}
            sx={{
              backgroundColor: "#f2f2f2",
              borderRadius: "10px",
              mb: 3,
            }}
          >
            <ListItemAvatar>
              <Avatar alt={classItem.class_name} src={classItem.image} />
            </ListItemAvatar>
            <ListItemText
              primary={classItem.class_name}
              secondary={`Price: $${classItem.price}, Seats: ${classItem.seats}`}
            />

            <ListItemText
              primary={classItem.email}
              secondary={classItem.instructor_name}
            />
            <IconButton
              aria-controls="class-menu"
              aria-haspopup="true"
              onClick={handleMenuOpen}
            >
              <MoreVertIcon />
            </IconButton>
            <Menu
              id="class-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={handleMenuClose}>Pending</MenuItem>
              <MenuItem onClick={handleMenuClose}>Approved</MenuItem>
              <MenuItem onClick={handleMenuClose}>Denied</MenuItem>
            </Menu>
          </ListItem>
        ))}
      </List>
    </Grid>
  );
};

export default AllClasses;
