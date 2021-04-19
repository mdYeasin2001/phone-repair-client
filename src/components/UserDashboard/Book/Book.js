import React, { useContext, useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
    CardElement,
    Elements,
    useElements,
    useStripe
} from "@stripe/react-stripe-js";
import "./Book.css";
import { useParams } from "react-router";
import { UserContext } from '../../../App';

const CARD_OPTIONS = {
    iconStyle: "solid",
    style: {
        base: {
            iconColor: "#c4f0ff",
            color: "#fff",
            fontWeight: 500,
            fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
            fontSize: "16px",
            fontSmoothing: "antialiased",
            ":-webkit-autofill": {
                color: "#fce883"
            },
            "::placeholder": {
                color: "#87bbfd"
            }
        },
        invalid: {
            iconColor: "#ffc7ee",
            color: "#ffc7ee"
        }
    }
};

const CardField = ({ onChange }) => (
    <div className="FormRow">
        <CardElement options={CARD_OPTIONS} onChange={onChange} />
    </div>
);

const Field = ({
    label,
    id,
    type,
    placeholder,
    required,
    autoComplete,
    value,
    onChange
}) => (
    <div className="FormRow">
        <label htmlFor={id} className="FormRowLabel">
            {label}
        </label>
        <input
            className="FormRowInput book-input"
            id={id}
            type={type}
            placeholder={placeholder}
            required={required}
            autoComplete={autoComplete}
            value={value}
            onChange={onChange}
        />
    </div>
);

const SubmitButton = ({ processing, error, children, disabled }) => (
    <button
        className={`SubmitButton book-btn ${error ? "SubmitButton--error" : ""}`}
        type="submit"
        disabled={processing || disabled}
    >
        {processing ? "Processing..." : children}
    </button>
);

const ErrorMessage = ({ children }) => (
    <div className="ErrorMessage" role="alert">
        <svg width="16" height="16" viewBox="0 0 17 17">
            <path
                fill="#FFF"
                d="M8.5,17 C3.80557963,17 0,13.1944204 0,8.5 C0,3.80557963 3.80557963,0 8.5,0 C13.1944204,0 17,3.80557963 17,8.5 C17,13.1944204 13.1944204,17 8.5,17 Z"
            />
            <path
                fill="#6772e5"
                d="M8.5,7.29791847 L6.12604076,4.92395924 C5.79409512,4.59201359 5.25590488,4.59201359 4.92395924,4.92395924 C4.59201359,5.25590488 4.59201359,5.79409512 4.92395924,6.12604076 L7.29791847,8.5 L4.92395924,10.8739592 C4.59201359,11.2059049 4.59201359,11.7440951 4.92395924,12.0760408 C5.25590488,12.4079864 5.79409512,12.4079864 6.12604076,12.0760408 L8.5,9.70208153 L10.8739592,12.0760408 C11.2059049,12.4079864 11.7440951,12.4079864 12.0760408,12.0760408 C12.4079864,11.7440951 12.4079864,11.2059049 12.0760408,10.8739592 L9.70208153,8.5 L12.0760408,6.12604076 C12.4079864,5.79409512 12.4079864,5.25590488 12.0760408,4.92395924 C11.7440951,4.59201359 11.2059049,4.59201359 10.8739592,4.92395924 L8.5,7.29791847 L8.5,7.29791847 Z"
            />
        </svg>
        {children}
    </div>
);



const CheckoutForm = () => {
    const { id } = useParams();
    const [loggedInUser] = useContext(UserContext);
    const [service, setServices] = useState([]);
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState(null);
    const [cardComplete, setCardComplete] = useState(false);
    const [processing, setProcessing] = useState(false);
    const [paymentMethod, setPaymentMethod] = useState(null);
    const [booked, setBooked] = useState(false);
    console.log(booked);

    useEffect(() => {
        fetch(`https://morning-caverns-70886.herokuapp.com/services/${id}`)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [id]);


    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }

        if (error) {
            elements.getElement("card").focus();
            return;
        }

        if (cardComplete) {
            setProcessing(true);
        }

        const payload = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement),
            billing_details: { name: loggedInUser.name, email: loggedInUser.email }
        });

        setProcessing(false);

        if (payload.error) {
            setError(payload.error);
        } else {
            setPaymentMethod(payload.paymentMethod);
        }

        // console.log(service, payload.paymentMethod);
        if (service.length && payload.paymentMethod) {
            const bookingData = { date: new Date(), email: loggedInUser.email, name: loggedInUser.name, status: "Pending", service: service, payment: payload.paymentMethod };
            fetch('https://morning-caverns-70886.herokuapp.com/bookService', {
                method: 'POST',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify(bookingData)
            })
                .then(res => res.json())
                .then(data => setBooked(data))
        }else if(service.length === 0){
            alert('Please choose your service first!!')
        }
        
    };

    const reset = () => {
        setError(null);
        setProcessing(false);
        setPaymentMethod(null);

    };

    return paymentMethod && service.length > 0 ? (
        <div className="Result">
            <div className="ResultTitle" role="alert">
                Payment successful
      </div>
            <div className="ResultMessage">
                Thanks for trying Stripe Elements. No money was charged, but we
        generated a PaymentMethod: {paymentMethod.id}
            </div>
        </div>
    ) : (
        <>
            <form className="Form" onSubmit={handleSubmit}>
                <fieldset className="FormGroup">
                    <Field
                        label="Name"
                        id="name"
                        type="text"
                        placeholder="Jane Doe"
                        required
                        autoComplete="name"
                        value={loggedInUser.name}

                    />
                    <Field
                        label="Email"
                        id="email"
                        type="email"
                        placeholder="janedoe@gmail.com"
                        required
                        autoComplete="email"
                        value={loggedInUser.email}

                    />
                    <Field
                        label="Service"
                        id="service"
                        type="text"
                        placeholder="Service..."
                        required
                        autoComplete="service"
                        value={service[0]?.title}

                    />
                </fieldset>
                <fieldset className="FormGroup">
                    <CardField
                        onChange={(e) => {
                            setError(e.error);
                            setCardComplete(e.complete);
                        }}
                    />
                </fieldset>
                {error && <ErrorMessage>{error.message}</ErrorMessage>}
                <SubmitButton processing={processing} error={error} disabled={!stripe}>
                    Pay ${service[0]?.serviceCharge}
                </SubmitButton>
            </form>
            <p className="lead ms-3 pt-4">You will be charged <span className="fw-bold">${service[0]?.serviceCharge}</span></p>
        </>
    );
};


// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe("pk_test_51IeGIpFELZiUksbUXEU21DefZk6ed5nJfHX2mJyP6hocBB0h7XCb75Pyt1GEpyMEriymMzA7D3C5moePaWCq1viT00lKU8LQrr");

const Book = () => {
    return (
        <div className="row">
            <div className="col-md-5 mx-auto pt-5">
                <div className="AppWrapper ms-md-3">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Book;