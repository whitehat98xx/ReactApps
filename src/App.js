import React ,{ Component } from "react";

import Panel from "./Panel";
import './App.css';
import Button from "./Button";
//importing components
class App extends Component{

  constructor(props){
    super(props);
  this.state={
    name:"Welt"
  }
  this.changeName= this.changeName.bind(this);
}
changeName(){
  this.setState({
    name:"Nick"
  })
}
  render(){
   return (
    <div className="App">
      <div>
      <h1>Welcome to React</h1>
      </div>
    
      <h2>Hallo {this.state.name}</h2>
      <Panel title="Überschrift" content="Test1234">
        <button onClick={this.changeName}>Click Me</button>
      </Panel>
    </div>
    
   
    
  );
  }
}

export default App; //nach aussen zur verfügunf
