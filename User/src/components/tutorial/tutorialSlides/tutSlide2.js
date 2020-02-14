import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import tut2 from '../../../static/img/application/tutorial_2.png'

const SecondTutorial=(props)=>{

    const next = (e) =>{
        e.preventDefault()
        props.nextStep()
        
    }
    const back  = (e) => {
        e.preventDefault();
        props.prevStep();
    }
    
    return(
        <div className= "tutorial__container-content">
            <div className= "tutorial__slides-imgbox">
                <img className= "tutorial__slides-img" src={tut2} alt="theme"></img>
            </div>
            <div className= "tutorial__slides-text">
                <p1 style={{color: "grey"}}>1. Upload Your Floor Plan Image</p1>
                <br></br>
                <p1 style={{fontSize: "23px", fontWeight:"normal"}}>2. Choose <p1 style={{color: "#499fb6"}}>Floor Styles</p1></p1>
                <br></br>
                <p1 style={{color: "grey"}}>3. Tell us whatever else you want!</p1>
            </div>
            <div className="tutorial__btn">
                <IconButton  className="tutorial__btn-before" onClick={back}>
                    <NavigateBeforeIcon fontSize="large"/>
                </IconButton>
                <IconButton  className="tutorial__btn-next" onClick={next}>
                    <NavigateNextIcon fontSize="large"/>
                </IconButton>
            </div>
            
        </div>
    );
}
export default SecondTutorial;