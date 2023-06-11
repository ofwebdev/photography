import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Box,
  Button,
  Container,
  CssBaseline,
  Grid,
  LinearProgress,
  Paper,
  Typography,
} from "@mui/material";
import AppBarHeader from "../Navbar/AppBarHeader";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import Loader from "../Loader/Loader";

function InstructorList() {
  const [instructors, setInstructors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch instructor IDs from the backend API
    axios
      .get("http://localhost:5000/instructors")
      .then((response) => {
        // Update the state with the fetched instructor IDs
        setInstructors(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <CssBaseline />
      <AppBarHeader />

      <Container maxWidth="xl">
        <main>
          <Grid container spacing={2} mt={5}>
            {instructors.map((instructor) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={instructor._id}>
                <Paper>
                  <Box p={5}>
                    <Typography>
                      Name:
                      {instructor.name.charAt(0).toUpperCase() +
                        instructor.name.slice(1)}
                    </Typography>
                    <Typography>
                      Role:
                      {instructor.role.charAt(0).toUpperCase() +
                        instructor.role.slice(1)}
                    </Typography>
                    <Typography>Email: {instructor.email}</Typography>

                    <Box mt={3}>
                      <Button variant="contained" component={Link} to="/">
                        See Classes
                      </Button>
                    </Box>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </main>
      </Container>

      <Footer />
    </>
  );
}

export default InstructorList;
