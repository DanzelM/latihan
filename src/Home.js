import logo from './logo.svg';
import './App.css';
import React from "react";
import AgeComponent from "./AgeComponent";
import students from './name';
import axios from 'axios';




class Home extends React.Component {

  constructor(props){
    super(props);
    this.state={
      name:"KEVIN",
      age:10
    };
  }

  componentDidUpdate(){
    console.log("UPDATED")
  }

  incrementAge(){
    this.setState({age:this.state.age+1})
  }

  decrementAge(){
    this.setState({age:this.state.age-1})
  }

  onLogout=() =>{
    this.props.changePage("Login");}

  

 render(){
  return (
    <div className="home">
      <h1>Hello, my name is {this.state.name}</h1>

      <input
        value={this.state.name}
        onChange={event => this.setState({name: event.target.value})}
      />
        <button onClick={this.onLogout}>Logout
        </button>
    </div>
  );
 }
}

export default Home;
