import React from 'react';
import {useStripe, useElements, CardElement} from '@stripe/react-stripe-js';

import CardSection from './CardSection';
// import { checkPropTypes } from 'prop-types';

export default function CheckoutForm(props) {
  const stripe = useStripe();
  const elements = useElements();

  

  const handleSubmit = async (event) => {
    
    event.preventDefault();
    
    if (!stripe || !elements) {
      
      return;
    }

    const result = await stripe.confirmCardPayment('{PAYMENT_INTENT_CLIENT_SECRET}', {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: 'Jaeeun Lee',
        },
      }
    });

    if (result.error) {
      
      console.log(result.error.message);
      alert('Payment Error')
    } 
    else {
      
        if (result.paymentIntent.status === 'succeeded') {
            //만약에 payment가 성공적이었으면 complete 화면으로 넘어갈 수 있는 부모 state true로 trigger해준다
            props.setEnable(true);
        }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardSection />
      <button disabled={!stripe}>Confirm order</button>
    </form>
  );
}