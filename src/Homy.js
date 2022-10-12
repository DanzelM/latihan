import logo from './logo.svg';
import './App.css';
import React from "react";
import AgeComponent from "./AgeComponent";
import students from './name';
import axios from 'axios';




class Homy extends React.Component {

  constructor(props){
    super(props);
    this.state={
      name:"KEVIN",
      age:10,
      students : ["Reza Kecap ","Farhan Kebab ","Slamet Kopling "],
      newstudent: "",
      editstudent: "",
      editstudentindex: -1
    };
  }

  componentDidUpdate(){
    console.log("UPDATED")
  }

  componentDidUpdate(){
    console.log("UPDATED")
  }

  addStudents(){
    this.setState({newstudent:" "})
  }

  deleteStudents(index){
    this.setState({students: this.state.students.splice(index,1)})
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
    })
  }

 render(){
  return (
    <div className="Homy">
      <h1>Hello, my name is {this.state.name}</h1>


      <h1> STUDENTS </h1>
        {
            this.state.students.map((student,index) =>{
                if (index === this.state.editstudentindex){
                    return (
                    <li>
                        <input
                            value={this.state.editstudent}
                            onChange={event => this.setState({editstudent:event.target.value})}
                        />
                            <button onClick={() => this.setState({editstudentindex: -1})}> Edit </button>
                    </li>
                    )
            }else{
                return(
                    <li>
                       <p> {student} </p>  
                        <button onClick={() => this.setState({students:this.state.students.filter((s,i) =>
                            i !== index)})}>Delete</button> 
                        <button onClick={() => this.setState({editstudentindex: index,editstudent:student})}> Edit </button>
                    </li>
                )
            } 
            })
        }
       
        <h2>
        <input
        placeholder='new student'
        value={this.state.newstudent}
        onChange={event => this.setState({newstudent: event.target.value})}
      />

        <button onClick={() => this.setState({newstudent:"",students:this.state.students.concat(this.state.newstudent)})}>Add</button>
        </h2>




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

export default Homy;
