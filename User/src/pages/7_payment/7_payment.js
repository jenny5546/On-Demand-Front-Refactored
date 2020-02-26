import React, { useContext } from "react";
import { OndemandContext, OndemandConsumer } from "../../context/OndemandContext";

const Payment = props => {

    const contextType = useContext(OndemandContext);

    async function refresh() {
        
        try {
          await contextType.handleSubmit();
          window.location.replace('http://192.168.0.40:3000/')
        }
        catch (err) {
          console.log('fetch failed', err);
        }
    }


    return (
        <div>Pay</div>
    )
}
export default Payment;