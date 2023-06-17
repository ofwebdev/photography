import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import SectionTitle from "../../SectionTitle/SectionTitle";
import useSelect from "../../../hooks/useSelect";
import { Box, Paper, Typography } from "@mui/material";
import useAuth from "../../../hooks/useAuth";

// TODO: provide publishable Key
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PK);
const Pay = () => {
  // const [user] = useAuth()
  const [select] = useSelect();
  const total = select.reduce((sum, item) => sum + item.price, 0);
  const price = parseFloat(total.toFixed(2));
  return (
    <Box mt={5} pl={5}>
      <Paper>
        <Box p={2}>
          <SectionTitle subTitle="Good to go" title="Payment"></SectionTitle>
          <Typography variant="h5" mb={3}>
            Please process your payment!
          </Typography>
          <Elements stripe={stripePromise}>
            <CheckoutForm select={select} price={price}></CheckoutForm>
          </Elements>
        </Box>
      </Paper>
    </Box>
  );
};

export default Pay;
