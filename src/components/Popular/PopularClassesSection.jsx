import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AppBarHeader from "../Navbar/AppBarHeader";
import Footer from "../Footer/Footer";
import { Container, CssBaseline } from "@mui/material";
import { Link } from "react-router-dom";

export default function PopularClassesSection() {
  const [classes, setClasses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => {
        // Sort classes based on the number of students in descending order
        const sortedClasses = data.sort((a, b) => b.students - a.students);
        // Get the top 6 classes
        const topClasses = sortedClasses.slice(0, 6);
        setClasses(topClasses);
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
    <>
      <CssBaseline />
      <AppBarHeader />
      <Container maxWidth="xl">
        <Grid container spacing={2} mt={4}>
          {classes.map((classItem) => (
            <Grid item key={classItem.id} xs={12} sm={6} md={4} lg={3}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  alt={classItem.title}
                  height="140"
                  image={classItem.image}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {classItem.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {classItem.description}
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
      </Container>

      <Footer />
    </>
  );
}
