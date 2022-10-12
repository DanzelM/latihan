import logo from './logo.svg';
import './App.css';
import React from "react";
//import AgeComponent from "./AgeComponent";
import students from './name';
import Login from './Login';
import Home from './Home';
import Homy from './Homy';
import Homm from './Homm';



class App extends React.Component {

  constructor(props){
    super(props);
    this.state={
     page: "Login",
    };
  }
 
  changePage = newPage => {
    this.setState({page: newPage});
  }
  
 render(){
  return (
    <div className="App">
      {
        this.state.page == "Login" ?
        <Login changePage={this.changePage} />:
        <Homm changePage={this.changePage}/>
      }
    </div>

    
  );
 }
}

export default App;
