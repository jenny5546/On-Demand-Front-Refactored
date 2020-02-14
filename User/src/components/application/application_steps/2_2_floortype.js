import React, { Component } from 'react';
import progressbar from '../../../static/img/application/progress1.png';
import background from '../../../static/img/application/background.png';
import background2 from '../../../static/img/application/background2.png';
import bubble from '../../../static/img/application/bubble.png';

class SubFloorType extends Component{
    
    saveAndContinue = (e) =>{
        e.preventDefault();
        (this.props.values.commercialType === '') ? (alert('Please Choose or Specify the Commercial Type')) : (this.props.nextStep());
        
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

                    <div className="commercialtype">
                        <div className="commercialtype__heading">
                            Please Specify the type of your Commercial Floor
                            <img style={{width: "40px", marginLeft: "8px"}} src={bubble} alt="bubble"></img>
                        </div>
                        <div className="commercialtype__formcontainer">

                            <div>
                                <button
                                    className="commercialtype__formcontainer-btn"
                                    type="button" 
                                    name = "commercialType"
                                    onClick={async(e) => { await this.props.handleButton(e); this.saveAndContinue(e, "value") }} 
                                    value= "Office"
                                >
                                    Office
                                </button>
                            </div>

                            <div>
                                <button
                                    className="commercialtype__formcontainer-btn"
                                    type="button" 
                                    name = "commercialType"
                                    onClick={async(e) => { await this.props.handleButton(e); this.saveAndContinue(e, "value") }} 
                                    value= "Restaurant/Cafe"
                                >
                                    Restaurant/Cafe
                                </button>
                            </div>


                            <div>
                                <button
                                    className="commercialtype__formcontainer-btn"
                                    type="button" 
                                    name = "commercialType"
                                    onClick={async(e) => { await this.props.handleButton(e); this.saveAndContinue(e, "value") }} 
                                    value= "Shops"
                                >
                                    Shops
                                </button>
                            </div>

                            <div >
                                <button
                                    className="commercialtype__formcontainer-btn"
                                    type="button" 
                                    name = "commercialType"
                                    onClick={async(e) => { await this.props.handleButton(e); this.saveAndContinue(e, "value") }} 
                                    value= "Hotels"
                                >
                                    Hotels
                                </button>
                            </div>
                            
                            

                        </div> {/* commercialtype__btncontainer */}

                        <div className="commercialtype__input">
                                <label style={{fontSize: "12px", marginLeft: '12px', paddingTop: '5px', color: '#2c6372'}}>Not listed?</label>
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <input
                                    type="text"
                                    style={{marginTop: '9px', fontSize: '15px', fontWeight: 'lighter', color: "#2c6372", borderBottom: "1px solid #2c6372", borderTop: "none", borderRight: "none", borderLeft: "none", background: "transparent"}}
                                    placeholder = "Type In Yourself"
                                    name = "commercialType"
                                    onChange={ this.props.handleChange('commercialType') }
                                />
                        </div>


                    </div> {/* commercialtype */}
                    
                </div>  {/* application__body */}
                
                
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

export default SubFloorType;