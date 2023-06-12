import React, { useState } from "react";
import {
  Box,
  Card,
  Grid,
  Typography,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Menu,
  IconButton,
  MenuItem,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  LinearProgress,
} from "@mui/material";

import { MoreVert as MoreVertIcon } from "@mui/icons-material";

import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import useAxiosSecureInterceptor from "../../hooks/useAxiosSecureInterceptor";
import axios from "axios";
import Swal from "sweetalert2";
import FeedbackPopup from "./FeedbackPopup";

const AllClasses = () => {
  const [axiosSecure] = useAxiosSecureInterceptor();
  const [status, setStatus] = useState("");
  const [openDialog, setOpenDialog] = useState(false);
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
    return (
      <Box sx={{ width: "50%", margin: "auto" }}>
        <LinearProgress />
      </Box>
    );
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

  const updateClassStatus = (classId, newStatus) => {
    // Perform the API request to update the class status
    fetch(`https://backend-pi-ten.vercel.app/class/${classId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status: newStatus }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${status} is now updated`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
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

            <ListItemText
              primary={classItem.status}
              sx={{
                backgroundColor: "#e0e0e0",
                borderRadius: "10px",
                display: "inline-block",
                p: 1,
              }}
            />
            <FeedbackPopup
              buttonText="Send Feedback"
              iconButton={true}
              onSubmit={(feedback) => {
                // Handle the feedback submission here
                console.log(feedback);
              }}
              id={classItem._id}
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
              <MenuItem
                onClick={() => updateClassStatus(classItem._id, "Pending")}
              >
                Pending
              </MenuItem>
              <MenuItem
                onClick={() => updateClassStatus(classItem._id, "Approved")}
              >
                Approved
              </MenuItem>
              <MenuItem
                onClick={() => updateClassStatus(classItem._id, "Denied")}
              >
                Denied
              </MenuItem>
            </Menu>

            {/* Dialog for updating status */}
            <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
              <DialogTitle>Update Status</DialogTitle>
              <DialogContent>
                <Typography>
                  Are you sure you want to update the status to {status}?
                </Typography>
              </DialogContent>
              <DialogActions>
                <Button onClick={() => setOpenDialog(false)}>Cancel</Button>

                <Button
                  variant="contained"
                  onClick={() => updateClassStatus(selectedClassId, status)}
                >
                  Update
                </Button>
              </DialogActions>
            </Dialog>
          </ListItem>
        ))}
      </List>
    </Grid>
  );
};

export default AllClasses;
