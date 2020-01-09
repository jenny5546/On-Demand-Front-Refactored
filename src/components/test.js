import React from 'react';
import '../scss/test.scss';

class Test extends React.Component{
  render(){
    return (
      <div className="header">
          <img src="./logo192.png" alt="icon" />    
        <div className="menu"> 
          <p> home </p>
          <p> product </p>
          <p> Membership </p>
          <p> On-Demand </p>
          <p> Partnership </p>
        </div>
      </div>
    )
  }
}

export default Test;