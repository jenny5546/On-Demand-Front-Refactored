import React, { useContext } from "react";
import { OndemandContext, OndemandConsumer } from "../../context/OndemandContext";
import { PaymentStyle, BtnBottom } from "./style";
import { Link } from 'react-router-dom';

const Payment = props => {

   
    const contextType = useContext(OndemandContext);

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
        props.nextStep();
    };

    const handleBtnBack = e => {
        e.preventDefault();
        props.prevStep();
    };

    

    return (
        <OndemandConsumer>
            {value => (
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
                            Feel Free to tell us any other{" "}
                            <span>requests</span>
                        </div>
                        <div className="Payment__UnderBar" />

                        <section className="Payment__Bottom">
                            <BtnBottom btnBack onClick={handleBtnBack}>
                                Back
                            </BtnBottom>

                            <BtnBottom onClick={handleNextStep}>
                                Next
                            </BtnBottom>
                        </section>
                    </main>
                </PaymentStyle>
            )}
        </OndemandConsumer>
    )
}
export default Payment;