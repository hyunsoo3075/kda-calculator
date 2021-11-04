import React,{Component} from 'react';
import './Display.css';
class Display extends Component{
    
    render(){
        let {answer}  = this.props;
        return(
            <div>
                <form>
                    <input className = 'textbox' placeholder = 'Kills' type = 'text' defaultValue = {answer}/>
                    
                </form>
                
            </div>
        )
    }
}

export default Display
