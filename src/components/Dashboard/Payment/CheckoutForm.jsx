import { useEffect, useState } from "react";

import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecureInterceptor from "../../../hooks/useAxiosSecureInterceptor";
import { Box, Button, Typography } from "@mui/material";

const CheckoutForm = ({ select, price }) => {
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecureInterceptor();
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");

  useEffect(() => {
    if (price > 0) {
      axiosSecure.post("/create-payment-intent", { price }).then((res) => {
        console.log(res.data.clientSecret);
        setClientSecret(res.data.clientSecret);
      });
    }
  }, [price, axiosSecure]);

  console.log(price);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("error", error);
      setCardError(error.message);
    } else {
      setCardError("");
      console.log("payment method");
    }

    setProcessing(true);

    const { paymentIntent, error: confirmError } = clientSecret
      ? await stripe.confirmCardPayment(clientSecret, {
          payment_method: {
            card: card,
            billing_details: {
              email: user?.email || "unknown",
              name: user?.displayName || "anonymous",
            },
          },
        })
      : {};

    if (confirmError) {
      console.log(confirmError);
    }

    console.log("payment intent", paymentIntent);
    setProcessing(false);
    if (paymentIntent && paymentIntent.status === "succeeded") {
      setTransactionId(paymentIntent.id);
      // save payment information to the server
      const payment = {
        email: user?.email,
        transactionId: paymentIntent.id,
        price,
        date: new Date(),
        quantity: select.length,
        selectItems: select.map((item) => item._id),
        menuItems: select.map((item) => item.menuItemId),
        status: "service pending",
        itemNames: select.map((item) => item.name),
      };
      axiosSecure.post("/payments", payment).then((res) => {
        console.log(res.data);
        if (res.data.insertResult.insertedId) {
          // display confirm
        }
      });
    }
  };

  return (
    <>
      <Box component={"form"} onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <Box sx={{ mt: 3 }}>
          <Button
            variant="contained"
            type="submit"
            disabled={!stripe || !clientSecret || processing}
          >
            Pay
          </Button>
        </Box>
      </Box>
      {cardError && <Typography color="error">{cardError}</Typography>}
      {transactionId && (
        <Typography color="success" mt={2}>
          Transaction complete with transactionId: {transactionId}
        </Typography>
      )}
    </>
  );
};

export default CheckoutForm;
