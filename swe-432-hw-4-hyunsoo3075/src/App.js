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
      input: ""
    }
  }
  
  onClick = button =>{
    if(button === "go"){
      this.setState({input: eval(`${this.state.input} + 5`)});
    }
    else if(button === "reset"){
      this.setState({
        input: ""
      })
    }
    else{
      this.setState({
        input: this.state.input + button
      })
      /* console.log(`${button} was pushed`); */
    }
  }
  render() {
    

    return (
      <div  className="App">
        
          <header className = "App-header">
            <h6><Header title = 'KDA Calculator'/></h6>
            <Display answer = {this.state.input}/>
            <Keypad onClick = {this.onClick} />
            
            
          </header>
          
      </div>
      );    
  }
}


export default App;
