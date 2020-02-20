import React, { Component } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import { OndemandConsumer } from "../../context/OndemandContext";
import {
    SummaryStyle,
    SummaryContent,
    SummaryDivision,
    BtnBottom
} from "./style";

import axios from "axios";

class Summary extends Component {
    handleNextStep = e => {
        //얘는 마지막 단계니까 payment 로 이동하게 바꾸기
        e.preventDefault();
        this.handleSubmit();
        this.props.nextStep();
    };
    hanldeBtnBack = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    handleSubmit() {
        let form_data = new FormData();

        form_data.set("floor_type", this.props.values.floorType);
        form_data.set("commercial_type", this.props.values.commercialType);

        const plan = this.props.values.floorPlan;
        for (var file of plan) {
            form_data.append("floor_plan", file);
            console.log(file);
        }

        form_data.set("floor_number", this.props.values.floorNumber);
        form_data.set("floor_size", this.props.values.floorSize);
        form_data.set("floor_size_unit", this.props.values.floorSizeUnit);
        form_data.set("floor_height", this.props.values.floorHeight);
        form_data.set("floor_height_unit", this.props.values.floorHeightUnit);
        form_data.set("floor_address", this.props.values.floorAddress);

        if (this.props.values.floorTheme[0]) {
            const theme = this.props.values.floorTheme;
            for (var img of theme) {
                form_data.append("uploaded_theme", img);
                // console.log(img);
            }
        }
        if (this.props.values.floorSelectedTheme[0]) {
            const theme = this.props.values.floorSelectedTheme;
            for (var opt of theme) {
                form_data.append("selected_theme", opt);
                // console.log(opt);
            }
        }

        form_data.set("add_req", this.props.values.additionalRequest);

        axios
            .post(`http://127.0.0.1:8000/adminpage/request/`, form_data, {
                headers: {
                    "content-type": "multipart/form-data"
                }
            })
            .then(res => {
                console.log(res.data);
            })
            .catch(err => console.log(err));
    }

    calculateCost = (type, size) => {
        const unit = this.props.values.floorSizeUnit;
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

    render() {
        return (
            <OndemandConsumer>
                {value => (
                    <SummaryStyle>
                        <div
                            className="Summary__BtnClose"
                            onClick={e => {
                                value.handleOpenModal();
                            }}
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
                                                Commercial
                                                {this.props.values.floorType}
                                                {/* {this.props.values.floorType ===
                                        "Commercial"
                                            ? "( "
                                            : ""}
                                        {this.props.values.floorType ===
                                        "Commercial"
                                            ? this.props.values.commercialType
                                            : ""}
                                        {this.props.values.floorType ===
                                        "Commercial"
                                            ? " )"
                                            : ""} */}
                                            </span>
                                        </div>
                                    </section>

                                    <section className="Summary__Content">
                                        <img
                                            className="Content__Floor"
                                            src={
                                                "https://images.unsplash.com/photo-1542287343796-5bc81a6df440?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80"
                                            }
                                            // src={this.props.values.floorPlanUrl}
                                            alt="floorplan-summary"
                                        />

                                        <SummaryDivision />

                                        <div className="Content__Title">
                                            Number of Floors:
                                        </div>
                                        <div className="Content__Desc">
                                            Null
                                            {/* {this.props.values.floorNumber} */}
                                        </div>

                                        <div className="Content__Title">
                                            Size of Floor:
                                        </div>
                                        <div className="Content__Desc">
                                            Null
                                            {/* {this.props.values.floorSize}{" "}
                                        {this.props.values.floorSizeUnit} */}
                                        </div>

                                        <div className="Content__Title">
                                            Height of Floor:
                                        </div>
                                        <div className="Content__Desc">
                                            Null
                                            {/* {this.props.values.floorHeight}{" "}
                                        {this.props.values.floorHeightUnit} */}
                                        </div>

                                        <div className="Content__Title">
                                            Address of Floor:
                                        </div>
                                        <div className="Content__Desc">
                                            Null
                                            {/* {this.props.values.floorAddress} */}
                                        </div>
                                    </section>

                                    <section className="Summary__Content">
                                        <div className="Content__Title">
                                            Floor Themes:
                                        </div>
                                        {this.props.values.floorSelectedTheme
                                            .length !== 0 ? (
                                            this.props.values.floorSelectedTheme.map(
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
                                            <img
                                                className="Content__Img"
                                                src={
                                                    this.props.values
                                                        .floorThemeUrl
                                                }
                                                alt="uploaded-style"
                                            />
                                        )}
                                    </section>

                                    <section className="Summary__Content">
                                        <div className="Content__Title">
                                            Additional Requests:
                                        </div>

                                        <div className="Content__TextArea">
                                            {
                                                this.props.values
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
                                            {this.calculateCost(
                                                this.props.values.floorType,
                                                this.props.values.floorSize
                                            )}
                                            ({this.props.values.floorType},{" "}
                                            {this.props.values.floorSize}{" "}
                                            {this.props.values.floorSizeUnit}{" "}
                                            &sup2; )
                                        </div>
                                    </section>
                                </PerfectScrollbar>
                            </SummaryContent>

                            <section className="Summary__Bottom">
                                <BtnBottom btnBack onClick={this.hanldeBtnBack}>
                                    Edit Application
                                </BtnBottom>

                                <BtnBottom onClick={this.handleNextStep}>
                                    Confirm Payment
                                </BtnBottom>
                            </section>
                        </main>
                    </SummaryStyle>
                )}
            </OndemandConsumer>
        );
    }
}

export default Summary;
