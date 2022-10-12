import './App.css';
import React from "react";



class Students extends React.Component {

  constructor(props){
    super(props);
    this.state={
      students : ["Reza Kecap ","Farhan Kebab ","Slamet Kopling "],
      newstudent: "",
      editstudent: "",
      editstudentindex: -1
    };
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


 render(){
  return (
    <div className="App">
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

      
    </div>
  );
 }
}

export default Students;
