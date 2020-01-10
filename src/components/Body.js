import React from 'react';
import "../scss/Body.scss"

class Headers extends React.Component{

    render() {
        return (
            <div className="Body">
                
                <div className="topcontent">
                    <div className="text">
                        <h1> hi this is archisketch ondemand app</h1>
                        <p> this is description </p>
                    </div>
                    <div className="gif">
                        <img src="./logo512.png" alt="gif" />
                    </div>
                </div>

                <div className="bottomcontent">
                    <img src="./what_is_ondemand.png" alt="flow" />
                </div>


            </div>
        )
    }
}

export default Headers