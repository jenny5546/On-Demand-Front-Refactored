import React, { Component } from "react";
import {
    FloorDetailStyle,
    FloorTypeList,
    FloorTypeInput,
    BtnBottom
} from "./style";
import { Tab__FloorTypeDetail } from "../../constant";
import { OndemandConsumer } from "../../context/OndemandContext";
import { Link } from 'react-router-dom';

class SubFloorType extends Component {
    handleNextStep = () => {
        this.props.nextStep();
    };

    // : alert("Please Choose or Specify the Commercial Type");

    hanldeBtnBack = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        return (
            <OndemandConsumer>
                {value => (
                    <FloorDetailStyle>
                        {/* 닫기 버튼은 그냥 다시 Mainpage로 돌아가게끔 라우팅 */}
                        <Link to= "/">
                            <div
                                className="FloorDetail__BtnClose"
                                // onClick={e => {
                                //     value.handleOpenModal();
                                // }}
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

                        <main className="FloorDetailWrap">
                            <div className="FloorDetail__Title">
                                Please Specify the type of your Commercial Floor
                            </div>

                            <section className="FloorDetail__ListWrap">
                                <FloorTypeList
                                    onClick={async e => {
                                        await this.props.handleFloorDetailType(
                                            Tab__FloorTypeDetail.Office
                                        );
                                        this.handleNextStep();
                                    }}
                                >
                                    Office
                                </FloorTypeList>

                                <FloorTypeList
                                    onClick={async e => {
                                        await this.props.handleFloorDetailType(
                                            Tab__FloorTypeDetail.Restaurant
                                        );
                                        this.handleNextStep();
                                    }}
                                >
                                    Restaurant/Cafe
                                </FloorTypeList>

                                <FloorTypeList
                                    onClick={async e => {
                                        await this.props.handleFloorDetailType(
                                            Tab__FloorTypeDetail.Shops
                                        );
                                        this.handleNextStep();
                                    }}
                                >
                                    Shops
                                </FloorTypeList>

                                <FloorTypeList
                                    onClick={async e => {
                                        await this.props.handleFloorDetailType(
                                            Tab__FloorTypeDetail.Hotel
                                        );
                                        this.handleNextStep();
                                    }}
                                >
                                    Hotels
                                </FloorTypeList>

                                <FloorTypeInput>
                                    <label>
                                        Not listed?
                                        <input
                                            type="text"
                                            placeholder="Type in yourself"
                                            onChange={this.props.handleChange(
                                                "commercialType"
                                            )}
                                        />
                                    </label>
                                </FloorTypeInput>
                            </section>

                            <section className="FloorDetail__Bottom">
                                <BtnBottom btnBack onClick={this.hanldeBtnBack}>
                                    Back
                                </BtnBottom>

                                <BtnBottom onClick={this.handleNextStep}>
                                    Next
                                </BtnBottom>
                            </section>
                        </main>
                    </FloorDetailStyle>
                )}
            </OndemandConsumer>
        );
    }
}

export default SubFloorType;
