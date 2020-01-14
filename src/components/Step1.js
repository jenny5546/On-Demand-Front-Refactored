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

class Step0 extends React.Component{
    constructor(props){
        super(props)

        this.state={
            pagenumber: 0,
            usertype: "",
        }

        this.change = this.change.bind(this)
        this.change2 = this.change2.bind(this)
        this.urlMaker = this.urlMaker.bind(this)
    }

    change(e){
        this.props.changeData(e.target.value, this.state.pagenumber)

    }
    change2(e){
        console.log(e.target.name)
        console.log(e.target.value)
        this.props.changeData2(e.target.value, e.target.name)
        this.setState({
            usertype: e.target.value
        })
    }
    urlMaker(){
        if(this.state.usertype === "commercial"){
            return "./step1-1"
        }
        else if(this.state.usertype === "residential"){
            return "./step2"
        }
        else{
            //alert("write!!!")
            return "./step1"
        }
    }
    render() {
        const {list} = this.props
        //const {pagenumber} = this.state.pagenumber
        return(
            <div className="Step1">
                <div className="outer_box">
                    <div className="inner_box">
                        <div className="progressbar">
                                <h4> Progress bar </h4>
                        </div>
                        <div className="contents">

                            <div className="choicebox">
                                <button className="choice" value="residential" name="type" onClick={this.change2}> 
                                Residential
                                {/*<span className="description">Single, Multi-Family Homes, Condominiums, <br/>
                                    Townhouses and Dormatories </span>*/}
                                </button>
                                <button className="choice" value="commercial" name="type" onClick={this.change2} > 
                                Commercial
                                {/*<span className="description">Offices, Restaurant/ Cafes, Shops, Hotels or <br/>
                                special purpose buildings (schools, hospitals and etc. </span>
                                onClick={(event, pagenumber)=>getData(event, pagenumber)}*/}
                                </button>
                            </div>
                        </div>
                        <div className="button">
                            <button className="button previous"><Link to="./step0">
                                Previous
                            </Link></button>
                            <button className="button next"><Link to={this.urlMaker}>
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