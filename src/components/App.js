import React from 'react';
import Headers from './Header';
import Body from './Body';
import Footer from './Footer';
import "../scss/App.scss"

class App extends React.Component{
  render(){
    return (
      <div className="App">
        <Headers />
        <Body />
        <Footer />
      </div>
    )
  }
}

export default App;
