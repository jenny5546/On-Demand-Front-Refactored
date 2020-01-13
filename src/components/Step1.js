import React from 'react'
import { Link } from 'react-router-dom';
import "../scss/Step0.scss"

/*
functions
================
commercial 선택시 next 누르면 1-1로 연결하기
data sturcture에 데이터 모으기

linking state 로 하기

hover를 걸면 value가 제대로 안나옴.
*/

const urlMaker = text => {
    if(text === "commercial"){
        return "./step1-1"
    }
    else{
        return "./step2"
    }

}

class Step0 extends React.Component{
    constructor(props){
        super(props)

        this.setState({
            pagenumber: 0,
        })
    }

    render() {
        const {list, getData} = this.props
        //const {pagenumber} = this.state.pagenumber
        return(
            <div className="Step1">
                <div className="outer_box">
                    <div className="inner_box">
                        <div className="contents">
                            <div className="bar">
                                <h3> Progress bar </h3>
                            </div>
                            <div className="choicebox">
                                <button className="choice" value="residential" onClick={(event, pagenumber)=>getData(event, pagenumber)}> 
                                Residential
                                {/*<span className="description">Single, Multi-Family Homes, Condominiums, <br/>
                                    Townhouses and Dormatories </span>*/}
                                </button>
                                <button className="choice" value="commercial" onClick={(event, pagenumber)=>getData(event, pagenumber)}> 
                                Commercial
                                {/*<span className="description">Offices, Restaurant/ Cafes, Shops, Hotels or <br/>
                                special purpose buildings (schools, hospitals and etc. </span>*/}
                                </button>
                            </div>
                        </div>
                        <p>{list}</p>
                        <div className="button">
                            <button className="button previous"><Link to="./step0">
                                Previous
                            </Link></button>
                            <button className="button next"><Link to={urlMaker(list[0])}>
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