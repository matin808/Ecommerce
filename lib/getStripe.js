import { loadStripe } from "@stripe/stripe-js";

let stripePromise;

const getStripe = () => {
  if (!stripePromise) {
    // console.log(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
    stripePromise = loadStripe(
      "pk_test_51LIydsSB14llR4rrs5KWftn6MX04BgPPLC5xgxSgM2U1VwtassdSS1FSDg0ESg4Ey76V1lRBg13jTfWrXn7DlMY300S4qJAT7a"
    );
  }

  return stripePromise;
};

export default getStripe;
