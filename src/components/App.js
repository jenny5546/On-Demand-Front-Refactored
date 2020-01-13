import React from 'react';
import { Route } from 'react-router-dom';
import Headers from './Header';
import Body from './Body';
import Footer from './Footer';
import Step0 from './Step0';
import Step1 from './Step1';
import Step1_1 from './Step1-1'
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import Step5 from './Step5_sum';


import "../scss/App.scss"

const data_list = ["n","n","n",0,0,0,"n","n","n","n",0]
/*
  {
    type : "",
    subtype : "",
    floorplan : "",
    nub_floor: 0,
    size_floor : 0,
    floor_height : 0,
    address : "",
    theme1 : "",
    theme2 : "",
    theme3 : "",
    price: 0,
  },
*/

class App extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      list: data_list,
      inputData: "",
      number: 0,
    }
    this.changeData = this.changeData.bind(this)
    this.getData = this.getData.bind(this)
  }

  changeData(input, id){
    let nownum = this.state.number
    const newlist = this.state.list.slice()
    newlist[id] = input
    this.setState({
      list: newlist,
      number: nownum+1
    })
    console.log(this.state.number)
  }

  
  async getData(event) {
    this.setState({
      inputData: event.target.value
    })
    // /event.preventDefault()
    this.changeData(event.target.value, this.state.number)
    console.log(this.state.inputData)
    console.log(event.target.value)
    console.log(event.target)
  }

  render(){
    return (
      <div className="App">
        <Headers />
        <Route exact path="/" component={Body}/>
        <Route path="/step0" render={(props)=><Step0 list={this.state.list} isAuthed={true} />}/>
        <Route path="/step1" render={(props)=><Step1 list={this.state.list} onClick={this.getData} isAuthed={true} />}/>
        <Route path="/step1-1" render={(props)=><Step1_1 list={this.state.list} inputData={this.state.inputData} onClick={this.getData} isAuthed={true} />}/>
        <Route path="/step2" component={Step2}/>
        <Route path="/step3" component={Step3}/>
        <Route path="/step4" component={Step4}/>
        <Route path="/step5" render={(props)=><Step5 list={this.state.list} isAuthed={true} />}/>
        <Footer />
      </div>
    )
  }
}

export default App;
