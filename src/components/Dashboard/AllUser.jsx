import React from "react";
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
} from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";
const AllUsers = () => {
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await fetch("http://localhost:5000/users");
    return res.json();
  });

  const handleMakeAdmin = (user) => {
    fetch(`http://localhost:5000/users/admin/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} is an Admin Now!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
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
                {user.role === "admin" ? (
                  "admin"
                ) : (
                  <IconButton onClick={() => handleMakeAdmin(user)}>
                    <VerifiedUserIcon />
                  </IconButton>
                )}
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
    </Box>
  );
};

export default AllUsers;
