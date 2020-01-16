import React from 'react'
import { Link } from 'react-router-dom';

import "../scss/Step.scss"

/*
functions
================
data 보여주기
*/
/*
{
      dataContainer: [],
      type : "",
      subtype : "",
      num_floor: 0,
      size_floor : 0,
      height_floor : 0,
      address : "",
      theme1 : "",
      theme2 : "",
      theme3 : "",
      extra: "",
      price: 0,
      number: 0,
      pagenum: 0,
      url: "./step1-1"
    }
*/

class Step5 extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            price: 0,
        }
    }

    render() {
        const {dataContainer} = this.props
        return(
            <div className="step">
                <div className="step__outer-box">

                    <div className="step__inner-box">
                        <div className="step__contents">
                            <div className="summarybox">
                                <div className="title">
                                    <p> this is summary </p>
                                    <p>type : {dataContainer[1]}</p>
                                    <p>subtype : {dataContainer[2]} </p>
                                </div>
                                <div className="floorinfo">
                                    <p> this is floor info</p>
                                    <p> num_floor : {dataContainer[3]}</p>
                                    <p> size_floor : {dataContainer[4]} </p>
                                    <p> height_floor : {dataContainer[5]} </p>
                                    <p> address : {dataContainer[6]} </p>
                                </div>
                                <div className="theme">
                                    <p> this is theme </p>
                                </div>
                                <div className="extra">
                                    <p> extra : {dataContainer[10]} </p>
                                </div>
                            </div>
                            <div className="userinfobox">
                                <div className="userinfo">
                                    <p> this is user info</p>
                                </div>
                                <div className="price">
                                    <p> this is price </p>
                                </div>
                            </div>
                        </div>
                        <div className="step__button">
                            <Link to="/step4"><button className="previous">
                            ＜
                            </button></Link>
                            <Link to="/"><button className="next">
                                Go to main page
                            </button></Link>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default Step5