import React from 'react'
import { Link } from 'react-router-dom';
import "../scss/Step.scss"

/*
Progress bar는 static으로 구현
*/

class Step0 extends React.Component{
    render() {
        return(
            <div className="step">
                <div className="step__outer-box">
                    <div className="step__inner-box">
                        <div className="step__contents">
                            <div className="step__img">
                                {/* <img src="./floor_plan_gif.png" alt="floor_plan" /> */}
                                <p> GIF </p>
                            </div>
                            <div className="step__text">
                                <h4>1. Upload Your Floor Plan Image</h4>
                                <h4>2. Choose Floor Styles</h4>
                                <h4>3. Feel Free to Tell us  Whatever Else You want </h4>
                            </div>
                        </div>
                        <div className="step__button">
                            <button className="getstarted"><Link to="/step1">
                                Get Started
                            </Link></button>
                        </div>
                        
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default Step0