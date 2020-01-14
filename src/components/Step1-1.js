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
        }

        this.change=this.change.bind(this)
    }

    change(e){
        this.props.changeData2(e.target.value, e.target.name)
    }

    render() {
        const {list} = this.props

        return(
            <div className="Step1">
                <div className="outer_box">
                    <div className="inner_box">
                        <div className="progressbar">
                                <h4> Progress bar </h4>
                        </div>
                        <div className="contents">
                            <div className="choicebox">
                                <button className="choice" value="Office" name="subtype" onClick={this.change}> 
                                Office
                                </button>
                                <button className="choice" value="Restaurant / cafe"  name="subtype" onClick={this.change}> 
                                Restaurant / cafe
                                </button>
                                <button className="choice" value="Shop" name="subtype" onClick={this.change}> 
                                Shop
                                </button>
                                <button className="choice" value="Hotel" name="subtype" onClick={this.change}> 
                                Hotel
                                </button>
                                <button className="choice" value="Others" name="subtype" onClick={this.change}> 
                                Othres
                                </button>
                            </div>
                        </div>
                        <div className="button">
                            <button className="button previous"><Link to="/step1">
                                Previous
                            </Link></button>
                            <button className="button next"><Link to="/step2">
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