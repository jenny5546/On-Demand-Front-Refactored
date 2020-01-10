import React from 'react';
import { Route } from 'react-router-dom';
import Headers from './Header';
import Body from './Body';
import Footer from './Footer';
import Step0 from './Step0';
import Step1 from './Step1';
import Step2 from './Step2';
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
        <Footer />
      </div>
    )
  }
}

export default App;
