import React from 'react';
import { Link } from 'react-router-dom';
import "../scss/Body.scss"

class Body extends React.Component {

    render() {
        return (
            <div className="ondemand">
                <div className="ondemand__top">
                    <div className="ondemand__description">
                        <h3>Archisketch On-Demand app</h3>
                        
                        <p>
                            When our clients give us the images of floorplans, <br/>
                            we create an accurate 2D, 3D models of them and <br/>
                            furnish them according to specifications.<br/>
                            With our expertise in interior design and technological edge,<br/>
                            we promise our users accurate and powerful digital spaces.
                        </p>
                        <br/>
                        <button className="ondemand__button"><Link to="/step0">
                            Get Started
                        </Link></button>
                    </div>
                    <div className="scroll">
                        scroll<br/>
                           |<br/>
                    </div>
                </div>
{/*
                <div className="ondemand__bottom">
                    <img src="./what_is_ondemand.png" alt="flow"/>
                    <br/>
                    <br/>
                    <br/>
*/}
                <div className="ondemand__step1">
                    <div className="ondemand__description2">
                        <h4> get your info </h4>
                        <p> this is ondemand hahahahahahahah <br/>
                        Maybe it's hard to believe what's with<br/>
                        my obvious charm and good looks <br/>
                        but people used to think that I was a monster<br/>
                        And for a long time, I believe them <br/>

                        But after a while, <br/>
                        you learn to ignore the names people calling you<br/>
                        you just trust who you are
                        </p>

                    </div>
                    <div className="ondemand__gif">
                        <img src="./back4.jpg"/>
                    </div>
                </div>
                <div className="ondemand__deco">
                    <img src="./deco.jpg" />
                </div>
                <div className="ondemand__step2">
                    <div className="ondemand__gif2">
                        <img src="./back4.jpg"/>
                    </div>
                    <div className="ondemand__description3">
                        <h4> analysis floor info </h4>
                        <p> this is ondemand hahahahahahahah <br/>
                        Maybe it's hard to believe what's with<br/>
                        my obvious charm and good looks <br/>
                        but people used to think that I was a monster<br/>
                        And for a long time, I believe them <br/>

                        But after a while, <br/>
                        you learn to ignore the names people calling you<br/>
                        you just trust who you are
                        </p>
                    </div>
                </div>
                <div className="ondemand__step3">
                    <div className="ondemand__description4">
                        <h4> choose your own theme </h4>
                        <p> this is ondemand hahahahahahahah <br/>
                        Maybe it's hard to believe what's with<br/>
                        my obvious charm and good looks <br/>
                        but people used to think that I was a monster<br/>
                        And for a long time, I believe them <br/>

                        But after a while, <br/>
                        you learn to ignore the names people calling you<br/>
                        you just trust who you are
                        </p>
                    </div>

                </div>

                {/*여기에 배경 넣기*/}
                <div className="ondemand__finalstep">
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

export default Body