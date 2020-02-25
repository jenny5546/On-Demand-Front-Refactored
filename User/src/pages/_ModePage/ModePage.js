import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ModeTypeStyle, ModeTypeCard } from "./style";

class ModeType extends Component {

    render(){
        return(
            <ModeTypeStyle>
                <main className="ModeTypeWrap">
                    <div className="ModeType__Title">
                        Choose Your Floor Plan Type
                    </div>
                    <div className="ModeType__Subtitle">
                        Tell us the purpose of your floor
                    </div>

                    <section className="ModeType__CardWrap">

                        <ModeTypeCard
                            id="Search"
                        >
                            <img
                                className="ModeType__Img"
                                src={
                                    process.env.PUBLIC_URL +
                                    "assets/mode/search_floorplan.jpg"
                                }
                                alt={"Search"}
                            />

                            <div className="ModeType__Name">
                                Search My Home
                            </div>
                            <div className="ModeType__Desc">
                                Find your home's floor plan by searching our 
                                database with the apartment name, address, or region. (Korea only)
                            </div>
                        </ModeTypeCard>

                        <ModeTypeCard
                            id="Draw"
                        >
                            <img
                                className="ModeType__Img"
                                src={
                                    process.env.PUBLIC_URL +
                                    "assets/mode/newProject_floorplan.jpg"
                                }
                                alt={"Draw"}
                            />

                            <div className="ModeType__Name">
                                Draw New Floor Plan
                            </div>
                            <div className="ModeType__Desc">
                                Draw your own floor plan using our Archisketch Editor
                            </div>
                        </ModeTypeCard>
                        
                        <Link to='/ondemand'>
                            <ModeTypeCard
                                id="Ondemand"
                            >
                                <img
                                    className="ModeType__Img"
                                    src={
                                        process.env.PUBLIC_URL +
                                        "assets/mode/ondemand_floorplan.jpg"
                                    }
                                    alt={"Ondemand"}
                                />
                                <div className="ModeType__Name">
                                    Order Floor Plan
                                </div>
                                <div className="ModeType__Desc">
                                Order & Receive 3D contents including 3D floor plan, 
                                realistic render images, and immersive 720 tour within 24 hours.
                                </div>
                            </ModeTypeCard>
                        </Link>
                        
                    </section>

                    
                </main>
            </ModeTypeStyle>
            

        )
    }
    

    

    
}

export default ModeType;
