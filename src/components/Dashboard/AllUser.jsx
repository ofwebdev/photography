import * as React from "react";
import { useQuery } from "@tanstack/react-query";
import { DataGrid } from "@mui/x-data-grid";
import { Grid, Typography } from "@mui/material";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "lastName", headerName: "Last name", width: 130 },
  {
    field: "email",
    headerName: "Email",
    type: "text",
    width: 190,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
  {
    field: "role",
    headerName: "Role",
    width: 120,
    renderCell: (params) => {
      const [open, setOpen] = React.useState(false);
      const [role, setRole] = React.useState("");

      const handleOpen = () => {
        setOpen(true);
        setRole(params.row.role || "");
      };

      const handleClose = () => {
        setOpen(false);
      };

      const handleSave = () => {
        // Update the role and save changes
        // You can implement your own logic here
        console.log("Save role for user with ID:", params.id);
        console.log("New role:", role);
        setOpen(false);
      };

      return (
        <>
          <Button variant="outlined" size="small" onClick={handleOpen}>
            Update Role
          </Button>
          <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Update Role</DialogTitle>
            <DialogContent>
              <TextField
                label="Role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button onClick={handleSave} variant="contained" color="primary">
                Save
              </Button>
            </DialogActions>
          </Dialog>
        </>
      );
    },
  },
];

export default function AllUser() {
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await fetch("http://localhost:5000/users");
    return res.json();
  });

  console.log(users);

  // Map the fetched users to rows
  const rows = users.map((user, index) => ({
    id: index + 1,
    lastName: user.name,
    firstName: user.firstName,
    age: user.age,
    email: user.email,
    role: user.role,
  }));

  return (
    <Grid item xs={12} md={9}>
      <Typography variant="h6">All users</Typography>
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          checkboxSelection
        />
      </div>
    </Grid>
  );
}
