/* LANDING PAGE 처음에 딱 키자마자 보이는 부분  */
import React, { Component } from "react";
import Application from "../../components/ApplicationControl";
import Tutorial from "../../components/Tutorial/Tutorial";
import { OndemandStyle, OndemandIframe, OndemandStartBtn } from "./style.js";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { OndemandConsumer } from "../../context/OndemandContext";
import { Link } from "react-router-dom";

/* *-----------------------------------------------------------------* 
                키자마자 보이는 On DemandMain Page
*-----------------------------------------------------------------* */

class MainPage extends Component {
    constructor() {
        super();
        this.state = {
            iFrame: true
        };
    }

    handleIframe = () => {
        this.setState({
            iFrame: !this.state.iFrame
        });
    };

    render() {
        const { iFrame } = this.state;
        return (
            <OndemandConsumer>
                {value => (
                    <>
                        <OndemandStyle>
                            <section className="Ondemand__Left">
                                <div className="Left_Wrap">
                                    <svg
                                        className="Left__Logo"
                                        width="371"
                                        height="24"
                                        viewBox="0 0 371 24"
                                    >
                                        <g fill="none" fillRule="evenodd">
                                            <path
                                                fill="#4b4b4b"
                                                fillRule="nonzero"
                                                d="M220.096,19 C221.264,19 222.068,18.8 222.508,18.4 C222.948,18 223.168,17.224 223.168,16.072 L223.168,16.072 L223.168,9.544 C223.168,8.392 222.948,7.616 222.508,7.216 C222.068,6.816 221.264,6.616 220.096,6.616 L220.096,6.616 L210.976,6.616 C209.808,6.616 209.004,6.816 208.564,7.216 C208.124,7.616 207.904,8.392 207.904,9.544 L207.904,9.544 L207.904,16.072 C207.904,17.224 208.124,18 208.564,18.4 C209.004,18.8 209.808,19 210.976,19 L210.976,19 L220.096,19 Z M220.288,16.672 L210.784,16.672 L210.784,8.824 L220.288,8.824 L220.288,16.672 Z M231.488,19 L231.488,12.232 C231.488,11.768 231.448,11.136 231.368,10.336 C231.672,10.688 232.016,11.024 232.4,11.344 L232.4,11.344 L241.496,19 L243.464,19 L243.464,6.616 L240.872,6.616 L240.872612,13.1850204 C240.877918,13.4959592 240.917714,14.1862857 240.992,15.256 C240.672,14.888 240.2,14.44 239.576,13.912 L239.576,13.912 L230.864,6.616 L228.896,6.616 L228.896,19 L231.488,19 Z M253.032,13.84 L253.032,11.368 L247.44,11.368 L247.44,13.84 L253.032,13.84 Z M264.28,19 C266.632,19 268.328,18.68 269.368,18.04 C271.192,16.904 272.104,15.136 272.104,12.736 C272.104,10.672 271.424,9.112 270.064,8.056 C268.848,7.096 267.168,6.616 265.024,6.616 L265.024,6.616 L257.056,6.616 L257.056,19 L264.28,19 Z M263.656,16.672 L259.936,16.672 L259.936,8.824 L265.048,8.824 C267.768,8.824 269.128,10.112 269.128,12.688 C269.128,14.288 268.584,15.392 267.496,16 C266.696,16.448 265.416,16.672 263.656,16.672 L263.656,16.672 Z M289.856,19 L289.856,16.672 L279.944,16.672 L279.944,13.6 L285.656,13.6 L285.656,11.488 L279.944,11.488 L279.944,8.728 L289.736,8.728 L289.736,6.616 L277.064,6.616 L277.064,19 L289.856,19 Z M297.168,19 L297.168,11.248 C297.168,10.928 297.144,10.52 297.096,10.024 C297.256,10.424 297.504,10.848 297.84,11.296 L297.84,11.296 L302.496,17.512 L303.072,17.512 L307.728,11.32 C308.064,10.76 308.304,10.328 308.448,10.024 C308.384,10.6 308.352,11.024 308.352,11.296 L308.352,11.296 L308.352,19 L311.016,19 L311.016,6.616 L308.712,6.616 L303,14.104 L297.168,6.616 L294.84,6.616 L294.84,19 L297.168,19 Z M317.272,19 L318.712,16.288 L326.56,16.288 L328.048,19 L331.288,19 L324.184,6.616 L321.4,6.616 L314.392,19 L317.272,19 Z M325.36,14.056 L319.936,14.056 L322.696,9.016 L325.36,14.056 Z M337.52,19 L337.52,12.232 C337.52,11.768 337.48,11.136 337.4,10.336 C337.704,10.688 338.048,11.024 338.432,11.344 L338.432,11.344 L347.528,19 L349.496,19 L349.496,6.616 L346.904,6.616 L346.904612,13.1850204 C346.909918,13.4959592 346.949714,14.1862857 347.024,15.256 C346.704,14.888 346.232,14.44 345.608,13.912 L345.608,13.912 L336.896,6.616 L334.928,6.616 L334.928,19 L337.52,19 Z M362.712,19 C365.064,19 366.76,18.68 367.8,18.04 C369.624,16.904 370.536,15.136 370.536,12.736 C370.536,10.672 369.856,9.112 368.496,8.056 C367.28,7.096 365.6,6.616 363.456,6.616 L363.456,6.616 L355.488,6.616 L355.488,19 L362.712,19 Z M362.088,16.672 L358.368,16.672 L358.368,8.824 L363.48,8.824 C366.2,8.824 367.56,10.112 367.56,12.688 C367.56,14.288 367.016,15.392 365.928,16 C365.128,16.448 363.848,16.672 362.088,16.672 L362.088,16.672 Z"
                                            />
                                            <g
                                                stroke="#4B4B4B"
                                                strokeLinecap="square"
                                                strokeWidth=".5"
                                                transform="translate(173)"
                                            >
                                                <line x1="24" y2="24" />
                                                <line
                                                    x1="24"
                                                    y2="24"
                                                    transform="matrix(-1 0 0 1 24 0)"
                                                />
                                            </g>
                                            <g
                                                fill="#4b4b4b"
                                                fillRule="nonzero"
                                            >
                                                <path d="M37.0245,16.875 L38.0145,15.0105 L43.41,15.0105 L44.433,16.875 L46.6605,16.875 L41.7765,8.361 L39.8625,8.361 L35.0445,16.875 L37.0245,16.875 Z M42.585,13.476 L38.856,13.476 L40.7535,10.011 L42.585,13.476 Z M50.8965,16.875 L50.8965,13.6575 L52.7775,13.6575 L56.2095,16.875 L59.0475,16.875 L55.1205,13.6575 C56.2315,13.6575 56.9135,13.619 57.1665,13.542 C57.8265,13.344 58.1565,12.8325 58.1565,12.0075 L58.1565,12.0075 L58.1565,10.011 C58.1565,8.911 57.5185,8.361 56.2425,8.361 L56.2425,8.361 L48.9495,8.361 L48.9495,16.875 L50.8965,16.875 Z M55.3515,12.2055 L50.8965,12.2055 L50.8965,9.8295 L55.3515,9.8295 C55.6595,9.8295 55.874,9.868 55.995,9.945 C56.16,10.033 56.2425,10.22 56.2425,10.506 L56.2425,10.506 L56.2425,11.529 C56.2425,11.815 56.16,12.002 55.995,12.09 C55.874,12.167 55.6595,12.2055 55.3515,12.2055 L55.3515,12.2055 Z M68.745,16.875 C69.548,16.875 70.10075,16.7375 70.40325,16.4625 C70.70575,16.1875 70.857,15.654 70.857,14.862 L70.857,14.862 L70.857,13.8555 L68.877,13.443 L68.877,15.2745 L63.531,15.2745 L63.531,9.879 L68.877,9.879 L68.877,11.496 L70.857,11.1825 C70.857,10.0495 70.78,9.3455 70.626,9.0705 C70.384,8.5975 69.757,8.361 68.745,8.361 L68.745,8.361 L63.663,8.361 C62.86,8.361 62.30725,8.4985 62.00475,8.7735 C61.70225,9.0485 61.551,9.582 61.551,10.374 L61.551,10.374 L61.551,14.862 C61.551,15.654 61.70225,16.1875 62.00475,16.4625 C62.30725,16.7375 62.86,16.875 63.663,16.875 L63.663,16.875 L68.745,16.875 Z M76.479,16.875 L76.479,13.212 L82.6665,13.212 L82.6665,16.875 L84.663,16.875 L84.663,8.361 L82.6665,8.361 L82.6665,11.661 L76.479,11.661 L76.479,8.361 L74.499,8.361 L74.499,16.875 L76.479,16.875 Z M90.549,16.875 L90.549,8.361 L88.569,8.361 L88.569,16.875 L90.549,16.875 Z M101.5665,16.875 C102.3695,16.875 102.925,16.7375 103.233,16.4625 C103.541,16.1875 103.695,15.654 103.695,14.862 L103.695,14.862 L103.695,13.6905 C103.695,12.8985 103.541,12.365 103.233,12.09 C102.925,11.815 102.3695,11.6775 101.5665,11.6775 L101.5665,11.6775 L96.2535,11.6775 L96.2535,9.846 L101.8305,9.846 L101.8305,10.8195 L103.5795,10.407 C103.5795,9.604 103.431,9.06225 103.134,8.78175 C102.837,8.50125 102.2815,8.361 101.4675,8.361 L101.4675,8.361 L96.633,8.361 C95.83,8.361 95.27725,8.4985 94.97475,8.7735 C94.67225,9.0485 94.521,9.582 94.521,10.374 L94.521,10.374 L94.521,11.3145 C94.521,12.1065 94.67225,12.64 94.97475,12.915 C95.27725,13.19 95.83,13.3275 96.633,13.3275 L96.633,13.3275 L101.946,13.3275 L101.946,15.2745 L95.9235,15.2745 L95.9235,14.268 L94.1745,14.631 C94.1745,15.511 94.312,16.105 94.587,16.413 C94.862,16.721 95.434,16.875 96.303,16.875 L96.303,16.875 L101.5665,16.875 Z M109.35,16.875 L109.35,13.1295 L114.4485,16.875 L117.633,16.875 L111.297,12.3705 L116.94,8.361 L114.069,8.361 L109.35,11.9085 L109.35,8.361 L107.3535,8.361 L107.3535,16.875 L109.35,16.875 Z M128.799,16.875 L128.799,15.2745 L121.9845,15.2745 L121.9845,13.1625 L125.9115,13.1625 L125.9115,11.7105 L121.9845,11.7105 L121.9845,9.813 L128.7165,9.813 L128.7165,8.361 L120.0045,8.361 L120.0045,16.875 L128.799,16.875 Z M135.972,16.875 L135.972,9.879 L139.899,9.879 L139.899,8.361 L130.0815,8.361 L130.0815,9.879 L133.992,9.879 L133.992,16.875 L135.972,16.875 Z M148.887,16.875 C149.69,16.875 150.24275,16.7375 150.54525,16.4625 C150.84775,16.1875 150.999,15.654 150.999,14.862 L150.999,14.862 L150.999,13.8555 L149.019,13.443 L149.019,15.2745 L143.673,15.2745 L143.673,9.879 L149.019,9.879 L149.019,11.496 L150.999,11.1825 C150.999,10.0495 150.922,9.3455 150.768,9.0705 C150.526,8.5975 149.899,8.361 148.887,8.361 L148.887,8.361 L143.805,8.361 C143.002,8.361 142.44925,8.4985 142.14675,8.7735 C141.84425,9.0485 141.693,9.582 141.693,10.374 L141.693,10.374 L141.693,14.862 C141.693,15.654 141.84425,16.1875 142.14675,16.4625 C142.44925,16.7375 143.002,16.875 143.805,16.875 L143.805,16.875 L148.887,16.875 Z M156.621,16.875 L156.621,13.212 L162.8085,13.212 L162.8085,16.875 L164.805,16.875 L164.805,8.361 L162.8085,8.361 L162.8085,11.661 L156.621,11.661 L156.621,8.361 L154.641,8.361 L154.641,16.875 L156.621,16.875 Z" />
                                                <polygon points="18.43 0 13.071 0 0 24 11.276 24 11.276 19.349 7.588 19.349 15.75 4.651 23.912 19.349 20.224 19.349 20.224 24 31.492 24" />
                                            </g>
                                        </g>
                                    </svg>

                                    <div className="Left__Line" />

                                    <span className="Left__Title">
                                        Turn Your Boring Floor Plan Images{" "}
                                        <br />
                                        to 3D Virtual Tours
                                    </span>

                                    <div className="Left__Desc">
                                        We create accurate 2D, 3D models of your
                                        floorplans and furnish them according to
                                        specifications. With our expertise in
                                        interior design and technological edge,
                                        we promise you accurate and powerful
                                        digital spaces.
                                    </div>

                                    <OndemandStartBtn
                                        active
                                        className="Left__Btn"
                                        onClick={e => {
                                            value.handleOpenModal();
                                        }}
                                    >
                                        <span>Click to Get Started</span>
                                    </OndemandStartBtn>

                                    <Link to="/" style={{textDecoration: 'none'}}>
                                        
                                        <OndemandStartBtn className="Left__Btn">
                                            <span>Back</span>
                                        </OndemandStartBtn>

                                    </Link>
                                    
                                </div>
                            </section>

                            <section
                                className="Ondemand__Right"
                                onClick={this.handleIframe}
                            >
                                {iFrame === true ? (
                                    <OndemandIframe>
                                        <div className="iframe_Contetns_Wrap">
                                            <svg
                                                className="iframe__logo"
                                                width="80"
                                                height="79"
                                                viewBox="0 0 80 79"
                                            >
                                                <g
                                                    fill="none"
                                                    fillRule="evenodd"
                                                >
                                                    <circle
                                                        cx="39.943"
                                                        cy="39.214"
                                                        r="39.13"
                                                        fill="#383E44"
                                                    />
                                                    <path
                                                        fill="#FAFAFA"
                                                        fillRule="nonzero"
                                                        d="M32.116934,29.0792014 L32.116934,49.3486061 C32.116934,50.894246 33.8190945,51.833369 35.1299537,50.9920713 L51.0559144,40.857369 C52.2689483,40.0943316 52.2689483,38.3334759 51.0559144,37.5508734 L35.1299537,27.4357362 C33.8190945,26.5944385 32.116934,27.5335615 32.116934,29.0792014 Z"
                                                    />
                                                </g>
                                            </svg>

                                            <img
                                                src="assets/OndemandiFrame.png"
                                                alt="OndemandiFrame"
                                            />
                                            <span>Click the Demo Viewer</span>
                                        </div>
                                    </OndemandIframe>
                                ) : (
                                    <iframe
                                        title="Ondemand_Demo"
                                        src={`https://plan.archisketch.com/?mode=0&port_id=3349`}
                                    ></iframe>
                                )}
                            </section>
                        </OndemandStyle>

                        {/* 
                            ******* ROUTER 처리 부분 ******
                        */}
                        
                        
                        <Router>
                            <Tutorial openModal={value.openModal} />
                            <Route
                                path="/ondemand-form"
                                component={Application}
                            />
                        </Router>
                    </>
                )}
            </OndemandConsumer>
        );
    }
}

export default MainPage;
