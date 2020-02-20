import React from "react";
import { useDropzone } from "react-dropzone";
import styled from "styled-components";
import { FloorInfoStyle, FloorInfoInput, BtnBottom } from "./style";
import { OndemandConsumer } from "../../context/OndemandContext";

const getColor = props => {
    if (props.isDragAccept) {
        return "#00e676";
    }
    if (props.isDragReject) {
        return "#ff1744";
    }
    if (props.isDragActive) {
        return "#2196f3";
    }
    return "#eeeeee";
};

const Container = styled.div`
    margin-top: 8px;
    position: relative;
    text-align: center;
    height: 192px;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    border-width: 2px;
    border-radius: 2px;
    border-color: ${props => getColor(props)};
    border-style: dashed;
    background: #fafafa;
    color: #bdbdbd;
    outline: none;
    transition: border, background-color 0.24s ease-in-out;

    &:hover {
        background: #eee;
    }
    &:active {
        background: #ebebeb;
    }
    p {
        position: absolute;
        top: 45%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        color: #4b4b4b;
    }
`;

const FloorPlanInfo = props => {
    const handleNextStep = e => {
        e.preventDefault();

        //error handling
        if (props.values.floorSize === 0)
            alert("Please fill in the required questions properly");
        // else if (
        //     props.values.floorSizeUnit === null ||
        //     (props.values.floorHeight !== "" &&
        //         props.values.floorHeightUnit === null)
        // )
        //     alert("Please specify the unit of your floor plan");
        else {
            props.nextStep();
            // this.handlePlanSubmit();
        }
    };

    const hanldeBtnBack = e => {
        e.preventDefault();
        props.values.floorType === "Residential"
            ? props.prev2Step()
            : props.prevStep();
    };

    const {
        getRootProps,
        getInputProps,
        isDragActive,
        isDragAccept,
        isDragReject
    } = useDropzone({ accept: "image/*" });

    return (
        <OndemandConsumer>
            {value => (
                <FloorInfoStyle>
                    <div
                        className="FloorInfo__BtnClose"
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

                    <main className="FloorInfoWrap">
                        <div className="FloorInfo__Title">
                            Provide Information about your Floor
                            <span>(* Required)</span>
                        </div>

                        <div className="FloorInfo__UnderBar" />

                        <FloorInfoInput
                            inputWidth={"268px"}
                            paddingRight={"72px"}
                        >
                            * Size of floor
                            <input
                                min="1"
                                type="text"
                                name="floorSize"
                                onChange={props.handleChange("floorSize")}
                                value={
                                    props.values.floorSize === 0
                                        ? ""
                                        : props.values.floorSize
                                }
                            />
                            <select
                                name="floorSizeUnit"
                                onChange={props.handleChange("floorSizeUnit")}
                            >
                                <option value="m">m &sup2;</option>
                                <option value="ft">feet &sup2;</option>
                            </select>
                            <div class="select__arrow" />
                        </FloorInfoInput>

                        <FloorInfoInput
                            inputWidth={"268px"}
                            paddingRight={"72px"}
                        >
                            Floor Height
                            <input
                                min="1"
                                type="text"
                                name="floorHeight"
                                onChange={props.handleChange("floorHeight")}
                                value={props.values.floorHeight}
                            />
                            <select
                                name="floorHeightUnit"
                                onChange={props.handleChange("floorHeightUnit")}
                            >
                                <option value="m">m</option>
                                <option value="ft">feet</option>
                            </select>
                            <div class="select__arrow" />
                        </FloorInfoInput>

                        <FloorInfoInput
                            inputWidth={"560px"}
                            paddingRight={"16px"}
                        >
                            Address
                            <input
                                type="text"
                                name="floorAddress"
                                onChange={props.handleChange("floorAddress")}
                                value={props.values.floorAddress}
                            />
                        </FloorInfoInput>

                        <div className="FloorInfo__Drop">
                            *Upload Floor Plan
                            <Container
                                {...getRootProps({
                                    isDragActive,
                                    isDragAccept,
                                    isDragReject
                                })}
                            >
                                <input {...getInputProps()} />
                                <p>
                                    Upload Your Floor Plan (files in .pdf or
                                    .jpg, .png format)
                                </p>
                            </Container>
                        </div>

                        <section className="FloorInfo__Bottom">
                            <BtnBottom btnBack onClick={hanldeBtnBack}>
                                Back
                            </BtnBottom>

                            <BtnBottom onClick={handleNextStep}>Next</BtnBottom>
                        </section>
                    </main>
                </FloorInfoStyle>
            )}
        </OndemandConsumer>
    );
};

export default FloorPlanInfo;
