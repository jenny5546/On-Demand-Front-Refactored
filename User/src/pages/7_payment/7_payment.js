import React, { useState } from "react";
import { OndemandConsumer } from "../../context/OndemandContext";
import { PaymentStyle, BtnBottom } from "./style";
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import { Link } from 'react-router-dom';
import CheckoutForm from './PaymentComponents/CheckoutForm';

const Payment = props => {

    const [enable, setEnable] = useState(false);
    
    // const STRIPE_KEY = process.env.REACT_APP_STRIPE_TEST_KEY;
    // console.log(STRIPE_KEY)


    const stripePromise = loadStripe('{REACT_APP_STRIPE_TEST_KEY}');
    // const contextType = useContext(OndemandContext);

    // async function refresh() {

    //     try {
    //       await contextType.handleSubmit();
    //       window.location.replace('http://192.168.0.40:3000/')
    //     }
    //     catch (err) {
    //       console.log('fetch failed', err);
    //     }
    // }

    const handleNextStep = e => {
        e.preventDefault();
        enable ? props.nextStep(): alert('pay properly')
        // props.nextStep();
    };

    const handleBtnBack = e => {
        e.preventDefault();
        props.prevStep();
    };
    

    

    return (
        <OndemandConsumer>
            {value => (
                <>
                <PaymentStyle>
                    <Link to= "/ondemand">

                        <div
                            className="Payment__BtnClose"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                            >
                                <path d="M16.192 6.344L11.949 10.586 7.707 6.344 6.293 7.758 10.535 12 6.293 16.242 7.707 17.656 11.949 13.414 16.192 17.656 17.606 16.242 13.364 12 17.606 7.758z" />
                            </svg>
                        </div>

                    </Link>

                    <main className="PaymentWrap">
                        <div className="Payment__Title">
                            Payment
                        </div>
                        <div className="Payment__SubTitle">
                            Card details
                        </div>
                        <div className="Payment__UnderBar" />
                        <div>
                            <Elements stripe={stripePromise}>
                                <CheckoutForm setEnable={setEnable}/>
                            </Elements>
                        </div>
                        

                        <section className="Payment__Bottom">
                            <BtnBottom btnBack onClick={handleBtnBack}>
                                Back
                            </BtnBottom>
                            {/* style={{ pointerEvents:  enable ? 'auto': 'none' }}   */}
                            <BtnBottom onClick={handleNextStep}>
                                Next
                            </BtnBottom>
                        </section>
                    </main>

                </PaymentStyle>
                </>
            )}
        </OndemandConsumer>
    )
}
export default Payment;