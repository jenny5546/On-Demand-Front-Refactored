import React, { useContext } from "react";
import { OndemandContext, OndemandConsumer } from "../../context/OndemandContext";
import { CompleteStyle, BtnBottom } from "./style";
import { Link } from 'react-router-dom';

const Complete = props => {

    // const handleBtnBack = e => {
    //     e.preventDefault();
    //     props.prevStep();
    // };
    

    const handleBtnBack = e => {
        e.preventDefault();
        props.prevStep();
    };

    const contextType = useContext(OndemandContext);

    return (
        <OndemandConsumer>
            {value => (
                <CompleteStyle>
                    <Link to= "/ondemand">

                        <div
                            className="Complete__BtnClose"
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

                    <main className="CompleteWrap">
                        <div className="Complete__Title">
                            난 사실 complete
                        </div>
                        <div className="Complete__SubTitle">
                            Thank you for using Archisketch's On Demand Service
                            <span>email</span>
                        </div>
                        <div className="Complete__UnderBar" />

                        {/* <CompleteTextarea
                            name="additionalRequest"
                            value={value.val.additionalRequest}
                            placeholder="Type in any other requests you would like us to know, just press next to skip"
                            onChange={value.handleChange(
                                "additionalRequest"
                            )}
                        /> */}

                        <section className="Complete__Bottom">
                            <BtnBottom btnBack onClick={handleBtnBack}>
                                Back
                            </BtnBottom>

                            {/* <BtnBottom onClick={handleNextStep}>
                                Next
                            </BtnBottom> */}
                        </section>
                    </main>
                </CompleteStyle>
            )}
        </OndemandConsumer>
    )
}
export default Complete;