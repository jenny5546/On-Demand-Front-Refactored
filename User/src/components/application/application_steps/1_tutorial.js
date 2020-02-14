import React, { Component } from 'react';
import MainTutorial from '../../tutorial/maintutorial'
import '../_form.scss'

class Tutorial extends Component{
    
    state = {
        step: 1
    }

    nextStep = () => {
        const { step } = this.state
        this.setState({
            step : step + 1
        })
    }
    
    prevStep = () => {
        const { step } = this.state
        this.setState({
            step : step - 1
        })
    }

    skip = (e) =>{
        e.preventDefault();
        this.props.nextStep();
    }

    render(){

        const {step} = this.state;

        return(
            <div className="tutorial">
                <div className="tutorial__container">
                    <p className="tutorial__container-header">Take a look at How our </p> 
                    <p className="tutorial__container-header"> <p1 style={{fontWeight:"bold", color: "#499fb6"}}>On-Demand Service</p1> Works</p>
                    <MainTutorial nextStep= {this.nextStep} prevStep={this.prevStep}/>
                </div>
                
                <button className="tutorial__skipbtn" onClick={this.skip}>
                    {step !== 3 ? 'Skip Tutorial >':'Start Application >'}
                </button>
            </div> 
        )
    }
}

export default Tutorial;