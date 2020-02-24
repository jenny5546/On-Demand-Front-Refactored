import React, { useContext } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import { OndemandContext, OndemandConsumer } from "../../context/OndemandContext";
import { Tab__FloorType } from "../../constant";

import {
    SummaryStyle,
    SummaryContent,
    SummaryDivision,
    BtnBottom
} from "./style";


import { Link } from 'react-router-dom';

const Summary = props => {

    const contextType = useContext(OndemandContext);
    
    const handleNextStep = e => {
        //얘는 마지막 단계니까 payment 로 이동하게 바꾸기
        e.preventDefault();
        contextType.handleSubmit(); //POST
        props.nextStep();
    };
    const handleBtnBack = e => {
        e.preventDefault();
        props.prevStep();
    };

    
    const calculateCost = (type, size) => {
        const unit = contextType.val.floorSizeUnit;
        const m = "m";
        const ft = "ft";

        if (type === "Residential") {
            if ((size <= 300 && unit === m) || (size <= 3229 && unit === ft))
                return <p1>$99</p1>;
            if (
                (size > 300 && size <= 600 && unit === m) ||
                (size > 3229 && size <= 6458 && unit === ft)
            )
                return <p1>$199</p1>;
            if (
                (size > 600 && size <= 900 && unit === m) ||
                (size > 6458 && size <= 9687 && unit === ft)
            )
                return <p1>$299</p1>;
            else return <p1>$499</p1>;
        } else {
            if ((size <= 300 && unit === m) || (size <= 3229 && unit === ft))
                return <p1>$199</p1>;
            if (
                (size > 300 && size <= 600 && unit === m) ||
                (size > 3229 && size <= 6458 && unit === ft)
            )
                return <p1>$299</p1>;
            if (
                (size > 600 && size <= 900 && unit === m) ||
                (size > 6458 && size <= 9687 && unit === ft)
            )
                return <p1>$499</p1>;
            else return <p1>$699</p1>;
        }
    };

        return (
            <OndemandConsumer>
                {value => (
                    <SummaryStyle>
                        <Link to= "/">

                            <div
                                className="Summary__BtnClose"
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

                        <main className="SummaryWrap">
                            <div className="Summary__Title">Order Summary</div>
                            <div className="Summary__SubTitle">
                                Confirm your Application Details
                            </div>
                            <div className="Summary__UnderBar" />

                            <SummaryContent>
                                <PerfectScrollbar>
                                    <section className="Summary__Content">
                                        <div className="Content__Title">
                                            Floor Type:
                                            <span className="Content__Desc">
                                                {value.val.floorType}
                                                {value.val.floorType ===
                                        Tab__FloorType.Commercial
                                            ? "( "
                                            : ""}
                                        {value.val.floorType ===
                                        Tab__FloorType.Commercial
                                            ? value.val.commercialType
                                            : ""}
                                        {value.val.floorType ===
                                        Tab__FloorType.Commercial
                                            ? " )"
                                            : ""}
                                            </span>
                                        </div>
                                    </section>

                                    <section className="Summary__Content">
                                        
                                        {value.val.floorPlanUrl.map(
                                            items => {
                                                return (
                                                    <img
                                                        src={items}
                                                        className="Content__Floor"
                                                        alt="floorplan-summary"
                                                    />
                                                );
                                            }
                                        )}

                                        {/* <img
                                            className="Content__Floor"
                                            
                                            src={value.val.floorPlanUrl}
                                            alt="floorplan-summary"
                                        /> */}

                                        <SummaryDivision />

                                        <div className="Content__Title">
                                            Number of Floors:
                                        </div>
                                        <div className="Content__Desc">
                                            {/* Null */}
                                            {value.val.floorNumber}
                                        </div>

                                        <div className="Content__Title">
                                            Size of Floor:
                                        </div>
                                        <div className="Content__Desc">
                                            {/* Null */}
                                            {value.val.floorSize}{" "}
                                        {value.val.floorSizeUnit}
                                        </div>

                                        <div className="Content__Title">
                                            Height of Floor:
                                        </div>
                                        <div className="Content__Desc">
                                            {/* Null */}
                                            {value.val.floorHeight}{" "}
                                        {value.val.floorHeightUnit}
                                        </div>

                                        <div className="Content__Title">
                                            Address of Floor:
                                        </div>
                                        <div className="Content__Desc">
                                            {value.val.floorAddress}
                                        </div>
                                    </section>

                                    <section className="Summary__Content">
                                        <div className="Content__Title">
                                            Floor Themes:
                                        </div>
                                        {value.val.floorSelectedTheme
                                            .length !== 0 ? (
                                                value.val.floorSelectedTheme.map(
                                                    items => {
                                                        return (
                                                            <img
                                                                src={items}
                                                                className="Content__Img"
                                                                alt="selected-style"
                                                            />
                                                        );
                                                    }
                                                )
                                        ) : (
                                            
                                            value.val.floorUploadedThemeUrl.map(
                                                items => {
                                                    return (
                                                        <img
                                                            src={items}
                                                            className="Content__Img"
                                                            alt="uploaded-style"
                                                        />
                                                    );
                                                }
                                            )
                                        )}
                                    </section>

                                    <section className="Summary__Content">
                                        <div className="Content__Title">
                                            Additional Requests:
                                        </div>

                                        <div className="Content__TextArea">
                                            {
                                                value.val
                                                    .additionalRequest
                                            }
                                        </div>
                                    </section>

                                    <section className="Summary__Content">
                                        <div className="Content__Title">
                                            Contact Information:
                                        </div>

                                        <div className="Content__Desc">
                                            jenny5546@naver.com
                                        </div>
                                    </section>

                                    <section className="Summary__Content">
                                        <div className="Content__Title">
                                            Payment Amount
                                        </div>

                                        <div className="Content__Cost">
                                            {calculateCost(
                                                value.val.floorType,
                                                value.val.floorSize
                                            )}
                                            ({value.val.floorType},{" "}
                                            {value.val.floorSize}{" "}
                                            {value.val.floorSizeUnit}{" "}
                                            &sup2; )
                                        </div>
                                    </section>
                                </PerfectScrollbar>
                            </SummaryContent>

                            <section className="Summary__Bottom">
                                <BtnBottom btnBack onClick={handleBtnBack}>
                                    Edit Application
                                </BtnBottom>

                                <BtnBottom onClick={handleNextStep}>
                                    Confirm Payment
                                </BtnBottom>
                            </section>
                        </main>
                    </SummaryStyle>
                )}
            </OndemandConsumer>
        );
    
}

export default Summary;
