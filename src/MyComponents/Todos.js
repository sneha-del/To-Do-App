import React from 'react'
import './footer.css'
import {TodoItem} from "../MyComponents/TodoItem";
export const Todos = (props) => {
    return (
        <div className="container">
           <h3 className="text-center  my-3">Todo List</h3>

           {props.todos.length==0? "You have no more To-Do for today":
           props.todos.map((todo) => {
              return(
              <>
              <TodoItem todo={todo} key={todo.sno} onDelete
              ={props.onDelete}/> <hr/>
              </>
              )
           })
            }
            
           
        </div>
    )
}
