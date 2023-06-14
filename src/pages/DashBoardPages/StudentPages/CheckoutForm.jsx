import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import "./CheckoutForm.css";
import { useAuth } from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Loader from "../../../components/Shared/Loader/Loader";
import { toast } from "react-hot-toast";
import { ImSpinner } from "react-icons/im";

const CheckoutForm = ({classes, fees }) => {
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useAuth();
  const [cardError, setCardError] = useState("");
  const [axiosSecure] = useAxiosSecure();
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");

  useEffect(() => {
    if (fees > 0) {
      axiosSecure.post("/create-payment-intent", { fees }).then((res) => {
        // console.log(res.data.clientSecret);
        setClientSecret(res.data.clientSecret);
      });
    }
  }, [fees, axiosSecure]);

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
    console.log("Stripe card", card);

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log("Stripe errror", error);
      setCardError(error.message);
    } else {
      setCardError("");
      console.log("My payment Method", paymentMethod);
    }
    setProcessing(true);
    if (processing) {
      return <Loader></Loader>;
    }

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "unknown",
            name: user?.displayName || "anonymous",
          },
        },
      });
    if (confirmError) {
      console.log(confirmError);
    }
    console.log("My payment Intent", paymentIntent);
    setProcessing(false);
    if (paymentIntent.status === "succeeded") {
      setTransactionId(paymentIntent.id);
      //TODO: NEXT STEP:

      // Save Payment Information to the server
      const payment = {
        email: user?.email,
        transactionId: paymentIntent.id,
        fees,
        date: new Date(),
        status: "Paid",
        class_name: classes.class_name,
        available_seats: classes.available_seats,
        instructor_name: classes.instructor_name,
        instructor_email: classes.instructor_email
      };
       axiosSecure.patch("/selectedClass", payment).then((res) => {
         setProcessing(true);
         console.log(res.data);
         if (res.data.modifiedCount) {
           toast.success("Payment Successfull!");
           setProcessing(false)
         }
       });
    }
  };

  return (
    <>
      <form className="w-2/5 m-8 text-center space-y-8" onSubmit={handleSubmit}>
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
        <button
          className="shadow-sm bg-darkAmber hover:bg-white hover:text-darkGray cursor-pointer text-white duration-300 rounded-md font-bold text-sm px-6 py-2"
          type="submit"
          disabled={!stripe || !clientSecret || processing}
        >
          {processing ? (
            <ImSpinner className="animate-spin m-auto" size={24} />
          ) : (
            "Pay"
          )}
        </button>
      </form>
      {cardError && <p className="text-red-500 font-semibold">{cardError}</p>}
      {transactionId && (
        <p className="text-green-500 text-center">
          Your Transaction completed with <br /> TransactionId: {transactionId}
        </p>
      )}
    </>
  );
};

export default CheckoutForm;
