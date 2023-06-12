import React, { useEffect, useState } from "react";
import {
  Box,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import axios from "axios";
import styled from "@emotion/styled";

const useStyles = styled((theme) => ({
  listItem: {
    marginBottom: theme.spacing(2),
    backgroundColor: theme.palette.background.paper,
    borderRadius: theme.spacing(1),
    boxShadow: theme.shadows[1],
    padding: theme.spacing(2),
  },
  primaryText: {
    fontWeight: "bold",
  },
}));

const PaymentHistory = () => {
  const classes = useStyles();
  const [paymentHistory, setPaymentHistory] = useState([]);

  useEffect(() => {
    fetchPaymentHistory();
  }, []);

  const fetchPaymentHistory = async () => {
    try {
      const response = await axios.get(
        "https://backend-pi-ten.vercel.app/payment-history"
      );
      setPaymentHistory(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Grid item xs={12} md={9} mt={5} pl={2}>
      <Typography variant="h6" gutterBottom>
        Payment History
      </Typography>
      {paymentHistory.length > 0 ? (
        <Grid container spacing={2}>
          {paymentHistory.map((payment) => (
            <Grid item xs={12} sm={12} md={12} key={payment._id}>
              <ListItem className={classes.listItem}>
                <ListItemText
                  primary={`Amount: $${payment.price}`}
                  secondary={`Transaction ID: ${payment.transactionId}`}
                  primaryTypographyProps={{ className: classes.primaryText }}
                />
                <Typography variant="body2" color="textSecondary">
                  Payment Date: {payment.date}
                </Typography>
              </ListItem>
            </Grid>
          ))}
        </Grid>
      ) : (
        <Typography>No payment history available.</Typography>
      )}
    </Grid>
  );
};

export default PaymentHistory;
