// import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
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
import useAxiosSecureInterceptor from "../../../hooks/useAxiosSecureInterceptor";

const img_hosting_token = import.meta.env.VITE_IMG_UPLOAD_API;

const AddClass = () => {
  const [axiosSecure] = useAxiosSecureInterceptor();
  const { register, handleSubmit, reset } = useForm();
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

  const onSubmit = (data) => {
    console.log(data);
    const formData = new FormData();
    formData.append("image", data.image[0]);

    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgResponse) => {
        if (imgResponse.success) {
          const imgURL = imgResponse.data.display_url;
          const { class_name, instructor_name, email, price, seats } = data;
          const newItem = {
            class_name,
            instructor_name,
            price: parseFloat(price),
            email,
            seats,
            image: imgURL,
          };
          console.log(newItem);
          axiosSecure.post("/class", newItem).then((data) => {
            console.log("posting after new class", data.data);
            if (data.data.insertedId) {
              reset();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Item added successfully",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
        }
      });
  };

  return (
    <Grid item xs={12} md={9}>
      <Typography variant="h6">Add Class</Typography>
      <Box component="form" mt={2} onSubmit={handleSubmit(onSubmit)} p={2}>
        <TextField
          label="Class Name"
          {...register("class_name", { required: true, maxLength: 120 })}
          fullWidth
          margin="normal"
          type="text"
        />
        <TextField
          label="Instructor Name"
          fullWidth
          margin="normal"
          type="text"
          {...register("instructor_name", { required: true, maxLength: 120 })}
        />
        <TextField
          label="Instructor Email"
          type="email"
          fullWidth
          margin="normal"
          {...register("email", { required: true })}
        />
        <TextField
          label="Available Seats"
          type="number"
          fullWidth
          margin="normal"
          {...register("seats", { required: true })}
        />
        <TextField
          label="Price"
          type="number"
          fullWidth
          margin="normal"
          {...register("price", { required: true })}
        />
        <Box my={2}>
          <FormControl fullWidth>
            <Input
              id="class-image-input"
              type="file"
              accept="image/*"
              {...register("image", { required: true })}
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
