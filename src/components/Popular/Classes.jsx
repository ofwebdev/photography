import React, { useContext, useState } from "react";
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
  CssBaseline,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";

import NearMeIcon from "@mui/icons-material/NearMe";
import DescriptionIcon from "@mui/icons-material/Description";
import { useQuery } from "@tanstack/react-query";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Loader from "../Loader/Loader";
import useAxiosSecureInterceptor from "../../hooks/useAxiosSecureInterceptor";
import AppBarHeader from "../Navbar/AppBarHeader";
import Footer from "../Footer/Footer";
import axios from "axios";
import { AuthContext } from "../../provider/AuthProvider";

const Classes = () => {
  const [axiosSecure] = useAxiosSecureInterceptor();
  const [openDialog, setOpenDialog] = useState(false);
  const [dialogMessage, setDialogMessage] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  const { user } = useContext(AuthContext);

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
    return <Loader />;
  }

  if (isError) {
    return <Typography>Error fetching classes.</Typography>;
  }

  const handleAddToSelect = async (classItem) => {
    if (user && user.email) {
      try {
        const result = await axios.post(
          "http://localhost:5000/select",
          classItem
        );
        console.log(result.data); // log the response if needed
        if (result.data.alreadyExists) {
          setDialogMessage("Item already exists in selection");
        } else {
          setDialogMessage("Item successfully selected");
        }
        setOpenDialog(true);
      } catch (error) {
        console.error("Error adding class to select:", error);
        setDialogMessage("Failed to select item");
        setOpenDialog(true);
      }
    } else {
      navigate("/login", { state: { from: location } });
    }
  };

  return (
    <>
      <CssBaseline />
      <AppBarHeader />

      <Container maxWidth="xl">
        <Box my={5}>
          <Grid container spacing={2}>
            {classes
              .filter((classItem) => classItem.status === "Approved")
              .map((classItem) => (
                <Grid key={classItem._id} item xs={12} sm={6} md={4}>
                  <Card sx={{ maxWidth: 345 }}>
                    <CardMedia sx={{ height: 140 }} image={classItem.image} />
                    <CardContent sx={{ pb: 0 }}>
                      <Typography gutterBottom variant="h6" component="div">
                        {classItem.class_name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Price : ${classItem.price}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Seats : {classItem.seats}
                      </Typography>
                    </CardContent>
                    <CardActions
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        mb: 2,
                      }}
                    >
                      <Button
                        component={Link}
                        to={"/details"}
                        size="small"
                        variant="contained"
                        sx={{ textTransform: "capitalize" }}
                        startIcon={<DescriptionIcon />}
                      >
                        Learn More
                      </Button>
                      <Button
                        size="small"
                        variant="contained"
                        sx={{ textTransform: "capitalize" }}
                        endIcon={<NearMeIcon />}
                        onClick={() => handleAddToSelect(classItem)}
                      >
                        Add to select
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
          </Grid>
        </Box>

        <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
          <DialogTitle>Message</DialogTitle>
          <DialogContent>
            <Typography>{dialogMessage}</Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpenDialog(false)} autoFocus>
              OK
            </Button>
          </DialogActions>
        </Dialog>
      </Container>

      <Footer />
    </>
  );
};

export default Classes;
