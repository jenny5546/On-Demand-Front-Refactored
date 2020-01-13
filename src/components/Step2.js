import React from 'react'
import { Link } from 'react-router-dom';
import "../scss/Step0.scss"

/*
functions
================
drag & drop
format 판별하기
data input 저장하기
*/

class Step0 extends React.Component{
    render() {
        return(
            <div className="Step0">
                <div className="outer_box">
                    <div className="inner_box">
                        <div className="contents">
                            <div className="text">
                                <h5>1. This is step 2</h5>
                                <h5>2. Choose Floor Styles</h5>
                                <h5>3. Feel Free to Tell us  Whatever Else You want </h5>
                            </div>
                        </div>
                        <div className="button">
                            
                            <button className="button previous"><Link to="/step1">
                                Previous
                            </Link></button>
                            <button className="button next"><Link to="/step3">
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