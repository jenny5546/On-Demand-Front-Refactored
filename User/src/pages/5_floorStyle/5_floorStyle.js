import React, { Component } from "react";
import ThemeSelector from "./components/themeSelector";
import { FloorThemeStyle, BtnBottom } from "./style";
import { OndemandConsumer } from "../../context/OndemandContext";

class FloorTheme extends Component {
    pickedThemes = value => {
        let srclist = [];
        for (var i = 0; i < value.length; i++) {
            srclist.push(value[i].src);
        }
        this.props.handleThemeChoices(srclist);
        console.log(srclist);
    };

    handleNextStep = e => {
        e.preventDefault();
        // this.handleThemeSubmit()
        this.props.nextStep();
    };

    hanldeBtnBack = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        return (
            <OndemandConsumer>
                {value => (
                    <FloorThemeStyle>
                        <div
                            className="FloorTheme__BtnClose"
                            onClick={e => {
                                value.handleOpenModal();
                            }}
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

                        <main className="FloorThemeWrap">
                            <div className="FloorTheme__Title">
                                Pick Floor Styles of your Choice
                            </div>
                            <div className="FloorTheme__SubTitle">
                                Select a <span>maximum of three</span> items
                            </div>
                            <div className="FloorTheme__UnderBar" />

                            <ThemeSelector pickedThemes={this.pickedThemes} />

                            <div className="FloorTheme__SubTitle">
                                <span>Or</span> Upload your Own Style
                            </div>

                            <div className="floortheme__body-imageuploader-wrap">
                                <div>
                                    {this.props.values.floorTheme ? (
                                        <img
                                            src={
                                                this.props.values.floorThemeUrl
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
                                    onChange={this.props.handleThemeFile}
                                    className="floortheme__body-imageuploader-wrap--input"
                                    multiple
                                />
                            </div>

                            <section className="FloorTheme__Bottom">
                                <BtnBottom btnBack onClick={this.hanldeBtnBack}>
                                    Back
                                </BtnBottom>

                                <BtnBottom onClick={this.handleNextStep}>
                                    Next
                                </BtnBottom>
                            </section>
                        </main>
                    </FloorThemeStyle>
                )}
            </OndemandConsumer>
        );
    }
}

export default FloorTheme;
