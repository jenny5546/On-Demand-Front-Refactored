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
                            {/*<div className="step__img">
                                <img src="./FloorPlan.jpeg" className="floorplan"/>
        </div>*/}
                            <div className="step__text">
                                <h4> I will get some info
                                    <br/>
                                    to make 2D and 3D floor model what you want.
                                    <br/>
                                    Therefore, I will give few questions.
                                    <br/>
                                    Don`t worry!
                                    <br/>
                                    They are very easy questions.
                                </h4>
                            </div>
                        </div>
                        <div className="step__button">
                            <Link className="start" to="/step1"><button className="getstarted">
                                Let`s Go!
                            </button></Link>
                        </div>
                        
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default Step0