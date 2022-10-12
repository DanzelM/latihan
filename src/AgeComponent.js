import logo from './logo.svg';
import './App.css';
import React from "react";



class AgeComponent extends React.Component {

  constructor(props){
    super(props);
    this.state={
    };
  }

  componentDidUpdate(){
    console.log("Age Component is UPDATED")
  }
 render(){
  return (
    <div>
      <h2>I am {this.props.age} years old</h2>

    
    <button onClick={() => this.props.incrementAge()}>Increase Age</button>
    <button onClick={() => this.props.decrementAge()}>Decrease Age</button>
    </div>
  );
 }
}

export default AgeComponent;
