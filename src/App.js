import React ,{ Component } from "react";

import Panel from "./Panel";
import './App.css';
import Button from "./Button";
import TodoList from "./TodoList";
import TodoAdd from "./TodoAdd";
//importing components
class App extends Component{

  constructor(props){
    super(props);
  this.state={
    todos:[
      
    ]
  }
  //this.changeName= this.changeName.bind(this);
  //this.counter= this.counter.bind(this);
  this.addTodo = this.addTodo.bind(this);
  this.deleteTodo = this.deleteTodo.bind(this);
}
/*changeName(){
  this.setState({
    name:"Nick",
    
  })
}
counter(){
  let c = this.state.count;
    c = c +1;
  this.setState({
    
    count: c
  })
}*/
deleteTodo(ntodo){
  
  this.setState({
    todos: ntodo
  })
}
addTodo(title){
  let d = this.state.todos;
  let maxId = 0;//id im state wichtig da sont react nach jeder änderung alles löscht und wieder anlegt
  for(let t of d){
    if(t.id > maxId){
      maxId=t.id;
    }
  }
  d.unshift({id:{maxId}, title: title});
  this.setState({
    todos: d
  })


}
  render(){
   return (
    <div className="App">
      
      <h1>Enzo's Todo List</h1>
      <TodoList newList={this.deleteTodo}todos={this.state.todos}/>
    
      
      <TodoAdd onAdd={this.addTodo}/>
    </div>
    );
  }
}

export default App; //nach aussen zur verfügunf
