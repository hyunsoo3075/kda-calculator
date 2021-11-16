import React, { Component, useState} from 'react';
import './App.css';
import Keypad from './components/Keypad';
import Header from './components/Header';
import Answer from './components/Answer';
import Display from './components/Display';

//import logo from './logo.svg';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      focus:null,
      kills: "",
      deaths: "",
      assists: "",
      answer: "0"
    };
    this.onClick = this.onClick.bind(this);

  }
  /*handleChange = event=>{
    this.setState({kills: event.target.value})
    console.log('kills has changed')
  }*/
  /*changes the text input focus state */
  handleFocus = e =>{
    this.setState({
      focus:e
    })

  }
 /**click handler */
  onClick = button =>{
    /**handles the go button */
    if(button === "go"){
      if(this.state.kills === "" || this.state.deaths === "" || this.state.assists === "" ){
        alert("fill out all the fields")
      }
      else{
        this.setState({
          answer: eval(`(${this.state.kills} + ${this.state.assists})/${this.state.deaths}`)
        });
      }
      
    }
    /**resets the forms */
    else if(button === "reset"){
      this.setState({
        focus:null,
        kills: "",
        deaths: "",
        assists: "",
        answer: "0"

      })
    }
    /**clears input boxes */
    else if(button === "clear1"){
      this.setState({
        kills: ""
      })
    }
    else if(button === "clear2"){
      this.setState({
        assists: ""
      })
    }
    else if(button === "clear3"){
      this.setState({
        deaths: ""
      })
    }
    else{ /* this means were now working with rest of the buttons (numbers only)*/
      /* have if statements here based on current focus*/
      if(this.state.focus === null){
        void(0)
      }
      else if (this.state.focus === "kills"){
        this.setState({
          kills: this.state.kills + button
        })

      }
      else if (this.state.focus === "deaths"){
        this.setState({
          deaths: this.state.deaths + button
        })
      }
      else{
        this.setState({
          assists: this.state.assists + button
        })
      }
      /* console.log(`${button} was pushed`); */
    }
  }
  render() {
    

    return (

      <div  className="App">
        
          <header className = "App-header">
            <Header title = 'KDA Calculator'/>
            <div >
              <div className = "clear">
                <button name = "clear1" onClick={button =>this.onClick(button.target.name)}>clear</button>
                <br />
                <button name = "clear2" onClick={button =>this.onClick(button.target.name)}>clear</button>
                <br />
                <button name = "clear3" onClick={button =>this.onClick(button.target.name)}>clear</button>
              </div>  

                {/* display.js but due to bug, just brought it out into main */}
                <form>
                    <div>
                      
                        <input 
                        className = 'kills' 
                        placeholder = 'Kills' 
                        type = 'text' 
                        onFocus = {(e) => this.handleFocus("kills")}
                        onChange = {(text) => this.onClick(text)}
                        defaultValue = {this.state.kills}/>
                    </div>
                    <div>

                        <input 
                        className = 'assists' 
                        placeholder = 'Assists' 
                        type = 'text' 
                        onFocus = {(e) => this.handleFocus("assists")}
                        onChange = {this.onClick}
                        defaultValue = {this.state.assists}/>
                    </div>
                    <div>
                        <input 
                        className = 'deaths' 
                        placeholder = 'Deaths' 
                        type = 'text' 
                        onFocus = {(e) => this.handleFocus("deaths")}
                        onChange = {this.onClick}
                        defaultValue = {this.state.deaths}/>
                    </div>
                </form>
                
            </div>
            <Answer answer = {this.state.answer}/>
            <Keypad onClick = {this.onClick} />
            
            
          </header>
          
      </div>
      );    
  }
}


export default App;
