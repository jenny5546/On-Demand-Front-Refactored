import React from 'react';
import { Route, Switch } from 'react-router-dom';
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

/*
뒤로가기 누르면 number 1빼기
1-1 고려해서 하기.
*/

/*
  {
    dataContainer: [],
    type : "",
    subtype : "",
    num_floor: 0,
    size_floor : 0,
    height_floor : 0,
    address : "",
    theme1 : "",
    theme2 : "",
    theme3 : "",
    extra: "",
    price: 0,
    number: 0,
    pagenum: 0,
  }
*/

class App extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      dataContainer: [],
      type : "",
      subtype : "",
      num_floor: 0,
      size_floor : 0,
      height_floor : 0,
      address : "",
      theme1 : "",
      theme2 : "",
      theme3 : "",
      extra: "",
      price: 0,
      number: 0,
      pagenum: 0,
    }
    this.changeData = this.changeData.bind(this)
    this.changeData2 = this.changeData2.bind(this)
    this.dataStructure = this.dataStructure.bind(this)
  }

  async changeData2(input, data){

    await this.setState({
      [data] : input
    })
    console.log(this.state)
    console.log(input)
    this.dataStructure()
  }
  
  changeData(input, num){
    const newlist = this.state.list.slice()
    newlist[num] = input
    this.setState({
      list: newlist,
    })
  }

  dataStructure = () => {
    let len = Object.keys(this.state).length
    let i
    let datalist = []
    for (i = 0 ; i < len; i++){
      console.log(Object.keys(this.state)[i])
      datalist.push(Object.values(this.state)[i])
    }
    this.setState({
      dataContainer: datalist
    })
    console.log("data container is")
    console.log(this.state.dataContainer)
  }

  render(){
    return (
      <div className="App">
        <Headers />
        <Switch>
          <Route exact path="/" component={Body}/>
          <Route path="/step0" render={(props)=><Step0 list={this.state.list} isAuthed={true} />}/>
          <Route path="/step1" render={(props)=><Step1 list={this.state.list} changeData={this.changeData} changeData2={this.changeData2} isAuthed={true} />}/>
          <Route path="/step1-1" render={(props)=><Step1_1 list={this.state.list} changeData2={this.changeData2} subtype={this.state.subtype} isAuthed={true} />}/>
          <Route path="/step2" render={(props)=><Step2 list={this.state.list} changeData={this.changeData} changeData2={this.changeData2} isAuthed={true} />}/>
          <Route path="/step3" render={(props)=><Step3 list={this.state.list} changeData={this.changeData} changeData2={this.changeData2} isAuthed={true}/>}/>
          <Route path="/step4" render={(props)=><Step4 list={this.state.list} changeData={this.changeData} changeData2={this.changeData2} isAuthed={true}/>}/>
          <Route path="/step5" render={(props)=><Step5 list={this.state.list} dataContainer={this.state.dataContainer} isAuthed={true} />}/>
          {/*404page will be here*/}
        </Switch>
        {/*<Footer />*/}
        </div>
    )
  }
}

export default App;
