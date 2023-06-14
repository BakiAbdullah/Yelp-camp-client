import { loadStripe } from "@stripe/stripe-js";
import SubHeading from "../../../components/MainHeading/SubHeading";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useLocation } from "react-router-dom";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
// TODO: Provide publishable key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {
  const location = useLocation();
  const singleClass = location.state;
  const newFee = parseFloat((singleClass.fees).toFixed(2));
  console.log(newFee);

  return (
    <div className="min-h-screen flex flex-col lg:mt-32 items-center">
      <SubHeading title={"Payment"}></SubHeading>
      <Elements stripe={stripePromise}>
        <CheckoutForm fees={newFee} classes={singleClass}></CheckoutForm>
      </Elements>
    </div>
  );
};

export default Payment;
