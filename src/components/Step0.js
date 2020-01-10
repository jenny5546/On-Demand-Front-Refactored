import React from 'react'
import "../scss/Step0.scss"

class Step0 extends React.Component{
    render() {
        return(
            <div className="Step0">
                <div className="outer_box">
                    <div className="inner_box">
                        <img src="./floor_plan_gif.png" alt="floor_plan" />
                        <h3> this is our form flow </h3>
                    </div>
                </div>
            </div>
        )
    }
}

export default Step0