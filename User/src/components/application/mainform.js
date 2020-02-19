import React, { Component } from 'react';

import Tutorial from './application_steps/1_tutorial';
import MainFloorType from './application_steps/2_1_floortype';
import SubFloorType from './application_steps/2_2_floortype';
import FloorPlan from './application_steps/3_floorplan';
import FloorTheme from './application_steps/4_floortheme';
import AdditionalRequests from './application_steps/5_addreq';
import Summary from './application_steps/6_summary';


class Application extends Component{

    
    state = {

        step: 1,
        //step 2_1
        floorType: '', //button
        //step 2_2
        commercialType: '', //button
        //step 3
        floorPlan: [], //input
        floorPlanUrl: '',
        floorNumber: 0, //input
        floorSize: 0, //input
        floorSizeUnit: null, //select
        floorHeight: '', //input
        floorHeightUnit: null, //select
        floorAddress: '', //input
        //step 4
        floorSelectedTheme: [],
        floorTheme: [], //button
        floorThemeUrl:'',
        //step 5
        additionalRequest: '', //input
        //step 6
        contactInfo: '', //input with placeholder of account email
        emailCorrect : false,
    }

    setStep = () => {
        const { step } = this.state
        this.setState({
            step: 1
        })

        this.props.setStep();
        //console.log("return!!");
    }

    nextStep = () => {
        const { step } = this.state
        this.setState({
            step : step + 1
        })

        this.props.nextStep();
        console.log(step);
        
    }

    next2Step = () => {
        const { step } = this.state
        this.setState({
            step : step + 2
        })
        this.props.next2Step();
        
    }
    
    prevStep = () => {
        const { step } = this.state
        this.setState({
            step : step - 1
        })
        this.props.prevStep();
        
    }

    prev2Step = () =>{
        const { step } = this.state
        this.setState({
            step : step - 2
        })
        this.props.prev2Step();
    }

    handleChange = input => event => {
        this.setState({ [input] : event.target.value })
    }


    emailHandleChange = input => event => {
        var validator = require("email-validator");
        var emailCorrect = validator.validate(event.target.value);
        if(emailCorrect){
            this.setState({ [input] : event.target.value });
            event.target.style.border = "1px solid white";
            this.setState({ emailCorrect: true })
        }
        else{
            //summary__confirm--btn
            this.setState({ [input] : event.target.value });
            event.target.style.border = "1px solid red";
            this.setState({ emailCorrect: false })
        }
    }

    handleButton = event => {
        this.setState({ [event.target.name]: event.target.value});
    }

    handlePlanFile = (e) => {
        if (e.target.files[0]) {
            this.setState({ floorPlan: [...this.state.floorPlan, ...e.target.files] })
            this.setState({ floorPlanUrl: URL.createObjectURL(e.target.files[0])})
        }
    }
    handleThemeFile = (e) => {
        if (e.target.files[0]) {
            this.setState({ floorTheme: [...this.state.floorTheme, ...e.target.files] })
            this.setState({ floorThemeUrl: URL.createObjectURL(e.target.files[0])})
        }
    }

    handleThemeChoices = (value) =>{
        this.setState({floorSelectedTheme : value})
    }
    

    render(){

        const {step} = this.state;
        const {floorType, commercialType, floorPlan, floorPlanUrl, floorNumber,floorSize, floorSizeUnit, floorHeight, floorHeightUnit, floorAddress, floorSelectedTheme, floorTheme, floorThemeUrl, additionalRequest, contactInfo} = this.state;
        const values= {floorType, commercialType, floorPlan, floorPlanUrl, floorNumber,floorSize, floorSizeUnit, floorHeight, floorHeightUnit, floorAddress, floorSelectedTheme, floorTheme, floorThemeUrl, additionalRequest, contactInfo};
        

        switch(step){
            case 1:
                return <Tutorial
                            nextStep={this.nextStep} 
                            prevStep={this.prevStep} 
                            values={values}
                        />
            case 2: 
                return <MainFloorType
                            nextStep={this.nextStep} 
                            next2Step={this.next2Step} 
                            prevStep={this.prevStep} 
                            handleButton = {this.handleButton}
                            values={values}
                        />
            case 3:
                return <SubFloorType
                            nextStep={this.nextStep} 
                            prevStep={this.prevStep} 
                            handleChange = {this.handleChange}
                            handleButton = {this.handleButton}
                            values={values}
                        />
            case 4:
                return <FloorPlan
                            nextStep={this.nextStep} 
                            prevStep={this.prevStep} 
                            prev2Step={this.prev2Step}
                            handleChange = {this.handleChange}
                            handlePlanFile = {this.handlePlanFile}
                            values={values}
                        />
            case 5: 
                return <FloorTheme
                            nextStep={this.nextStep} 
                            prevStep={this.prevStep} 
                            handleThemeChoices ={this.handleThemeChoices}
                            handleThemeFile = {this.handleThemeFile}
                            values={values}
                        />
            case 6: 
                return <AdditionalRequests
                            nextStep={this.nextStep} 
                            prevStep={this.prevStep} 
                            handleChange = {this.handleChange}
                            values={values}
                        />
            case 7: 
                return <Summary
                            nextStep={this.nextStep} 
                            prevStep={this.prevStep} 
                            setStep={this.setStep}
                            handleChange = {this.handleChange}
                            emailHandleChange = {this.emailHandleChange}
                            emailCorrect = {this.state.emailCorrect}
                            values={values}
                        />
            default:
                return <Tutorial
                            nextStep={this.nextStep} 
                            prevStep={this.prevStep} 
                            handleChange = {this.handleChange}
                            values={values}
                        />
        }
        
    }
        
}

export default Application;