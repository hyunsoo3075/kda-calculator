import React,{Component} from 'react';
import './Display.css';
class Display extends Component{
    
    render(){
        let {answer}  = this.props;
        return(
            <div className="e-disabled">
                <form>
                    <div>
                        <input className = 'textbox' disabled = {true} placeholder = 'Kills' type = 'number' defaultValue = {answer}/>
                    </div>
                    <div>
                        <input className = 'textbox' disabled = {true} placeholder = 'Assists' type = 'number' defaultValue = {answer}/>
                    </div>
                    <div>
                        <input className = 'textbox' disabled = {true} placeholder = 'Deaths' type = 'number' defaultValue = {answer}/>
                    </div>
                </form>
                
            </div>
        )
    }
}

export default Display
