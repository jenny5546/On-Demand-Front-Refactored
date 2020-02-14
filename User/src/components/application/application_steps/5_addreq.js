import React, { Component } from 'react';
import progressbar from '../../../static/img/application/progress4.png';
import background from '../../../static/img/application/background.png';
import background2 from '../../../static/img/application/background2.png';
import bubble from '../../../static/img/application/bubble.png';

class AdditionalRequests extends Component{

    saveAndContinue = (e) =>{
        e.preventDefault();
        this.props.nextStep();
    }
    back  = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }
    
    render(){

        return(
            <div className="application">
                <div className="application__title">
                    Application
                </div>
                <img className="application__bigback" src={background} alt="back"></img>
                <img className="application__miniback" src={background2} alt="back"></img>
                <div className="application__progressbar">
                    <img className="application__progressbar-image" src={progressbar} alt="progress-bar"></img>
                </div>

                <div className="application__body">
                    <div className="addrequest">
                        <div className="addrequest__message">
                            You're Almost There!
                        </div>
                        <div className="addrequest__heading">
                            Feel Free to tell us any other requests
                            <img style={{width: "45px", marginLeft: "8px"}} src={bubble} alt="bubble"></img>
                        </div>
                        
                        <div className="addrequest__formcontainer">
                            <textarea
                            
                                className="addrequest__formcontainer-input"
                                // type="text"
                                name = "additionalRequest"
                                value= {this.props.values.additionalRequest}
                                placeholder="Type in any other requests you would like us to know, just press next to skip"
                                onChange={ this.props.handleChange('additionalRequest') }
                            />
                        </div>
                    </div>
                </div>

                <div className="application__control">
                    <div className="application__control-back">
                        <button className="application__control-back--btn" onClick={this.back}> &lt; &nbsp; Back   </button>
                    </div> 
                    <div className="application__control-next">
                        <button className="application__control-next--btn" onClick={this.saveAndContinue}> Next &nbsp; &gt;</button>
                    </div> 
                </div>
      
            </div>
        )
    }
}

export default AdditionalRequests ;