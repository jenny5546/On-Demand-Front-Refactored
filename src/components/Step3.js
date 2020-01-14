import React from 'react'
import { Link } from 'react-router-dom';
import "../scss/Step0.scss"

/*
functions
================
맞춤형 사진 보여주기
일단 랜덤하게 띄우자
*/

class Step0 extends React.Component{
    constructor(props){
        super(props)

        this.state={
            pagenumber: 3,
        }
    }
    render() {
        return(
            <div className="Step3">
                <div className="outer_box">
                    <div className="inner_box">
                        <div className="progressbar">
                                <h4> Progress bar </h4>
                        </div>
                        <div className="contents">
                            <div className="imgbox">
                                <div className="img">
                                    <button className="imgbutton"><img src="./interior_design/modern/1.png"/> </button>
                                    <button className="imgbutton"><img src="./interior_design/modern/6.png"/> </button>
                                </div>
                                <div className="img">
                                    <button className="imgbutton"><img src="./interior_design/modern/2.png"/> </button>
                                    <button className="imgbutton"><img src="./interior_design/modern/5.png"/> </button>

                                </div>
                                <div className="img">
                                    <button className="imgbutton"><img src="./interior_design/modern/3.png"/> </button>
                                    <button className="imgbutton"><img src="./interior_design/modern/4.png"/> </button>

                                </div>
                            </div>
                            <div className="text">
                                <p>1. this is step 3</p>
                            </div>
                        </div>
                        <div className="button">
                            
                            <button className="button previous"><Link to="/step2">
                                Previous
                            </Link></button>
                            <button className="button next"><Link to="/step4">
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