import React from 'react'
import { Link } from 'react-router-dom';
import { CSSTransitionGroup } from 'react-transition-group'


import "../scss/Step.scss"

/*
functions
================
data input 저장하기
*/

class Step4 extends React.Component{
    constructor(props){
        super(props)
        this.state={
            pagenumber: 4,
        }

        this.change = this.change.bind(this)
    }

    change(e){
        this.props.changeData2(e.target.value, e.target.name)
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
                            <h5> 4 / 4 Extra Order</h5>

                        </div>
                        <div className="step__contents--column">
                            <div className="description">
                                <p>feel free to add request</p>
                            </div>
                            <div className="textbox">
                                <textarea row="1" className="textinput" placeholder="type anything!" name="extra" onChange={this.change}></textarea>
                            </div>
                        </div>
                        <div className="step__button">
                            <Link to="/step3"><button className="previous">
                            ＜
                            </button></Link>
                            <Link to="/step5"><button className="next">
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

export default Step4