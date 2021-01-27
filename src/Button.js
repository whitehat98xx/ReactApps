import React,{ Component } from "react";

class Button extends Component{

    render(){
        return(
            
    <div className="App">
      <h5>Ich bin ein Button</h5>
      <button>{this.props.label}</button>
    </div>

        );
    }
}
export default Button;