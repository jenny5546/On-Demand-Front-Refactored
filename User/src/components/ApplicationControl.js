import React, { Component } from "react";
import Floortype from "../pages/1_floorType/1_floorType";
import FloorTypeDetail from "../pages/2_floorTypeDetail/2_floorTypeDetail";
import FloorInfo from "../pages/3_floorInfo/3_floorInfo";
import FloorStyle from "../pages/4_floorTheme/4_floorTheme";
import AdditionalRequests from "../pages/5_addReq/5_addReq";
import Summary from "../pages/6_summary/6_summary";

/* *-----------------------------------------------------------------* 
            Application 의 각 섹션들이 등장하는 Step을 관리하는 Page
*-----------------------------------------------------------------* */

class Application extends Component {
    state = {
        step: 1
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

    render() {
        const { step } = this.state;

        switch (step) {
            case 1:
                return (
                    <Floortype
                        nextStep={this.nextStep}
                        next2Step={this.next2Step}
                        prevStep={this.prevStep}
                    />
                );

            case 2:
                return (
                    <FloorTypeDetail
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                    />
                );

            case 3:
                return (
                    <FloorInfo
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        prev2Step={this.prev2Step}
                    />
                );

            case 4:
                return (
                    <FloorStyle
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                    />
                );

            case 5:
                return (
                    <AdditionalRequests
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                    />
                );

            case 6:
                return (
                    <Summary
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                    />
                );

            default:
                return (
                    <Floortype
                        nextStep={this.nextStep}
                        next2Step={this.next2Step}
                        prevStep={this.prevStep}
                    />
                );
        }
    }
}

export default Application;
