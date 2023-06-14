import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import "./CheckoutForm.css";
import { useAuth } from "../../../hooks/useAuth";
// import { toast } from "react-hot-toast";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const CheckoutForm = ({  fees }) => {
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useAuth();
  const [cardError, setCardError] = useState("");
  const [axiosSecure] = useAxiosSecure();
  const [clientSecret, setClientSecret] = useState("");
  // const [processing, setProcessing] = useState(false);
  // const [transactionId, setTransactionId] = useState("");

  // useEffect(() => {
  // Create PaymentIntent as soon as the page loads
  //   fetch("/create-payment-intent", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => setClientSecret(data.clientSecret));
  // }, []);

  useEffect(() => {
    console.log(fees);
    if (fees > 0) {
      axiosSecure.post("/create-payment-intent", { fees }).then((res) => {
        console.log(res.data.clientSecret);
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
    console.log('Stripe card', card)

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
      console.log("payment Method", paymentMethod);
    }

    // setProcessing(true);

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

    console.log("payment Intent", paymentIntent);
    // setProcessing(false);
    /* if (paymentIntent.status === "succeeded") {
      setTransactionId(paymentIntent.id);
      // Save Payment Information to the server
      const payment = {
        email: user?.email,
        transactionId: paymentIntent.id,
        price: fees,
        date: new Date(),
        quantity: cart.length,
        cartItems: cart.map((item) => item._id),
        menuItems: cart.map((item) => item.menuItemId),
        status: "service pending",
        itemNames: cart.map((item) => item.name),
      };

      axiosSecure.post("/payments", payment).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          // display
          toast.success("Payment Success!");
          // refetch();
        }
      });
    } */
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
          className="shadow-sm bg-darkAmber hover:bg-white hover:text-darkGray cursor-pointer text-white duration-300 rounded-3xl font-bold text-sm px-6 py-2"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Pay
        </button>
      </form>
      {cardError && <p className="text-red-500 font-semibold">{cardError}</p>}
      {/* {transactionId && (
        <p className="text-green-500">
          Your Transaction completed with transactionId: {transactionId}
        </p>
      )} */}
    </>
  );
};

export default CheckoutForm;
