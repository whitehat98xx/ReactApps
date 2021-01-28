

import React, {Component} from 'react';
import "./Panel.css"
class Penel extends Component{
    render(){
        return(
            <div className="Panel">
                <h4 className="h4">{this.props.title}</h4>
                <div className="Panel-content">{this.props.children}</div>
            </div>
        )
    };

}
export default Penel;