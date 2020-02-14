import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import tutor3 from '../../../static/img/application/tutorial_3.png'

const LastTutorial=(props)=>{
    

    const back  = (e) => {
        e.preventDefault();
        props.prevStep();
    }

    return(
        <div className= "tutorial__container-content">
            <div className= "tutorial__slides-imgbox">
                <img className= "tutorial__slides-img" src={tutor3} alt="tutor3"></img>
            </div>
            <div className= "tutorial__slides-text">
                <p1 style={{color: "grey"}}>1. Upload Your Floor Plan Image</p1>
                <br></br>
                <p1 style={{color: "grey"}}>2. Choose Floor Styles</p1>
                <br></br>
                <p1 style={{fontSize: "22px", fontWeight:"normal"}}>3. Tell us  <p1 style={{color: "#499fb6"}}>whatever else </p1> you want!</p1>
            </div>
            <div className="tutorial__btn">
                <IconButton  className="tutorial__btn-before" onClick={back}>
                    <NavigateBeforeIcon fontSize="large" />
                </IconButton>
            </div>
            
        </div>
    );
}
export default LastTutorial;