import React, { useState, useEffect } from "react";
import { commerce } from "../../lib/commerce";
import {
  Paper,
  Stepper,
  Step,
  StepLabel,
  Typography,
  CircularProgress,
  Divider,
} from "@material-ui/core";
import useStyles from "./styles";
import AddressForm from "../CheckoutForm/AddressForm";
import PaymentForm from "../CheckoutForm/PaymentForm";
const steps = ["Shipping Address", "Payment Details"];

const Checkout = ({ cart, order, onCaptureCheckout, error, onRefreshCart }) => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [checkoutToken, setCheckoutToken] = useState(null);
  const [shippingData, setShippingData] = useState({});

  //The token received from the API gives a lot of data about the checkout process.
  useEffect(() => {
    const generateToken = async () => {
      try {
        const token = await commerce.checkout.generateToken(cart.id, {
          type: "cart",
        });

        setCheckoutToken(token);
      } catch (error) {}
    };
    generateToken();
  }, [cart]);

  const nextStep = () =>
    setActiveStep((previousActiveStep) => previousActiveStep + 1);
  const backStep = () =>
    setActiveStep((previousActiveStep) => previousActiveStep - 1);
  const next = (data) => {
    setShippingData(data);
    nextStep();
  };
  const Confirmation = () => <div>Confirmation</div>;

  if (!checkoutToken) {
    return (
      //to add an animation here for the loading page.
      <div>
        <Typography variant="h1" className={classes.title}>
          Loading...
        </Typography>
      </div>
    );
  }
  const Form = () =>
    activeStep === 0 ? (
      <AddressForm cart={cart} checkoutToken={checkoutToken} next={next} />
    ) : (
      <PaymentForm
        checkoutToken={checkoutToken}
        shippingData={shippingData}
        backStep={backStep}
        nextStep={nextStep}
        onCaptureCheckout={onCaptureCheckout}
        onRefreshCart={onRefreshCart}
      />
    );
  return (
    <>
      <div className={classes.toolbar} />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((step) => (
              <Step key={step}>
                <StepLabel>{step}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <Confirmation />
          ) : (
            checkoutToken && <Form />
          )}
        </Paper>
      </main>
    </>
  );
};

export default Checkout;
