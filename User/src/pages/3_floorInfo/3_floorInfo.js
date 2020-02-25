import React, { useContext } from "react";
import { useDropzone } from "react-dropzone";
// import DropzoneComponent from 'react-dropzone-component';
import styled from "styled-components";
import { FloorInfoStyle, FloorInfoInput, BtnBottom } from "./style";
import { OndemandContext, OndemandConsumer } from "../../context/OndemandContext";
import { Link } from 'react-router-dom';

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

    const contextType = useContext(OndemandContext);
    
    const handleNextStep = e => {
        e.preventDefault();
        //error handling
        if (contextType.val.floorSize === 0)
            alert("Please fill in the required questions properly");
        else {
            props.nextStep();
        }
    };

    const hanldeBtnBack = e => {
        e.preventDefault();
        contextType.val.floorType === "Residential"
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

                    <Link to= "/">

                        <div
                            className="FloorInfo__BtnClose"
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
                                onChange={value.handleChange("floorSize")}
                                value={
                                    value.val.floorSize === 0
                                        ? ""
                                        : value.val.floorSize
                                }
                            />
                            <select
                                name="floorSizeUnit"
                                onChange={value.handleChange("floorSizeUnit")}
                                defaultValue = "m"
                            >
                                <option value="m">m &sup2;</option>
                                <option value="ft">feet &sup2;</option>
                            </select>
                            <div className="select__arrow" />
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
                                onChange={value.handleChange("floorHeight")}
                                value={value.val.floorHeight}
                            />
                            <select
                                name="floorHeightUnit"
                                onChange={value.handleChange("floorHeightUnit")}
                                defaultValue = "m"
                            >
                                <option value="m">m</option>
                                <option value="ft">feet</option>
                            </select>
                            <div className="select__arrow" />
                        </FloorInfoInput>

                        <FloorInfoInput
                            inputWidth={"560px"}
                            paddingRight={"16px"}
                        >
                            Address
                            <input
                                type="text"
                                name="floorAddress"
                                onChange={value.handleChange("floorAddress")}
                                value={value.val.floorAddress}
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
                                <input 
                                    {...getInputProps()} 
                                    onChange={ value.handlePlanFile } 
                                />
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
