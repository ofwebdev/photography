import React, { useContext, useState } from "react";
import {
  Box,
  Button,
  FormControl,
  Grid,
  Input,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
import { AuthContext } from "../../provider/AuthProvider";

const AddClass = () => {
  const { user } = useContext(AuthContext);
  const [className, setClassName] = useState("");
  const [availableSeats, setAvailableSeats] = useState("");
  const [price, setPrice] = useState("");
  const [classImage, setClassImage] = useState(null);

  const handleAddClass = (event) => {
    event.preventDefault();
    // Add class logic here
    console.log("Add Class:", className, availableSeats, price, classImage);
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setClassImage(file);
  };

  return (
    <Grid item xs={12} md={9}>
      <Typography variant="h6">Add Class</Typography>
      <Box component="form" mt={2} onSubmit={handleAddClass} p={2}>
        <TextField
          label="Class Name"
          value={className}
          onChange={(e) => setClassName(e.target.value)}
          fullWidth
          required
          margin="normal"
        />
        <TextField
          label="Instructor Name"
          value={user?.displayName || ""}
          InputProps={{
            readOnly: true,
          }}
          fullWidth
          required
          margin="normal"
        />
        <TextField
          label="Instructor Email"
          value={user?.email || ""}
          InputProps={{
            readOnly: true,
          }}
          fullWidth
          required
          margin="normal"
        />
        <TextField
          label="Available Seats"
          type="number"
          value={availableSeats}
          onChange={(e) => setAvailableSeats(e.target.value)}
          fullWidth
          required
          margin="normal"
        />
        <TextField
          label="Price"
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          fullWidth
          required
          margin="normal"
        />
        <Box my={2}>
          <FormControl fullWidth>
            {/* <InputLabel htmlFor="class-image-input">Class Image</InputLabel> */}
            <Input
              id="class-image-input"
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
            />
          </FormControl>
        </Box>
        <Button type="submit" variant="contained" color="primary" mt={2}>
          Add
        </Button>
      </Box>
    </Grid>
  );
};

export default AddClass;
