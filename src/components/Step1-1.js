import React from 'react'
import { Link } from 'react-router-dom';
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
        const {list} = this.props

        return(
            <div className="step">
                <div className="step__outer-box">
                    <div className="step__inner-box">
                        <div className="step__progressbar">
                                <h4> Progress bar </h4>
                        </div>
                        <div className="step__contents">
                            <div className="choicebox">
                            <div className="description">
                                    <h4>Choose the Type of your Property</h4>
                                </div>
                                <div className="choice">
                                    <button className="button_base b08_3d_pushback" value="Office" name="subtype" onClick={this.change}> 
                                        <div id="one"> Office </div>
                                        <div > Hover </div>
                                    </button>
                                </div>
                                <div className="choice">
                                    <button className="button_base b08_3d_pushback" value="Restaurant / Cafe" name="subtype" onClick={this.change}> 
                                        <div id="two"> Restaurant / Cafe </div>
                                        <div > Hover </div>
                                    </button>
                                </div>
                                <div className="choice">
                                    <button className="button_base b08_3d_pushback" value="Shop" name="subtype" onClick={this.change}> 
                                        <div id="three"> Shop </div>
                                        <div > Hover </div>
                                    </button>
                                </div>
                                <div className="choice">
                                    <button className="button_base b08_3d_pushback" value="Hotel" name="subtype" onClick={this.change}> 
                                        <div id="four"> Hotel </div>
                                        <div > Hover </div>
                                    </button>
                                </div>
                                <div className="choice">
                                    <button className="button_base b08_3d_pushback" value="Others" name="subtype" onClick={this.change}> 
                                        <div id="five"> Others </div>
                                        <div > Hover </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="step__button">
                            <button className="previous"><Link to="/step1">
                                Previous
                            </Link></button>
                            <button className="next"><Link to={this.props.url}>
                                Next
                            </Link></button>
                        </div>
                        
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default Step1_1