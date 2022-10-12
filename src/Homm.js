import logo from './logo.svg';
import './App.css';
import React from "react";
import AgeComponent from "./AgeComponent";
import students from './name';
import axios from 'axios';




class Homm 
extends React.Component {

  constructor(props){
    super(props);
    this.state={
  
    
      fruitId: "",
      editstudent: "",
      editstudentindex: -1
    };
  }

  componentDidUpdate(){
    console.log("UPDATED")
  }


  onLogout=() =>{
    this.props.changePage("Login");}

  componentDidMount(){
    axios.get("/api/fruit/all").then(res =>{
      this.setState({
        students: res.data.map(fruit => fruit.name)
      })
    })
  }

  handleSearch = () => {
    axios.get('/api/fruit/${this.state.fruitId}'). then (res =>{
        this.setState({
            fruitName:res.data.name
        })
    }).catch(err =>{
        this.setState({
            fruitName:"Not Found"
        })
    })
  }

 render(){
  return (
    <div className="Homm">

        <h2>
        <input
        placeholder='ID'
        value={this.state.fruitId}
        onChange={event => this.setState({fruitId: event.target.value})}
        />

        <button onClick={() => this.setState({fruitId:"",students:this.state.students.concat(this.state.fruitId)})}>Find</button>
        </h2>

        <button onClick={this.onLogout}>Logout
        </button>
    </div>
  );
 }
}

export default Homm;

