import React, { Component } from "react";
import { OndemandConsumer } from "../../context/OndemandContext";
import { AddReqStyle, AddReqTextarea, BtnBottom } from "./style";
import { Link } from 'react-router-dom';

class AdditionalRequests extends Component {

    handleNextStep = e => {
        e.preventDefault();
        this.props.nextStep();
    };
    handleBtnBack = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        return (
            <OndemandConsumer>
                {value => (
                    <AddReqStyle>
                        <Link to= "/ondemand">

                            <div
                                className="AddReq__BtnClose"
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

                        <main className="AddReqWrap">
                            <div className="AddReq__Title">
                                You're Almost There!
                            </div>
                            <div className="AddReq__SubTitle">
                                Feel Free to tell us any other{" "}
                                <span>requests</span>
                            </div>
                            <div className="AddReq__UnderBar" />

                            <AddReqTextarea
                                name="additionalRequest"
                                value={value.val.additionalRequest}
                                placeholder="Type in any other requests you would like us to know, just press next to skip"
                                onChange={value.handleChange(
                                    "additionalRequest"
                                )}
                            />

                            <section className="AddReq__Bottom">
                                <BtnBottom btnBack onClick={this.handleBtnBack}>
                                    Back
                                </BtnBottom>

                                <BtnBottom onClick={this.handleNextStep}>
                                    Next
                                </BtnBottom>
                            </section>
                        </main>
                    </AddReqStyle>
                )}
            </OndemandConsumer>
        );
    }
}

export default AdditionalRequests;
