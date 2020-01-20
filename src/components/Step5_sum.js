import React from 'react'
import { Link } from 'react-router-dom';
import { CSSTransitionGroup } from 'react-transition-group'


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
      theme1 : "",7
      theme2 : "",8
      theme3 : "",9
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
        this.calPrice = this.calPrice.bind(this)
    }

    calPrice(){
        const size = this.props.dataContainer[4]
        console.log("hihi")
        if(size <= 300){
            if(this.props.dataContainer[1] === "residential"){

                return 99
            }
            else{

                return 199
            }
        }
        else if(size <= 600){
            if(this.props.dataContainer[1] === "residential"){

                return 199
            }
            else{

                return 299
            }
        }
        else if(size <=900){
            if(this.props.dataContainer[1] === "residential"){

                return 299
            }
            else{
                return 499
            }
        }
        else{
            if(this.props.dataContainer[1] === "residential"){

                return "499"
            }
            else{

                return "699"
            }
        }
    }

    render() {
        const {dataContainer} = this.props
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
                            <h3> Summary </h3>
                        </div>
                        <div className="step__contents">
                            <div className="summarybox">
                                <div className="title">
                                    <h5> User Info </h5>
                                    <p>Type : {dataContainer[1]}</p>
                                    <p>Subtype : {dataContainer[2]} </p>
                                </div>
                                <div className="floorinfo">
                                    <h5> Floor info</h5>
                                    <p> Num_floor : {dataContainer[3]}</p>
                                    <p> Size_floor : {dataContainer[4]} </p>
                                    <p> Height_floor : {dataContainer[5]} </p>
                                    <p> Address : {dataContainer[6]} </p>
                                </div>
                                <div className="theme">
                                    <p> Theme:{dataContainer[7]}</p>
                                </div>
                                <div className="extra">
                                    <p> Extra Order : {dataContainer[10]} </p>
                                </div>
                            </div>
                            <div className="userinfobox">
                                <div className="userinfo">
                                    <p> User name: Taeyeong Kim</p>
                                    <p> User Email : rlaxodud1122@gmail.com</p>
                                    <p> Phone number : +82-010-****-3115</p>
                                </div>
                                <div className="price">
                                    <h4> Price: {this.calPrice()}$</h4>
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
                </CSSTransitionGroup>
            </div>
        )
    }
}

export default Step5