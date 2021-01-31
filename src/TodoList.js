import React , {Component} from 'react';
import Panel from "./Panel"
import PropTypes from "prop-types";
class TodoList extends Component{
    constructor(props){
        super(props);
        this.delTodo = this.delTodo.bind(this);


    }
    delTodo(id){
        
        const newtodo=this.props.todos.filter(a=>a.id!==id);
        this.props.newList(newtodo);
        
    }
    render(){
        let but={
            backgroundColor: "red"
        }

        return(
            
            <Panel title="ToDos">
                <ul className="App-todo">
                    {this.props.todos.map((todo)=>{
                        return(
                            <li key={todo.id}>{todo.title}
                                &nbsp;
                                <button onClick={()=>this.delTodo(todo.id)} style={but}>X</button>
                            </li>
                           
                        );

                    })}
                </ul>

            </Panel>

        );
    }
}
TodoList.propTypes= {

}
export default TodoList;