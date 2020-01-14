import React from 'react'
import { Link } from 'react-router-dom';
import "../scss/Step0.scss"

/*
functions
================
data sturcture에 데이터 모으기
*/
class Step0 extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            pagenumber: 1,
        }

        this.change=this.change.bind(this)
    }

    change(e){
        this.props.changeData(e.target.value, this.state.pagenumber)
    }

    render() {
        const {list} = this.props

        return(
            <div className="Step1">
                <div className="outer_box">
                    <div className="inner_box">
                        <div className="contents">
                            <div className="bar">
                                <h3> Progress bar </h3>
                            </div>
                            <div className="choicebox">
                                <button className="choice" value="Office" onClick={this.change}> 
                                Office
                                </button>
                                <button className="choice" value="Restaurant / cafe" onClick={this.change}> 
                                Restaurant / cafe
                                </button>
                                <button className="choice" value="Shop" onClick={this.change}> 
                                Shop
                                </button>
                                <button className="choice" value="Hotel" onClick={this.change}> 
                                Hotel
                                </button>
                                <button className="choice" value="Others" onClick={this.change}> 
                                Othres
                                </button>
                            </div>
                        </div>
                        <p>{list}</p>

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

export default Step0