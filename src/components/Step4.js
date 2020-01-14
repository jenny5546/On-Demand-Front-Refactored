import React from 'react'
import { Link } from 'react-router-dom';
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
            <div className="Step4">
                <div className="outer_box">
                    <div className="inner_box">
                        <div className="progressbar">
                                <h4> Progress bar </h4>
                        </div>
                        <div className="contents">
                            <div className="description">
                                <p>feel free to add request</p>
                            </div>
                            <div className="textbox">
                                <textarea row="1" className="textinput" placeholder="type anything!" name="extra" onChange={this.change}></textarea>
                            </div>
                        </div>
                        <div className="button">
                            <button className="button previous"><Link to="/step3">
                                Previous
                            </Link></button>
                            <button className="button next"><Link to="/step5">
                                Next
                            </Link></button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Step4