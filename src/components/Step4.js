import React from 'react'
import { Link } from 'react-router-dom';
import "../scss/Step0.scss"

/*
functions
================
data input 저장하기
*/

class Step0 extends React.Component{
    constructor(props){
        super(props)

        this.setState({
            pagenumber: 4,
        })
    }

    render() {
        return(
            <div className="Step4">
                <div className="outer_box">
                    <div className="inner_box">
                        <div className="contents">
                            <div className="bar">
                                <h3> Progress bar </h3>
                            </div>
                            <div className="textbox">
                                <h1> gdgd</h1>
                                <textarea row="3" className="textinput"></textarea>
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

export default Step0