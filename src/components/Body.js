import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "../scss/Body.scss"
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';

AOS.init();

class Body extends React.Component {
    render() {
        return (
            <div className="ondemand">

                <div className="ondemand__top">

                    <div data-aos="fadeInUp"
                        data-aos-duration="2000"
                        className="ondemand__description">
                        <h3>Archisketch On-Demand app</h3>
                        
                        <p>
                            When our clients give us the images of floorplans, <br/>
                            we create an accurate 2D, 3D models of them and <br/>
                            furnish them according to specifications.<br/>
                        </p>
                        <br/>
                        <button className="ondemand__button"><Link to="/step0">
                            Get Started
                        </Link></button>
                    </div>
                    <div className="scroll">
                        <p> scroll</p>
                        <div className="arrow">
                            <img src="./arrow.png" />
                        </div>
                    </div>


                </div>
{/*
                <div className="ondemand__bottom">
                    <img src="./what_is_ondemand.png" alt="flow"/>
                    <br/>
                    <br/>
                    <br/>
*/}
                <div data-aos="fade-left" 
                    data-aos-duration="1300"
                    className="ondemand__step1">
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
                    <img src="./yellow.jpg" />
                </div>
                <div data-aos="fade-right" 
                    data-aos-offset="800" 
                    data-aos-duration="1300"
                    className="ondemand__step2">
                    <div className="ondemand__gif2">
                        <img src="./pexels.jpeg"/>
                    </div>
                    <div className="ondemand__description3">
                        <h4> analysis floor info </h4>
                        <p> this is ondemand hahahahahahahah <br/>
                        Maybe it's hard to believe what's with<br/>
                        my obvious charm and good looks <br/>
                        but people used to think that I was a monster<br/>
                        And for a long time, I believe them <br/>
                        </p>
                    </div>
                </div>

                <div data-aos="fade-left" 
                    data-aos-offset="1200" 
                    data-aos-duration="1300"
                    className="ondemand__step4">

                    <div className="ondemand__description5">
                    <h4> choose your own theme </h4>
                        <p> this is ondemand hahahahahahahah <br/>
                        Maybe it's hard to believe what's with<br/>
                        my obvious charm and good looks <br/>
                        but people used to think that I was a monster<br/>
                        And for a long time, I believe them <br/>
                        </p>
                    </div>
                    <div className="ondemand__gif3">
                        <img src="./image3.jpeg"/>
                    </div>

                </div>
                <div data-aos="fadeInUp" 
                    data-aos-offset="1200"  
                    data-aos-duration="1000"
                    className="ondemand__step3">
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
                    <div className="buttonclass">
                    <button className="button"><Link to="/step0">
                            Get Started
                    </Link></button>
                    </div>
                </div>
                {/*여기에 배경 넣기*/}
                <div className="right-sidebar">
                    <h4 className="step1"> step 1</h4>
                    <h4 className="step3"> step 3</h4>
                </div>
                <div className="left-sidebar">
                    <h4 className="step2"> step 2</h4>
                </div>
            </div>

        )
    }
}

export default Body