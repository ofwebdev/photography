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
} from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import useAxiosSecureInterceptor from "../../hooks/useAxiosSecureInterceptor";

const AllClasses = () => {
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
    return <Typography>Loading...</Typography>;
  }

  if (isError) {
    return <Typography>Error fetching classes.</Typography>;
  }

  console.log(classes);

  return (
    <Grid item xs={12} md={9} mt={10}>
      {classes.map((classItem) => (
        <Grid item key={classItem._id} xs={12} sm={6} md={4} lg={3}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia component="img" height="140" image={classItem.image} />
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

export default AllClasses;
