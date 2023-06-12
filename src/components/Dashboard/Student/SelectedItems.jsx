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
  Menu,
  IconButton,
  MenuItem,
  ListItemIcon,
} from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import useSelect from "../../../hooks/useSelect";
import { Link } from "react-router-dom";
import { GridMoreVertIcon } from "@mui/x-data-grid";

const SelectedItems = () => {
  const [select, refetch] = useSelect();
  const [deleteItem, setDeleteItem] = useState(null);
  const [menuAnchorEl, setMenuAnchorEl] = useState(null);

  const handleMenuOpen = (event, item) => {
    setMenuAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchorEl(null);
  };

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
    <>
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
              <Card variant="outlined" sx={{ mb: 2 }}>
                <Box
                  sx={{
                    position: "relative",
                    backgroundColor: "#f5f5f5",
                    borderRadius: "4px",
                    p: 1,
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                >
                  <IconButton
                    aria-label="more"
                    aria-controls={`menu-${item._id}`}
                    aria-haspopup="true"
                    onClick={(e) => handleMenuOpen(e, item)}
                    sx={{ p: 1 }}
                  >
                    <GridMoreVertIcon />
                  </IconButton>
                  <Menu
                    id={`menu-${item._id}`}
                    anchorEl={menuAnchorEl}
                    open={Boolean(menuAnchorEl)}
                    onClose={handleMenuClose}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                  >
                    <MenuItem onClick={() => handleDelete(item)}>
                      <DeleteForeverIcon fontSize="small" />
                      <Typography variant="inherit">Delete</Typography>
                    </MenuItem>
                    <MenuItem>
                      <FavoriteBorderIcon fontSize="small" />
                      <Typography variant="inherit">Add Favorite</Typography>
                    </MenuItem>
                  </Menu>
                </Box>
                <CardContent>
                  <Box>
                    <CardMedia
                      component="img"
                      alt="green iguana"
                      height="140"
                      image={item.image}
                    />
                    <Box sx={{ ml: 0 }}>
                      <Typography variant="h6">{item.class_name}</Typography>
                      <Typography variant="body1">
                        Instructor Name: {item.instructor_name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Price: ${item.price}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Available Seats: {item.seats}
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
                <CardActions sx={{ ml: 1, mb: 1 }}>
                  <Button variant="contained">Enroll</Button>
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
    </>
  );
};
export default SelectedItems;
