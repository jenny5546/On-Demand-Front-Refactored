import React from 'react'
import { Link } from 'react-router-dom';
import "../scss/Step0.scss"

/*
Progress bar는 static으로 구현
*/

class Step0 extends React.Component{
    render() {
        return(
            <div className="Step0">
                <div className="outer_box">
                    <div className="inner_box">
                        <div className="contents">
                            <div className="Img">
                                {/* <img src="./floor_plan_gif.png" alt="floor_plan" /> */}
                                <p> GIF </p>
                            </div>
                            <div className="text">
                                <h4>1. Upload Your Floor Plan Image</h4>
                                <h4>2. Choose Floor Styles</h4>
                                <h4>3. Feel Free to Tell us  Whatever Else You want </h4>
                            </div>
                        </div>
                        <div className="button">
                            
                            <button className="button getstarted"><Link to="/step1">
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