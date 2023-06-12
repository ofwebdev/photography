import { useState } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Card,
  CardContent,
  CardActions,
  CardMedia,
} from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import useSelect from "../../../hooks/useSelect";
import { Link } from "react-router-dom";

const SelectedItems = () => {
  const [select, refetch] = useSelect();
  const [deleteItem, setDeleteItem] = useState(null);

  const total = select.reduce((sum, item) => item.price + sum, 0);

  const handleDelete = (item) => {
    setDeleteItem(item);
  };

  const handleConfirmDelete = () => {
    if (deleteItem) {
      fetch(`http://localhost:5000/select/${deleteItem._id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            refetch();
          }
        });
    }
    setDeleteItem(null);
  };

  const handleCancelDelete = () => {
    setDeleteItem(null);
  };

  return (
    <Grid item xs={12} md={9} mt={10}>
      <Box
        mb={3}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Typography variant="h6">Total Items: {select.length}</Typography>
          <Typography variant="h6">Total Price: ${total}</Typography>
        </Box>
        <Link to="/dashboard/payment">
          <Button variant="contained" color="warning" size="small">
            PAY
          </Button>
        </Link>
      </Box>

      <Grid container spacing={2}>
        {select.map((item, index) => (
          <Grid item xs={12} sm={6} key={item._id}>
            <Card variant="outlined" sx={{ mb: 2, maxWidth: 345 }}>
              <CardContent>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                >
                  <CardMedia
                    component="img"
                    alt="green iguana"
                    height="140"
                    image={item.image}
                  />
                  <Box sx={{ ml: 2 }}>
                    <Typography variant="h6">{item.class_name}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      Price: ${item.price}
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
              <CardActions>
                <Button
                  variant="contained"
                  color="error"
                  onClick={() => handleDelete(item)}
                >
                  <DeleteForeverIcon />
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Dialog open={Boolean(deleteItem)} onClose={handleCancelDelete}>
        <DialogTitle>Confirm Delete</DialogTitle>
        <DialogContent>
          <Typography>Are you sure you want to delete this item?</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancelDelete} color="primary">
            Cancel
          </Button>
          <Button onClick={handleConfirmDelete} color="primary" autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Grid>
  );
};
export default SelectedItems;
