import React from 'react';
import { Link } from 'react-router-dom';
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
                        <h2>Archisketch On-Demand app</h2>
                        
                        <p>
                            When our clients give us the images of floorplans, <br/>
                            we create an accurate 2D, 3D models of them and <br/>
                            furnish them according to specifications.<br/>
                        </p>
                        <br/>
                        <Link to="/step1"><button className="ondemand__button">
                            Get Started
                        </button></Link>
                    </div>
                    <div className="scroll">
                        <a href="#step1"> scroll</a>
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
                    data-aos-duration="1000"
                    className="ondemand__step1"
                    id='step1'
                    >
                    <div className="ondemand__description2">
                        <h4> Step 1 User info </h4>
                        <p> Enter your basic info <br/>
                        don`t worry, the questions are very easy<br />
                        <br/>
                        more description...
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
                    data-aos-offset="600" 
                    data-aos-duration="1300"
                    className="ondemand__step2">
                    <div className="ondemand__gif2">
                        <img src="./pexels.jpeg"/>
                    </div>
                    <div className="ondemand__description3">
                        <h4> Step 2 analysis floor info </h4>
                        <p> You should enter your floor info <br/>
                        we analysis your floor by<br/>
                       floor plan, size, height... etc.. <br/>
                       <br/>
                        more description... <br/>
                        </p>
                    </div>
                </div>

                <div data-aos="fade-left" 
                    data-aos-offset="600" 
                    data-aos-duration="1300"
                    className="ondemand__step4">

                    <div className="ondemand__description5">
                    <h4> Step 3 choose your own theme </h4>
                        <p> You can choose your own theme <br/>
                        we give design examples that<br/>
                        help your decision. <br/>
                        <br/>
                        More description.. <br/>
                        </p>
                    </div>
                    <div className="ondemand__gif3">
                        <img src="./image3.jpeg"/>
                    </div>

                </div>
                <div data-aos="fadeInUp" 
                    data-aos-offset="300"  
                    data-aos-duration="1000"
                    className="ondemand__step3">
                    <div className="ondemand__description4">
                        <h4> Get your own 3D model! </h4>
                        <p> So easy! <br/>
                        description..<br/>
                        description.. <br/>
                        description..<br/>
                        <br/>
                        more description...
                        </p>
                    </div>
                    <div className="buttonclass">
                    <Link to="/step1"><button className="ondemand__button">
                            Get Started
                    </button></Link>
                    </div>
                </div>
                {/*여기에 배경 넣기*/}
                {/*
                <div className="right-sidebar">
                    <h4 className="step1"> step 1</h4>
                    <h4 className="step3"> step 3</h4>
                </div>
                <div className="left-sidebar">
                    <h4 className="step2"> step 2</h4>
                </div>
                */}
            </div>

        )
    }
}

export default Body