import React from "react";
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
  LinearProgress,
} from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecureInterceptor from "../../../hooks/useAxiosSecureInterceptor";
import { Link } from "react-router-dom";

const MyClass = () => {
  const [axiosSecure] = useAxiosSecureInterceptor();

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

  const statusOpacities = {
    Approved: 1,
    Pending: 0.6,
    Denied: 0.3,
  };

  return (
    <Grid container spacing={2} xs={12} md={9} mt={10}>
      {classes.map((classItem) => (
        <Grid
          item
          key={classItem._id}
          xs={12}
          sm={6}
          md={4}
          sx={{
            opacity: statusOpacities[classItem.status] || 1,
          }}
        >
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="div"
              sx={{
                position: "relative",
                height: "140px",
                overflow: "hidden",
              }}
            >
              <img
                src={classItem.image}
                alt={classItem.class_name}
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                }}
              />
              <Typography
                variant="subtitle1"
                sx={{
                  position: "absolute",
                  bottom: "0",
                  left: "0",
                  padding: "8px",
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  color: "white",
                }}
              >
                Status : {classItem.status}
              </Typography>
            </CardMedia>

            <CardContent sx={{ pb: 0 }}>
              <Typography gutterBottom variant="h5" component="div">
                {classItem.class_name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Price : ${classItem.price}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Seats : {classItem.seats}
              </Typography>
            </CardContent>
            <CardActions>
              <Button component={Link} to={"/details"} size="small">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default MyClass;
