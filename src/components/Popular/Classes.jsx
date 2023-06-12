import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  CssBaseline,
} from "@mui/material";

import { useQuery } from "@tanstack/react-query";
import Loader from "../Loader/Loader";
import useAxiosSecureInterceptor from "../../hooks/useAxiosSecureInterceptor";
import AppBarHeader from "../Navbar/AppBarHeader";
import Footer from "../Footer/Footer";
import ClassCard from "./ClassCard";

const Classes = () => {
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
    return <Loader />;
  }

  if (isError) {
    return <Typography>Error fetching classes.</Typography>;
  }

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
                <ClassCard key={classItem._id} classItem={classItem} />
              ))}
          </Grid>
        </Box>
      </Container>

      <Footer />
    </>
  );
};

export default Classes;
