import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import Swal from "sweetalert2";
import {
  Typography,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  IconButton,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Select,
  MenuItem,
  LinearProgress,
} from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";
import useAxiosSecureInterceptor from "../../hooks/useAxiosSecureInterceptor";

const AllUsers = () => {
  const [axiosSecure] = useAxiosSecureInterceptor();
  const {
    data: users = [],
    isLoading,
    refetch,
  } = useQuery(["users"], async () => {
    const res = await axiosSecure("/users");
    return res.data;
  });

  const [selectedUser, setSelectedUser] = useState(null);
  const [open, setOpen] = useState(false);

  const handleMakeAdmin = (user) => {
    setSelectedUser(user);
    setOpen(true);
  };

  if (isLoading) {
    return (
      <Box sx={{ width: "30%", margin: "auto" }}>
        <LinearProgress />
      </Box>
    );
  }

  const handleRoleSelection = (event) => {
    const selectedRole = event.target.value;

    console.log(selectedRole);

    if (selectedUser) {
      if (selectedUser.role === selectedRole) {
        // Already assigned the selected role
        setOpen(false);
        setSelectedUser(null);
        return;
      }

      if (selectedUser.role === "admin") {
        // Do not allow updating the role of an admin user
        setOpen(false);
        setSelectedUser(null);
        return;
      }

      fetch(
        `https://backend-pi-ten.vercel.app/users/role/${selectedUser._id}`,
        {
          method: "PATCH",
          body: JSON.stringify({ role: selectedRole }), // Use selectedRole instead of role
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.modifiedCount) {
            refetch();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${selectedUser.name} role is now updated`,
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    }

    setOpen(false);
    setSelectedUser(null);
  };

  const handleDelete = (user) => {
    // Handle delete operation
  };

  return (
    <Box mt={10} p={10}>
      <Typography>Total Users: {users.length}</Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Role</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user, index) => (
            <TableRow key={user._id}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>
                {user.role}

                <IconButton onClick={() => handleMakeAdmin(user)}>
                  <VerifiedUserIcon />
                </IconButton>
              </TableCell>
              <TableCell>
                <IconButton onClick={() => handleDelete(user)}>
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Select Role:</DialogTitle>
        <DialogContent>
          <Select
            value={selectedUser?.role || ""}
            onChange={handleRoleSelection}
            fullWidth
          >
            <MenuItem value="admin">Admin</MenuItem>
            <MenuItem value="instructor">Instructor</MenuItem>
            <MenuItem value="student">Student</MenuItem>
          </Select>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default AllUsers;
