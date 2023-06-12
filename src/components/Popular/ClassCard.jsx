import { useContext, useState } from "react";
import Swal from "sweetalert2";
import useSelect from "../../hooks/useSelect";
import { AuthContext } from "../../provider/AuthProvider";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  CardActions,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import NearMeIcon from "@mui/icons-material/NearMe";
import DescriptionIcon from "@mui/icons-material/Description";

import { Link, useLocation, useNavigate } from "react-router-dom";

const ClassCard = ({ classItem }) => {
  const [openDialog, setOpenDialog] = useState(false);
  const [dialogMessage, setDialogMessage] = useState("");
  const { class_name, image, price, seats, _id, instructor_name } = classItem;
  const [, refetch] = useSelect();
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useContext(AuthContext);

  const handleAddToSelect = (classItem) => {
    console.log(classItem);

    if (user && user.email) {
      const selectItem = {
        menuItemId: _id,
        class_name,
        instructor_name,
        image,
        price,
        seats,
        email: user.email,
      };
      fetch("http://localhost:5000/select", {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(selectItem),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.result.insertedId) {
            setDialogMessage("Item successfully selected");
            setOpenDialog(true);
          }
          if (data.alreadyExists) {
            refetch();
            setDialogMessage("Item already exists in selection");
            setOpenDialog(true);
          }
        });
    } else {
      setDialogMessage("Please login to order the food");
      setOpenDialog(true);
      setTimeout(() => {
        navigate("/login", { state: { from: location } });
      }, 2000);
    }
  };

  return (
    <>
      <Grid key={_id} item xs={12} sm={6} md={4}>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia sx={{ height: 140 }} image={image} />
          <CardContent sx={{ pb: 0 }}>
            <Typography gutterBottom variant="h6" component="div">
              {class_name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Price : ${price}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Seats : {seats}
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

      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>Message</DialogTitle>
        <DialogContent>
          <Typography>{dialogMessage}</Typography>
        </DialogContent>{" "}
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)} autoFocus>
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ClassCard;
