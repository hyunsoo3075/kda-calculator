import React,{Component} from 'react';
import './Display.css';
class Display extends Component{
    /**NOT IMPORTANT IGNORE */
    render(){
        let {kills}  = this.props.kills;
        let {deaths} = this.props.deaths;
        let {assists} = this.props.assists;
        return(
            <div >
                <form>
                    <div>
                        <input className = 'kills'  placeholder = 'Kills' type = 'number' defaultValue = {kills}/>
                    </div>
                    <div>
                        <input className = 'assists' placeholder = 'Assists' type = 'number' defaultValue = {assists}/>
                    </div>
                    <div>
                        <input className = 'deaths' placeholder = 'Deaths' type = 'number' defaultValue = {deaths}/>
                    </div>
                </form>
                
            </div>
        )
    }
}

export default Display
