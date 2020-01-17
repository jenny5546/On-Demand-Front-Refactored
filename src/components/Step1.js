import React from 'react'
import { Link } from 'react-router-dom';
import { CSSTransitionGroup } from 'react-transition-group'
import "../scss/Step.scss"

/*
functions
================
commercial 선택시 next 누르면 1-1로 연결하기
data sturcture에 데이터 모으기

linking state 로 하기

hover를 걸면 value가 제대로 안나옴.
*/

class Step1 extends React.Component{
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
    async change2(e){
        console.log(e.target.name)
        console.log(e.target.value)
        this.props.changeData2(e.target.value, e.target.name)
        this.setState({
            usertype: e.target.value
        })
        if(e.target.value === "residential"){
            document.getElementById("one").style.backgroundColor = "lightblue"
            document.getElementById("two").style.backgroundColor = "white"
        }
        else if(e.target.value === "commercial"){
            document.getElementById("one").style.backgroundColor = "white"
            document.getElementById("two").style.backgroundColor = "lightblue"
        }
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

            <div className="step">

                <div className="step__outer-box">
                <CSSTransitionGroup
            transitionName="worksTransition"
            transitionAppear={true}
            transitionAppearTimeout={500}
            transitionEnter={true}
            transitionLeave={true}>
                    <div className="step__inner-box">
                        <div className="step__progressbar">
                                <h5> 1 / 4 User Info</h5>
                        </div>
                        <div className="step__contents">

                            <div className="choicebox">
                                <div className="description">
                                    <h4>Choose the Type of your Property</h4>
                                </div>
                                <div className="choice">
                                    <button className="button_base b08_3d_pushback" value="residential" name="type" onClick={this.change2}> 
                                        <div id="one"> residential</div>
                                        <div > Single, Multi-Family Homes, Condominiums, <br/>
                                    Townhouses and Dormatories </div>
                                    </button>
                                {/*<span className="description">Single, Multi-Family Homes, Condominiums, <br/>
                                    Townhouses and Dormatories </span>*/}
                                </div>
                                <div className="choice">
                                    <button className="button_base b08_3d_pushback" value="commercial" name="type" onClick={this.change2}> 
                                        <div id="two"> commercial </div>
                                        <div > Offices, Restaurant/ Cafes, Shops, Hotels or <br/>
                                special purpose buildings (schools, hospitals) </div>
                                    </button>
                                {/*<span className="description">Offices, Restaurant/ Cafes, Shops, Hotels or <br/>
                                special purpose buildings (schools, hospitals and etc. </span>
                                onClick={(event, pagenumber)=>getData(event, pagenumber)}*/}
                                </div>
                            </div>
                        </div>
                        <div className="step__button">
                            <Link to="./"><button className="previous">
                                ＜
                            </button></Link>
                            <Link to={this.urlMaker}><button className="next">
                                ＞
                            </button></Link>
                        </div>
                        
                    </div>
                    </CSSTransitionGroup>
                </div>
                

            </div>

        )
    }
}

export default Step1