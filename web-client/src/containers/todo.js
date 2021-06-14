import React, { useState } from 'react'

import { Todo } from '../components';
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function ToDoContainer(props){

    // holds the state of the new value
    const [ newTodo, setNewTodo ] = useState("")


    const removeStyles={
        color: "#EF5354", cursor: "pointer", textAlign: "center"
    }

    const spinnerStyles={
        margin: "250px", color: "white", height: "100px", width: "100px"
    }

    return (

        <>

            <Todo>

                <Todo.NewTaskFrame>
                    <Todo.Input placeholder="Add a todo" onChange={(e)=> setNewTodo(e.target.value)}/>
                    <Todo.Button onClick={(e)=> props.createTask(newTodo)} disabled={newTodo.length > 0 ? false : true}>Add</Todo.Button>
                </Todo.NewTaskFrame>

                {
                    props.todos.tasks ?
                    props.todos.tasks.map((todo, index)=>(
                       
                        <Todo.TaskFrame key={todo.id}>
                            <Todo.TaskItemFrame>
                                <Todo.ContentFrame>
                                    <Todo.CheckBox type="checkbox" checked={todo.completed} onClick={()=>props.toggleCompletion(todo.id)} onChange={()=> null}/>
                                    <Todo.Text completed={todo.completed}>{index+1}.) {todo.content}</Todo.Text>
                                </Todo.ContentFrame>
                                <Todo.RemoveFrame>
                                    <Todo.Text style={removeStyles} onClick={()=>props.removeTask(todo.id)}>Remove</Todo.Text>
                                </Todo.RemoveFrame>
                            </Todo.TaskItemFrame>
                        </Todo.TaskFrame>
                 
                    ))
                    :
                    <FontAwesomeIcon icon={faSpinner} style={spinnerStyles} className={"fa-spin"}/>
                }

            </Todo>

        </>
    )


}