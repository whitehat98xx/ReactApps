import React , {Component} from 'react';
import Panel from "./Panel"

class TodoList extends Component{
    render(){

        return(
            <Panel title="ToDos">
                <ul className="App-todo">
                    {this.props.todos.map((todo)=>{
                        return(
                            <li key={todo.id}>{todo.title}</li>
                        );

                    })}
                </ul>

            </Panel>

        );
    }
}
export default TodoList;