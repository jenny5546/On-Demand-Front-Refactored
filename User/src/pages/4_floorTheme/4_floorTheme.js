import React, { useContext } from "react";
import ThemeSelector from "./ThemeSelector";
import { FloorThemeStyle, BtnBottom } from "./style";
import { OndemandContext, OndemandConsumer } from "../../context/OndemandContext";
import { Link } from 'react-router-dom';

const FloorTheme = props => {

    const contextType = useContext(OndemandContext);

    const pickedThemes = value => {
        let srclist = [];
        for (var i = 0; i < value.length; i++) {
            srclist.push(value[i].src);
        }
        contextType.handleSelectedTheme(srclist);
        // console.log(srclist);
    };

    const handleNextStep = e => {
        e.preventDefault();
        props.nextStep();
    };

    const handleBtnBack = e => {
        e.preventDefault();
        props.prevStep();
    };

    return (
        <OndemandConsumer>
            {value => (
                <FloorThemeStyle>
                    <Link to= "/">

                        <div
                            className="FloorTheme__BtnClose"
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

                    <main className="FloorThemeWrap">
                        <div className="FloorTheme__Title">
                            Pick Floor Styles of your Choice
                        </div>
                        <div className="FloorTheme__SubTitle">
                            Select a <span>maximum of three</span> items
                        </div>
                        <div className="FloorTheme__UnderBar" />

                        <ThemeSelector pickedThemes={pickedThemes} />

                        <div className="FloorTheme__SubTitle">
                            <span>Or</span> Upload your Own Style
                        </div>

                        <div className="floortheme__body-imageuploader-wrap">
                            <div>
                                {value.val.floorTheme ? (
                                    <img
                                        src={
                                            value.val.floorThemeUrl
                                        }
                                        style={{
                                            maxWidth: "100px",
                                            maxHeight: "50px"
                                        }}
                                        alt="floortheme"
                                    ></img>
                                ) : (
                                    <div></div>
                                )}
                            </div>
                            <input
                                type="file"
                                name="floorTheme"
                                onChange={value.handleUploadedTheme}
                                className="floortheme__body-imageuploader-wrap--input"
                                multiple
                            />
                        </div>

                        <section className="FloorTheme__Bottom">
                            <BtnBottom btnBack onClick={handleBtnBack}>
                                Back
                            </BtnBottom>

                            <BtnBottom onClick={handleNextStep}>
                                Next
                            </BtnBottom>
                        </section>
                    </main>
                </FloorThemeStyle>
            )}
        </OndemandConsumer>
    );
    
}

export default FloorTheme;
