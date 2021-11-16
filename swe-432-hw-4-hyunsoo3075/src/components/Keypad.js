import React, {Component}from 'react';
import './keypad.css';
class Keypad extends Component{
    // keypads
    render(){
        return (
            <div className = "container">
                <div className = "keypad">
                    
                    <button name = "1" onClick={e =>this.props.onClick(e.target.name)}>1</button>
                    <button name = "2" onClick={e =>this.props.onClick(e.target.name)}>2</button>
                    <button name = "3" onClick={e =>this.props.onClick(e.target.name)}>3</button>
                    <button name = "4" onClick={e =>this.props.onClick(e.target.name)}>4</button>
                    <button name = "5" onClick={e =>this.props.onClick(e.target.name)}>5</button>
                    <button name = "6" onClick={e =>this.props.onClick(e.target.name)}>6</button>
                    <button name = "7" onClick={e =>this.props.onClick(e.target.name)}>7</button>
                    <button name = "8" onClick={e =>this.props.onClick(e.target.name)}>8</button>
                    <button name = "9" onClick={e =>this.props.onClick(e.target.name)}>9</button>
                    <button name = "0" onClick={e =>this.props.onClick(e.target.name)}>0</button>
                    <button className = "go" name = "go" onClick={e =>this.props.onClick(e.target.name)}>go</button>
                    <button name = "reset" onClick={e =>this.props.onClick(e.target.name)}>reset</button>
                    
                </div>
            </div>
        )
    }
}

export default Keypad;


