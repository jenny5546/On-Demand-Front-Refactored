import React from 'react';
import { Link } from 'react-router-dom';
import "../scss/Body.scss"

class Headers extends React.Component {

    render() {
        return (
            <div className="Body">
                <div className="topcontent">
                    <div className="description">
                        <h3>Archisketch On-Demand app</h3>
                        <p>
                            When our clients give us the images of floorplans, <br/>
                            we create an accurate 2D, 3D models of them and <br/>
                            furnish them according to specifications.<br/>
                            With our expertise in interior design and technological edge,<br/>
                            we promise our users accurate and powerful digital spaces.
                        </p>
                        <br/>
                        <button className="button"><Link to="/step0">
                            Get Started
                        </Link></button>
                    </div>
                    <div className="gif">
                        <img src="./logo512.png" alt="gif"/>
                    </div>
                </div>

                <div className="bottomcontent">
                    <img src="./what_is_ondemand.png" alt="flow"/>
                    <br/>
                    <br/>
                    <br/>

                    <button className="button"><Link to="/step0">
                            Get Started
                    </Link></button>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                </div>

            </div>
        )
    }
}

export default Headers