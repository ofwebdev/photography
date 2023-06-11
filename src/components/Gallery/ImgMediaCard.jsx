import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import SectionTitle from "../SectionTitle/SectionTitle";

export default function ImgMediaCard() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <Box my={4}>
      <SectionTitle title="Our Courses" />
      <Grid container spacing={2}>
        {items.map((item) => (
          <Grid item key={item.id} xs={12} sm={6} md={4} lg={3}>
            <Card sx={{ maxWidth: 345, p: 1 }}>
              <CardMedia
                component="img"
                alt={item.title}
                height="140"
                image={item.image}
                sx={{ borderRadius: 1 }}
              />
              <Box py={2}>
                <CardContent sx={{ p: 0 }}>
                  <Typography gutterBottom variant="h6" component="div">
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.description}
                  </Typography>
                </CardContent>
                <CardActions sx={{ p: 0 }}>
                  <Button
                    sx={{ p: 0 }}
                    component={Link}
                    to={"/details"}
                    size="small"
                  >
                    Learn More
                  </Button>
                </CardActions>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box textAlign={"center"} mt={5}>
        <Button component={Link} to="/classes" variant="contained">
          See popular classes
        </Button>
      </Box>
    </Box>
  );
}
