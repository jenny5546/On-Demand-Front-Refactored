import React from 'react'
import { Link } from 'react-router-dom';
import "../scss/Step0.scss"

class Step4 extends React.Component{
    render() {
        return(
            <div className="Step0">
                <div className="outer_box">
                    <div className="inner_box">
                        <img src="./floor_plan_gif.png" alt="floor_plan" />
                        <h3> this is Step4 </h3>
                        <button className="button"><Link to="/step5">
                            Go Summary
                        </Link></button>
                        <button className="button"><Link to="/step3">
                            back
                        </Link></button>

                    </div>
                </div>
            </div>
        )
    }
}

export default Step4