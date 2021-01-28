import React , {Component} from 'react';
import Panel from "./Panel"

class TodoAdd extends Component{
    constructor(props){
        super(props);
        this.onTodoAdd = this.onTodoAdd.bind(this);
        this.onTodoInputChange= this.onTodoInputChange.bind(this);

        this.state={
            newTodo:""
        }
    }
    onTodoAdd(){
        this.props.onAdd(this.state.newTodo);

    }
    onTodoInputChange(event){
        
        this.setState({
            newTodo: event.target.value
        })
    }
    render(){
        let button = null;
        if(this.state.newTodo != ""){
           button = <button onClick={this.onTodoAdd}>ADD TODO
            </button>
        }
        return(
            <Panel title="Add Todo">
                <input type="text" onChange={this.onTodoInputChange}
                value={this.state.newTodo}/>
                {button}
            </Panel>

        );
    }

}
export default TodoAdd;