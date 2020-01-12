import React from 'react'
import { Link } from 'react-router-dom';
import "../scss/Step0.scss"

class Step5 extends React.Component{
    render() {
        return(
            <div className="Step0">
                <div className="outer_box">
                    <div className="inner_box">
                        <img src="./floor_plan_gif.png" alt="floor_plan" />
                        <h3> this is Step5 </h3>
                        <button className="button"><Link to="/">
                            Go to main page
                        </Link></button>
                        <button className="button"><Link to="/step4">
                            back
                        </Link></button>

                    </div>
                </div>
            </div>
        )
    }
}

export default Step5