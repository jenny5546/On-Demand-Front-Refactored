import React, { Component } from 'react';
import progressbar from '../../../static/img/application/progress2.png';
import background from '../../../static/img/application/background.png';
import background2 from '../../../static/img/application/background2.png';
import bubble from '../../../static/img/application/bubble.png';
// import axios from 'axios';

class FloorPlan extends Component{

    saveAndContinue = (e) =>{
        e.preventDefault();

        //error handling
        if ((this.props.values.floorPlan === null) || 
        (this.props.values.floorSize === 0) || 
        (this.props.values.floorNumber === 0)) 
        alert('Please fill in the required questions properly');

        else if ((this.props.values.floorSizeUnit === null) || 
        (this.props.values.floorHeight!=='' && this.props.values.floorHeightUnit === null))
        alert('Please specify the unit of your floor plan')
        
        else {
            this.props.nextStep();
            // this.handlePlanSubmit();
        }
        
    }
    back  = (e) => {
        e.preventDefault();
        (this.props.values.floorType) === "Residential" ? this.props.prev2Step(): this.props.prevStep();
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

                    <div className="floorplan">

                        <div className="floorplan__heading">
                            Provide Information about your Floor 
                            <img style={{width: "45px", marginLeft: "8px"}} src={bubble} alt="bubble"></img>
                            <p1 style={{marginLeft: "130px", fontSize: "13px", fontWeight: "bolder", color: "rgb(16, 73, 100)"}}> (* Required) </p1>
                        </div>
                        
                        <div className="floorplan__formcontainer">

                            <div className="floorplan__formcontainer-file">
                                <label>* Upload Floor Plan <p1 style={{fontSize: "smaller", color: "grey"}}>(files in .pdf or .jpg format)</p1></label>
                                <div >
                                    {this.props.values.floorPlan ? (
                                        <img src={this.props.values.floorPlanUrl} alt="floorplan" style={{width: "230px", height: "150px", marginTop: "10px"}}></img>
                                    ): (
                                        <div> </div>
                                    )}
                                </div>

                                <input
                                    type="file"
                                    name = "floorPlan"
                                    onChange={ this.props.handlePlanFile }
                                    accept = ".jpg, .pdf, .png"
                                    multiple
                                />
                            </div>
                            
                            <div className="floorplan__formcontainer-inputwrap">
                                <div className="floorplan__formcontainer-input">
                                    
                                    <label>* Number of floors </label>
                                    <div style={{float: "right"}}>
                                    &nbsp;&nbsp;&nbsp;
                                    <input
                                        min = "1"
                                        style = {{width: "50px", height: "20px", fontSize: "18px"}}
                                        type="number"
                                        defaultValue = "1"
                                        name = "floorNumber"
                                        onChange={ this.props.handleChange('floorNumber') }
                                        value = {this.props.values.floorNumber}
                                        // placeholder="How many floors is the floor plan?"
                                    />
                                    &nbsp; floors
                                    </div>
                                    
                                </div>

                                <div className="floorplan__formcontainer-input">
                                    <label>* Size of floor &nbsp;&nbsp;&nbsp;</label>
                                    <div style={{float: "right"}}>
                                    
                                        <input
                                            min = "1"
                                            style = {{width: "70px", marginRight: "20px", fontSize: "18px"}}
                                            type="text"
                                            name = "floorSize"
                                            onChange={ this.props.handleChange('floorSize') }
                                            value = {this.props.values.floorSize === 0 ? '': (this.props.values.floorSize)}
                                            
                                        />
                                        
                                        <select name="floorSizeUnit" style = {{width: "70px", height: "20px" , fontSize: "14px" , backgroundColor : "transparent"}} onChange={this.props.handleChange('floorSizeUnit')}>
                                            <option value="">Unit</option>
                                            <option value="m">m &sup2;</option>
                                            <option value="ft">feet &sup2;</option>
                                        </select>
                                    </div>
                                    
                                </div>

                                <div className="floorplan__formcontainer-input">
                                
                                    <label> &nbsp; &nbsp; Floor Height &nbsp;&nbsp;&nbsp;</label>
                                    <div style={{float: "right"}}>
                                    <input
                                        min = "1"
                                        style = {{width: "70px", marginRight: "20px" , fontSize: "18px", backgroundColor : "transparent" }}
                                        type="text"
                                        name = "floorHeight"
                                        onChange={ this.props.handleChange('floorHeight') }
                                        value = {this.props.values.floorHeight}
                                    />
                                    <select name="floorHeightUnit" style = {{width: "70px", height: "20px", fontSize: "14px"}} onChange={this.props.handleChange('floorHeightUnit')}>
                                        <option value="">Unit</option>
                                        <option value="m">m</option>
                                        <option value="ft">feet</option>
                                    </select>
                                    </div>
                                </div>

                                <div className="floorplan__formcontainer-input">
                                <label> &nbsp; &nbsp; Address </label>
                                    <div style={{float: "right"}}>
                                    <input
                                        style = {{width: "180px"}}
                                        type="text"
                                        name = "floorAddress"
                                        onChange={ this.props.handleChange('floorAddress') }
                                        value = {this.props.values.floorAddress}
                                    />
                                    </div>
                                </div>
                            </div>
                            

                        </div>  {/* floorplan__formcontainer */}
                        
                        
                    </div> {/*floorplan*/}
                    

                </div> {/*application_body*/}
                

                <div className="application__control">
                    <div className="application__control-back">
                        <button className="application__control-back--btn" onClick={this.back}> &lt; &nbsp; Back   </button>
                    </div> 
                    <div className="application__control-next">
                        <button className="application__control-next--btn" onClick={this.saveAndContinue}> Next &nbsp; &gt;   </button>
                    </div> 
                </div>
                
            </div>
        )
    }
}

export default FloorPlan;