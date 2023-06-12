import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from "@mui/material";
import Swal from "sweetalert2";

const FeedbackPopup = ({ buttonText, iconButton, onSubmit, id }) => {
  const [open, setOpen] = useState(false);
  const [feedback, setFeedback] = useState("");

  console.log(id);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleFeedbackChange = (event) => {
    setFeedback(event.target.value);
  };

  const handleSubmit = () => {
    fetch(`https://backend-pi-ten.vercel.app/class/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ feedback }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data.modifiedCount) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: `Sent feedback to user`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });

    // Perform the necessary actions with the feedback (e.g., send it to the server)
    console.log(feedback);

    // Reset the feedback and close the popup
    setFeedback("");
    handleClose();
  };

  return (
    <div>
      <Button onClick={handleOpen}>Send Feedback</Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Send Feedback</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            multiline
            rows={4}
            fullWidth
            value={feedback}
            onChange={handleFeedbackChange}
            placeholder="Enter your feedback"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button variant="contained" onClick={() => handleSubmit(id)}>
            Send
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default FeedbackPopup;
