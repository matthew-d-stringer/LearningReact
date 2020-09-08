import React from 'react';
import ReactDOM from 'react-dom';
import Car from './App';

class Garage extends React.Component{
  render(){
    return (
      <div>
        <h1>Who lives in my Garage</h1>
        <Car brand="Ford" />
      </div>
    )
  }
}


ReactDOM.render(<Garage />, document.getElementById('root'));