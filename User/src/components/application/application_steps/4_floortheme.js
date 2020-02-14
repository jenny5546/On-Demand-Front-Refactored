import React, { Component } from 'react';
import ThemeSelector from '../../themeSelector/themeSelector'
import progressbar from '../../../static/img/application/progress3.png';
import background from '../../../static/img/application/background.png';
import background2 from '../../../static/img/application/background2.png';
import bubble from '../../../static/img/application/bubble.png';
// import axios from 'axios';

class FloorTheme extends Component{

    pickedThemes =(value) =>{
        let srclist = []
        for (var i=0; i<value.length; i++) {srclist.push(value[i].src)}
        this.props.handleThemeChoices(srclist);
        console.log(srclist)
    }


    saveAndContinue = (e) =>{
        e.preventDefault()
        // this.handleThemeSubmit()
        this.props.nextStep()
        
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

                    <div className="floortheme">
                        <div className="floortheme__heading">
                            Pick Floor Styles of your Choice
                            <img style={{width: "45px", marginLeft: "8px"}} src={bubble} alt="bubble"></img>
                        </div>
                        <div className="floortheme__body">
                            <div className="floortheme__body-imagepicker">
                                <ThemeSelector pickedThemes={this.pickedThemes}/>
                            </div>
                            <div className="floortheme__body-imageuploader" style={{display: "flex"}} >
                                
                                <div className="floortheme__body-imageuploader-heading">
                                    <p1 style={{fontSize: "18px", fontWeight: "bolder", color: "#5894a3"}}>Or &nbsp;</p1> Upload your Own Style
                                </div>
                                <div className="floortheme__body-imageuploader-wrap">

                                    <div>
                                            {this.props.values.floorTheme ? (
                                                <img src={this.props.values.floorThemeUrl} style={{maxWidth: "100px", maxHeight: "50px"}} alt="floortheme"></img>
                                            ): (
                                                <div></div>
                                            )}
                                    </div>
                                    <input
                                            type="file"
                                            name = "floorTheme"
                                            onChange={ this.props.handleThemeFile }
                                            className="floortheme__body-imageuploader-wrap--input"
                                            multiple
                                    />
                                </div>
                                
                            </div>
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

export default FloorTheme;