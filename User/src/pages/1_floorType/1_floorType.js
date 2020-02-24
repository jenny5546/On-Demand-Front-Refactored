import React, { Component } from "react";
import { FloorTypeStyle, FloorTypeCard } from "./style";

import { Tab__FloorType } from "../../constant";
import { OndemandConsumer } from "../../context/OndemandContext";
import { Link } from 'react-router-dom';

class FloorType extends Component {
    
    /* *----------------------------------------------------* 
            Residential, Commercial에 따라 다음 Step 조정 
    *----------------------------------------------------* */
    handleTypeSelected = value => {
        
        if (value === Tab__FloorType.Residential) {
            this.props.next2Step();
        }
        if (value === Tab__FloorType.Commercial) {
            this.props.nextStep();
        }
    };

    render() {
        console.log(this.props.floorType);
        return (
            <OndemandConsumer>
                {value => (
                    <FloorTypeStyle>
                        
                        <Link to= "/">
                            <div
                                className="FloorType__BtnClose"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M16.192 6.344L11.949 10.586 7.707 6.344 6.293 7.758 10.535 12 6.293 16.242 7.707 17.656 11.949 13.414 16.192 17.656 17.606 16.242 13.364 12 17.606 7.758z" />
                                </svg>

                            </div>
                        </Link>

                        <main className="FloorTypeWrap">
                            <div className="FloorType__Title">
                                Choose Your Floor Plan Type
                            </div>
                            <div className="FloorType__Subtitle">
                                Tell us the purpose of your floor
                            </div>

                            <section className="FloorType__CardWrap">
                                <FloorTypeCard
                                    id="Residential"
                                    onClick={e => {
                                        //다음 Step 결정 
                                        this.handleTypeSelected(
                                            Tab__FloorType.Residential
                                        );

                                        //context 넘겨주기
                                        value.handleFloorType(
                                            Tab__FloorType.Residential
                                        );
                                    }}
                                >
                                    <img
                                        className="FloorType__Img"
                                        src= { process.env.PUBLIC_URL + "assets/floortype/Residential.jpg" }
                                        alt={"Residential"}
                                    />

                                    <div className="FloorType__Name">
                                        Residential
                                    </div>
                                    <div className="FloorType__Desc">
                                        Single, Multi-Family Homes, Dormatories,
                                        Townhouses and Condominiums
                                    </div>
                                </FloorTypeCard>

                                <FloorTypeCard
                                    id="Commercial"
                                    onClick={e => {
                                        //다음 Step 결정 
                                        this.handleTypeSelected(
                                            Tab__FloorType.Commercial
                                        );
                                        //context 넘겨주기
                                        value.handleFloorType(
                                            Tab__FloorType.Commercial
                                        );
                                    }}
                                >
                                    <img
                                        className="FloorType__Img"
                                        src= { process.env.PUBLIC_URL+ "assets/floortype/Commercial.jpg" }
                                        alt={"Commercial"}
                                    />
                                    <div className="FloorType__Name">
                                        Commercial
                                    </div>
                                    <div className="FloorType__Desc">
                                        Offices, Restaurant/Cafes, Shops,
                                        Hotels, or special purpose buildings{" "}
                                        <br />
                                        (schools, hospitals and etc)
                                    </div>
                                </FloorTypeCard>
                            </section>

                                
                            <Link className= "FloorType__BackLink" to="/">
                                <div
                                    className="FloorType__BtnBack"
                                    onClick={value.handleOpenModal}
                                >
                                    Back to Tutorial
                                </div>
                            </Link>

                        </main>
                    </FloorTypeStyle>
                )}
            </OndemandConsumer>
        );
    }
}

export default FloorType;
