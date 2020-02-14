import React, { Component } from 'react';
import Application from '../application/mainform';
import './_modal.scss'
import IconButton from '@material-ui/core/IconButton';
import CancelIcon from '@material-ui/icons/Cancel';

class Modal extends Component {

    state = {
        step: 1,
    }

    onClose = (e) => {
        e.preventDefault();
        this.props.onClose && this.props.onClose(e);
    };

    setStep = () => {
        const { step } = this.state
        this.setState({
            step: 1
        })
    }

    nextStep = () => {
        const { step } = this.state
        this.setState({
            step : step + 1
        })
        
    }

    next2Step = () => {
        const { step } = this.state
        this.setState({
            step : step + 2
        })
        
    }
    
    prevStep = () => {
        const { step } = this.state
        this.setState({
            step : step - 1
        })
        // console.log(step);
        
    }

    prev2Step = () =>{
        const { step } = this.state
        this.setState({
            step : step - 2
        })
    }

    render() {

        const {step} = this.state;
        
        
        if(!this.props.show){
            return null;
        }
        return (
            <div className={ step === 7 ? "summary_modal" : "modal" }>
                <IconButton className="modal__closebtn" onClick={this.onClose}>
                    <CancelIcon/>
                </IconButton>
                <Application 
                    setStep={this.setStep}
                    nextStep={this.nextStep} 
                    next2Step={this.next2Step} 
                    prevStep={this.prevStep} 
                    prev2Step={this.prev2Step}
                />
                
                
            </div>
        )
    }
}
export default Modal;