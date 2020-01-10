import React from 'react';
import { Route } from 'react-router-dom';
import Headers from './Header';
import Body from './Body';
import Footer from './Footer';
import Step0 from './Step0';
import "../scss/App.scss"

class App extends React.Component{
  render(){
    return (
      <div className="App">
        <Headers />
        <Route exact path="/" component={Body}/>
        <Route path="/step0" component={Step0}/>
        <Footer />
      </div>
    )
  }
}

export default App;
