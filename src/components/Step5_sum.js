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
  }
*/

class Step5 extends React.Component{
    render() {
        const {dataContainer} = this.props
        return(
            <div className="Step5">
                <div className="outer_box">
                    <div className="inner_box">
                        <div className="contents">
                            <div className="summarybox">
                                <div className="title">
                                    <p> this is summary </p>
                                    <p>data : {dataContainer[2]}</p>
                                </div>
                                <div className="floorinfo">
                                    <p> this is floor info</p>
                                </div>
                                <div className="theme">
                                    <p> this is theme </p>
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
                        <div className="button">
                            <button className="button previous"><Link to="/step4">
                                Previous
                            </Link></button>
                            <button className="button next"><Link to="/">
                                Go to main page
                            </Link></button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Step5