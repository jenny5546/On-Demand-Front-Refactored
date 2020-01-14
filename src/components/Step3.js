import React from 'react'
import { Link } from 'react-router-dom';
import "../scss/Step0.scss"

/*
functions
================
맞춤형 사진 보여주기
*/

class Step0 extends React.Component{
    constructor(props){
        super(props)

        this.setState({
            pagenumber: 3,
        })
    }
    render() {
        return(
            <div className="Step0">
                <div className="outer_box">
                    <div className="inner_box">
                        <div className="contents">
                            <div className="text">
                                <h5>1. this is step 3</h5>
                                <h5>2. Choose Floor Styles</h5>
                                <h5>3. Feel Free to Tell us  Whatever Else You want </h5>
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