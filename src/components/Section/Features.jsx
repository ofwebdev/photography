import React from "react";
import { Box, Grid, Paper, Typography } from "@mui/material";
import SectionTitle from "../SectionTitle/SectionTitle";

function Features() {
  return (
    <Box py={8}>
      <Box mb={5}>
        <SectionTitle title="World-Class Photography Courses that Fit Your Budget" />
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Paper elevation={3} sx={{ padding: "20px" }}>
            <Typography variant="h6" component="h2">
              1. One-to-one feedback from a professional photographer
            </Typography>
            <Typography mt={2}>
              Receive personalized feedback and guidance from an experienced
              photographer to improve your skills.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper elevation={3} sx={{ padding: "20px" }}>
            <Typography variant="h6" component="h2">
              2. Learn photography anytime, anywhere, at your own pace
            </Typography>
            <Typography mt={2}>
              Access our online photography classes from anywhere and learn at
              your own pace, fitting your schedule.
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Paper elevation={3} sx={{ padding: "20px" }}>
            <Typography variant="h6" component="h2">
              3. Quality online classes for a fraction of the cost of
              traditional schools
            </Typography>
            <Typography mt={2}>
              Get high-quality photography education at an affordable price,
              eliminating the need for expensive traditional schools.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Features;
