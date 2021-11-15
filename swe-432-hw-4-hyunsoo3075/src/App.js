import React, { Component, useState} from 'react';
import './App.css';
import Keypad from './components/Keypad';
import Header from './components/Header';
import Display from './components/Display';
//import logo from './logo.svg';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      kills: "",
      deaths: "",
      assists: ""
    }
  }
  handleChange = event=>{
    this.setState({kills: event.target.value})
  }
  onClick = button =>{
    if(button === "go"){
      this.setState({kills: eval(`${this.state.kills} + 5`)});
    }
    else if(button === "reset"){
      this.setState({
        kills: "",
        deaths: "",
        assists: ""

      })
    }
    else{
      this.setState({
        kills: this.state.kills + button
      })
      /* console.log(`${button} was pushed`); */
    }
  }
  render() {
    

    return (
      <div  className="App">
        
          <header className = "App-header">
            <h6><Header title = 'KDA Calculator'/></h6>
            <Display answer = {this.state.kills} onChange={handleChange}/>
            <Keypad onClick = {this.onClick} />
            
            
          </header>
          
      </div>
      );    
  }
}


export default App;
