import React, { Component } from "react";
import { OndemandConsumer } from "../../context/OndemandContext";
import { TutorialStyle, TutoContent, TutoBtn } from "./style";

/*

Ondemand 버튼 클릭시, 등장하는 최초

Tutorial 페이지

*/

class Tutorial extends Component {
    state = {
        tutoStep: 1
    };

    handleBtnSkip = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    render() {
        const handleNextTuto = () => {
            this.setState({
                tutoStep: this.state.tutoStep + 1
            });
            console.log(this.state.tutoStep);
        };

        const handlePrevTuto = () => {
            this.setState({
                tutoStep: this.state.tutoStep - 1
            });
        };
        const { tutoStep } = this.state;
        return (
            <OndemandConsumer>
                {value => (
                    <TutorialStyle>
                        <section className="TutorialBackground">
                            <div className="TutorialWrap">
                                <TutoBtn
                                    className="BtnClose"
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
                                </TutoBtn>

                                <span className="Tuto__Subtitle">
                                    Take a look at How our
                                </span>
                                <span className="Tuto__Title">
                                    On-Demand Service Works
                                </span>

                                {/* --------------- Tuto Contents --------------- */}

                                {(function() {
                                    switch (tutoStep) {
                                        case 1:
                                            return (
                                                <TutoContent>
                                                    <TutoBtn
                                                        dark
                                                        className="BtnNext"
                                                        onClick={e => {
                                                            handleNextTuto();
                                                        }}
                                                    >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="24"
                                                            height="24"
                                                            viewBox="0 0 24 24"
                                                        >
                                                            <path d="M11.293 17.293L12.707 18.707 19.414 12 12.707 5.293 11.293 6.707 15.586 11 6 11 6 13 15.586 13z" />
                                                        </svg>
                                                    </TutoBtn>

                                                    <div className="TutoContent__Img" />
                                                    <span className="TutoContent__desc">
                                                        First. Upload Your Floor
                                                        Plan Image
                                                    </span>
                                                </TutoContent>
                                            );
                                        case 2:
                                            return (
                                                <TutoContent>
                                                    <TutoBtn
                                                        dark
                                                        className="BtnPrev"
                                                        onClick={e => {
                                                            handlePrevTuto();
                                                        }}
                                                    >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="24"
                                                            height="24"
                                                            viewBox="0 0 24 24"
                                                        >
                                                            <path d="M12.707 17.293L8.414 13 18 13 18 11 8.414 11 12.707 6.707 11.293 5.293 4.586 12 11.293 18.707z" />
                                                        </svg>
                                                    </TutoBtn>
                                                    <TutoBtn
                                                        dark
                                                        className="BtnNext"
                                                        onClick={e => {
                                                            handleNextTuto();
                                                        }}
                                                    >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="24"
                                                            height="24"
                                                            viewBox="0 0 24 24"
                                                        >
                                                            <path d="M11.293 17.293L12.707 18.707 19.414 12 12.707 5.293 11.293 6.707 15.586 11 6 11 6 13 15.586 13z" />
                                                        </svg>
                                                    </TutoBtn>

                                                    <div className="TutoContent__Img" />
                                                    <span className="TutoContent__desc">
                                                        Second. Choose Your
                                                        Interior Style
                                                    </span>
                                                </TutoContent>
                                            );
                                        case 3:
                                            return (
                                                <TutoContent>
                                                    <TutoBtn
                                                        dark
                                                        className="BtnPrev"
                                                        onClick={e => {
                                                            handlePrevTuto();
                                                        }}
                                                    >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="24"
                                                            height="24"
                                                            viewBox="0 0 24 24"
                                                        >
                                                            <path d="M12.707 17.293L8.414 13 18 13 18 11 8.414 11 12.707 6.707 11.293 5.293 4.586 12 11.293 18.707z" />
                                                        </svg>
                                                    </TutoBtn>
                                                    <div className="TutoContent__Img" />
                                                    <span className="TutoContent__desc">
                                                        Third. Tell us whatever
                                                        else you want!
                                                    </span>
                                                </TutoContent>
                                            );
                                        default:
                                            return (
                                                <TutoContent>
                                                    <TutoBtn
                                                        dark
                                                        className="BtnNext"
                                                        onClick={e => {
                                                            handleNextTuto();
                                                        }}
                                                    >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="24"
                                                            height="24"
                                                            viewBox="0 0 24 24"
                                                        >
                                                            <path d="M11.293 17.293L12.707 18.707 19.414 12 12.707 5.293 11.293 6.707 15.586 11 6 11 6 13 15.586 13z" />
                                                        </svg>
                                                    </TutoBtn>
                                                    <div className="TutoContent__Img" />
                                                    <span className="TutoContent__desc">
                                                        First. Upload Your Floor
                                                        Plan Image
                                                    </span>
                                                </TutoContent>
                                            );
                                    }
                                })()}

                                {/* --------------- Tuto Contents --------------- */}

                                <div
                                    className={
                                        tutoStep !== 3
                                            ? "Tuto__SkipBtn Tuto"
                                            : "Tuto__SkipBtn"
                                    }
                                    onClick={this.handleBtnSkip}
                                >
                                    {tutoStep !== 3
                                        ? "Skip Tutorial >"
                                        : "Start Application >"}
                                </div>
                            </div>
                        </section>
                    </TutorialStyle>
                )}
            </OndemandConsumer>
        );
    }
}

export default Tutorial;
