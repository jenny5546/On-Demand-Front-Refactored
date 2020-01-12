import React from 'react';
import { Route } from 'react-router-dom';
import Headers from './Header';
import Body from './Body';
import Footer from './Footer';
import Step0 from './Step0';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import Step5 from './Step5_sum';


import "../scss/App.scss"

class App extends React.Component{
  render(){
    return (
      <div className="App">
        <Headers />
        <Route exact path="/" component={Body}/>
        <Route path="/step0" component={Step0}/>
        <Route path="/step1" component={Step1}/>
        <Route path="/step2" component={Step2}/>
        <Route path="/step3" component={Step3}/>
        <Route path="/step4" component={Step4}/>
        <Route path="/step5" component={Step5}/>
        <Footer />
      </div>
    )
  }
}

export default App;
