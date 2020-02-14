import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import floorplan from '../../../static/img/application/tutorial_1.jpeg'

const FirstTutorial =(props)=>{
    
    const next = (e) =>{
        e.preventDefault()
        props.nextStep()
        
    }
    return(
        <div className= "tutorial__container-content">

            <div className= "tutorial__slides-imgbox">
                <img className= "tutorial__slides-img" src={floorplan} alt="floorplan"></img>
            </div>
            <div className= "tutorial__slides-text">
                <p1 style={{fontSize: "23px", fontWeight:"normal"}}>1. Upload Your <p1 style={{color: "#499fb6"}}>Floor Plan Image</p1></p1>
                <br></br>
                <p1 style={{color: "grey"}}>2. Choose Floor Styles</p1>
                <br></br>
                <p1 style={{color: "grey"}}>3. Tell us whatever else you want!</p1>
            </div>
            
            <div className="tutorial__btn">
                <IconButton  onClick={next}>
                    <NavigateNextIcon fontSize="large" />
                </IconButton>
            </div>
            

        </div>
    );
    
}
export default FirstTutorial;