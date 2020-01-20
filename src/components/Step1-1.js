import React from 'react'
import { Link } from 'react-router-dom';
import { CSSTransitionGroup } from 'react-transition-group'

import "../scss/Step.scss"

/*
functions
================
data sturcture에 데이터 모으기
*/
class Step1_1 extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            pagenumber: 1,
            temp: 0,
            usertype: "",
        }
        this.change=this.change.bind(this)
        
    }

    change(e){
        this.props.changeData2(e.target.value, e.target.name)
        this.setState({
            usertype: e.target.value
        })
        if(e.target.value === "Office"){
            document.getElementById("one").style.backgroundColor = "lightblue"
            document.getElementById("two").style.backgroundColor = "white"
            document.getElementById("three").style.backgroundColor = "white"
            document.getElementById("four").style.backgroundColor = "white"
            document.getElementById("five").style.backgroundColor = "white"
        }
        else if(e.target.value === "Restaurant / Cafe"){
            document.getElementById("one").style.backgroundColor = "white"
            document.getElementById("two").style.backgroundColor = "lightblue"
            document.getElementById("three").style.backgroundColor = "white"
            document.getElementById("four").style.backgroundColor = "white"
            document.getElementById("five").style.backgroundColor = "white"
        }
        else if(e.target.value === "Shop"){
            document.getElementById("one").style.backgroundColor = "white"
            document.getElementById("two").style.backgroundColor = "white"
            document.getElementById("three").style.backgroundColor = "lightblue"
            document.getElementById("four").style.backgroundColor = "white"
            document.getElementById("five").style.backgroundColor = "white"
        }
        else if(e.target.value === "Hotel"){
            document.getElementById("one").style.backgroundColor = "white"
            document.getElementById("two").style.backgroundColor = "white"
            document.getElementById("three").style.backgroundColor = "white"
            document.getElementById("four").style.backgroundColor = "lightblue"
            document.getElementById("five").style.backgroundColor = "white"
        }
        else if(e.target.value === "Others"){
            document.getElementById("one").style.backgroundColor = "white"
            document.getElementById("two").style.backgroundColor = "white"
            document.getElementById("three").style.backgroundColor = "white"
            document.getElementById("four").style.backgroundColor = "white"
            document.getElementById("five").style.backgroundColor = "lightblue"
        }
    }

    
    render() {
        return(
            <div className="step">
                        <div className="step__progressbar">
                                <h5> 1 / 4 User Info</h5>
                        </div>
                <div className="step__outer-box">
                <CSSTransitionGroup
            transitionName="worksTransition"
            transitionAppear={true}
            transitionAppearTimeout={500}
            transitionEnter={true}
            transitionLeave={true}>
                    <div className="step__inner-box">
                        <div className="step__contents">
                            <div className="choicebox">
                            <div className="description">
                                    <h4>Choose the Type of your Property</h4>
                                </div>
                                <div className="choice2">
                                    <button id="one" className="button_base2" value="Office" name="subtype" onClick={this.change}> 
                                        <div > Office </div>
                                    </button>
                                </div>
                                <div className="choice2">
                                    <button id="two" className="button_base2" value="Restaurant / Cafe" name="subtype" onClick={this.change}> 
                                        <div > Restaurant / Cafe </div>
                                    </button>
                                </div>
                                <div className="choice2">
                                    <button id="three" className="button_base2" value="Shop" name="subtype" onClick={this.change}> 
                                        <div > Shop </div>
                                    </button>
                                </div>
                                <div className="choice2">
                                    <button id="four" className="button_base2" value="Hotel" name="subtype" onClick={this.change}> 
                                        <div > Hotel </div>
                                    </button>
                                </div>
                                <div className="choice2">
                                    <button id="five" className="button_base2" value="Others" name="subtype" onClick={this.change}> 
                                        <div > Others </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="step__button">
                            <Link to="/step1"><button className="previous">
                                <h5>＜</h5>
                            </button></Link>
                            <Link to={this.props.url}><button className="next">
                                <h5>＞</h5>
                            </button></Link>
                        </div>
                        
                    </div>
                    </CSSTransitionGroup>
                </div>
                
            </div>
        )
    }
}

export default Step1_1