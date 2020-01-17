import React from 'react'
import { Link } from 'react-router-dom';
import { CSSTransitionGroup } from 'react-transition-group'


import "../scss/Step.scss"

/*
functions
================
맞춤형 사진 보여주기
일단 랜덤하게 띄우자
*/

class Step3 extends React.Component{
    constructor(props){
        super(props)

        this.state={
            pagenumber: 3,
        }
    }
    render() {
        return(
            <div className="step">
            <CSSTransitionGroup
            transitionName="worksTransition"
            transitionAppear={true}
            transitionAppearTimeout={500}
            transitionEnter={true}
            transitionLeave={true}>
                <div className="step__outer-box">

                    <div className="step__inner-box">
                        <div className="step__progressbar">
                            <h5> 3 / 4 Theme Choice</h5>

                        </div>
                        <div className="step__contents--column">
                            <div className="description">
                                <h4>Choose the Type of your Property</h4>
                            </div>
                            <div className="imgbox">
                                <div className="img">
                                    <button className="imgbutton"><img src="./interior_design/modern/1.png"/> </button>
                                    <button className="imgbutton"><img src="./interior_design/modern/6.png"/> </button>
                                    <button className="imgbutton"><img src="./interior_design/minimalist/1.png"/> </button>
                                </div>
                                <div className="img">
                                    <button className="imgbutton"><img src="./interior_design/modern/2.png"/> </button>
                                    <button className="imgbutton"><img src="./interior_design/modern/5.png"/> </button>
                                    <button className="imgbutton"><img src="./interior_design/minimalist/2.png"/> </button>
                                </div>
                                <div className="img">
                                    <button className="imgbutton"><img src="./interior_design/modern/3.png"/> </button>
                                    <button className="imgbutton"><img src="./interior_design/modern/4.png"/> </button>
                                    <button className="imgbutton"><img src="./interior_design/minimalist/4.png"/> </button>
                                </div>
                            </div>
                        </div>
                        <div className="step__button">
                            
                            <Link to="/step2"><button className="previous">
                            ＜
                            </button></Link>
                            <Link to="/step4"><button className="next">
                            ＞
                            </button></Link>
                        </div>
                        
                    </div>

                </div>
                </CSSTransitionGroup>
            </div>
        )
    }
}

export default Step3