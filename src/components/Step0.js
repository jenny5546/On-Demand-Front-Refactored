import React from 'react'
import { Link } from 'react-router-dom';
import "../scss/Step.scss"

/*
Progress bar는 static으로 구현
여기는 도면을 3d로 만들어 준다는 것을 명확하게 보여주기
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
                                <img src="./FloorPlan.jpeg" className="floorplan"/>
                            </div>
                            <div className="step__text">
                                <h5> I will get your info and your floor info.
                                    <br/>
                                    to make 2D and 3D floor model what you want.
                                    <br/>
                                    Therefore, I will give few questions.ondemand.
                                    <br/>
                                    Don`t worry!
                                    <br/>
                                    They are very easy questions.
                                </h5>
                            </div>
                        </div>
                        <div className="step__button">
                            <button className="getstarted"><Link to="/step1">
                                Let`s Go!
                            </Link></button>
                        </div>
                        
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default Step0