import React, { Component } from "react";

import Tutorial from "./Tutorial/Tutorial";
import Floortype from "../pages/2_floorType/2_floorType";
import FloorTypeDetail from "../pages/3_floorTypeDetail/3_floorTypeDetail";
import FloorInfo from "../pages/4_floorInfo/4_floorInfo";
import FloorStyle from "../pages/5_floorStyle/5_floorStyle";
import AdditionalRequests from "../pages/6_addReq/6_addReq";
import Summary from "../pages/7_summary/7_summary";

/*

Ondemand의 각 섹션들이 등장하는 Step을 관리하는 Page

*/

class Application extends Component {

    state = {
        step: 1,

        //step 2_1
        floorType: "",

        //step 2_2
        commercialType: "", //button

        //step 3
        floorPlan: null, //input
        floorPlanUrl: "",
        floorNumber: "", //input
        floorSize: 0, //input
        floorSizeUnit: null, //select
        floorHeight: "", //input
        floorHeightUnit: null, //select
        floorAddress: "", //input

        //step 4
        floorSelectedTheme: [],
        floorTheme: null, //button
        floorThemeUrl: "",

        //step 5
        additionalRequest: "", //input
        //step 6
        contactInfo: "" //input with placeholder of account email
    };


    nextStep = () => {
        this.setState({
            step: this.state.step + 1
        });
    };

    next2Step = () => {
        this.setState({
            step: this.state.step + 2
        });
    };

    prevStep = () => {
        this.setState({
            step: this.state.step - 1
        });
    };

    prev2Step = () => {
        this.setState({
            step: this.state.step - 2
        });
    };

    handleFloorType = event => {
        this.setState({ floorType: event });
    };

    handleFloorDetailType = event => {
        this.setState({ commercialType: event });
    };

    handleChange = input => event => {
        this.setState({ [input]: event.target.value });
    };

    //////////////////////////////////////////////////////////////////////

    handlePlanFile = e => {
        if (e.target.files[0]) {
            this.setState({ floorPlan: e.target.files[0] });
            this.setState({
                floorPlanUrl: URL.createObjectURL(e.target.files[0])
            });
        }
    };
    handleThemeFile = e => {
        if (e.target.files[0]) {
            this.setState({ floorTheme: e.target.files[0] });
            this.setState({
                floorThemeUrl: URL.createObjectURL(e.target.files[0])
            });
        }
    };

    handleThemeChoices = value => {
        this.setState({ floorSelectedTheme: value });
    };

    render() {
        const { step } = this.state;
        const {
            floorType,
            commercialType,
            floorPlan,
            floorPlanUrl,
            floorNumber,
            floorSize,
            floorSizeUnit,
            floorHeight,
            floorHeightUnit,
            floorAddress,
            floorSelectedTheme,
            floorTheme,
            floorThemeUrl,
            additionalRequest,
            contactInfo
        } = this.state;

        const values = {
            // floorType,
            commercialType,
            floorPlan,
            floorPlanUrl,
            floorNumber,
            floorSize,
            floorSizeUnit,
            floorHeight,
            floorHeightUnit,
            floorAddress,
            floorSelectedTheme,
            floorTheme,
            floorThemeUrl,
            additionalRequest,
            contactInfo
        };

        switch (step) {
            // case 1:
            //     if (this.props.openModal === false) {
            //         return null;
            //     }
            //     return <Tutorial nextStep={this.nextStep} />;
            case 1:
                // if (this.props.openModal === false) {
                //     this.setState({
                //         step: 1
                //     });
                //     return null;
                // }
                return (
                    <Floortype
                        nextStep={this.nextStep}
                        next2Step={this.next2Step}
                        prevStep={this.prevStep}
                        handleFloorType={this.handleFloorType}
                    />
                );

            case 2:
                // if (this.props.openModal === false) {
                //     this.setState({
                //         step: 1
                //     });
                //     return null;
                // }
                return (
                    <FloorTypeDetail
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        handleFloorDetailType={this.handleFloorDetailType}
                    />
                );

            case 3:
                // if (this.props.openModal === false) {
                //     this.setState({
                //         step: 1
                //     });
                //     return null;
                // }
                return (
                    <FloorInfo
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        prev2Step={this.prev2Step}
                        handleChange={this.handleChange}
                        handlePlanFile={this.handlePlanFile}
                        values={values}
                    />
                );

            case 4:
                // if (this.props.openModal === false) {
                //     this.setState({
                //         step: 1
                //     });
                //     return null;
                // }
                return (
                    <FloorStyle
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleThemeChoices={this.handleThemeChoices}
                        handleThemeFile={this.handleThemeFile}
                        values={values}
                    />
                );

            case 5:
                // if (this.props.openModal === false) {
                //     this.setState({
                //         step: 1
                //     });
                //     return null;
                // }
                return (
                    <AdditionalRequests
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                );

            case 6:
                // if (this.props.openModal === false) {
                //     this.setState({
                //         step: 1
                //     });
                //     return null;
                // }
                return (
                    <Summary
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                );

            default:
                // if (this.props.show === false) {
                //     return null;
                // }
                return (
                    <Tutorial
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                );
        }
    }
}

export default Application;
