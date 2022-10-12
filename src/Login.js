import logo from './logo.svg';
import './App.css';
import React from "react";
import Students from "./name";
import Homy from './Homy';

class Login extends React.Component {

  constructor(props){
    super(props);
    this.state={
        password: "",
        username:"",
        errormessage:""
    };
  }

 onLogin=() =>{
    if(this.state.username === "koden" && this.state.password === "gantenk"){
        this.props.changePage("Homy");
    }
    else{
        this.setState({errormessage:"Wrong Username or Password"});
    }
 }

render(){
    return (
        <div>
            <div>
                <label> UserName </label>
                <input
                    value={this.state.username}
                    onChange={event => this.setState({username: event.target.value})} 
                />
            </div>
            <div>
                <label> Password </label>
                <input 
                    type="password"
                    value={this.state.password}
                    onChange={event => this.setState({password: event.target.value})}
                />
            </div>
            {
                this.state.errormessage !== ""?
                <lable>{this.state.errormessage}</lable>: null
            }
            <button onClick={this.onLogin}>Submit</button>
        </div>
    );
}
}


export default Login;
