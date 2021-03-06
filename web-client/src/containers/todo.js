import React from 'react'

import { Todo } from '../components';
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function ToDoContainer({ todos, createTask, toggleCompletion, removeTask, loading, errors, newTodo, setNewTodo } ){

    

    const removeStyles={
        color: "#EF5354", cursor: "pointer", textAlign: "center"
    }

    const spinnerStyles={
        margin: "250px", color: "white", height: "100px", width: "100px"
    }

    return (

        <>

            <Todo >
                <Todo.NewTaskFrame>
                    <Todo.Input placeholder="Add a todo" onChange={(e)=> setNewTodo(e.target.value)} value={newTodo}/>
                    <Todo.Button onClick={(e)=> createTask(newTodo)} disabled={newTodo.length > 0 ? false : true}>Add</Todo.Button>
                </Todo.NewTaskFrame>
                
                {
                    todos.tasks && !loading && !errors?
                    todos.tasks.map((todo, index)=>(
                       
                        <Todo.TaskFrame key={todo.id}>
                            <Todo.TaskItemFrame>
                                <Todo.ContentFrame>
                                    <Todo.CheckBox type="checkbox" checked={todo.completed} onClick={()=>toggleCompletion(todo.id)} onChange={()=> null}/>
                                    <Todo.Text completed={todo.completed}>{`${index+1}.) ${todo.content}`}</Todo.Text>
                                </Todo.ContentFrame>
                                <Todo.RemoveFrame>
                                    <Todo.Text style={removeStyles} onClick={()=>removeTask(todo.id)}>Remove</Todo.Text>
                                </Todo.RemoveFrame>
                            </Todo.TaskItemFrame>
                        </Todo.TaskFrame>
                 
                    ))
                    :
                    <FontAwesomeIcon icon={faSpinner} style={spinnerStyles} className={"fa-spin"}/>
                }

                {/* This handles if the user has no todos created yet */}
                {
                    todos.tasks && todos.tasks.length === 0 && !loading ?
                    <Todo.Text>You have 0 Todo's. Add to the list!</Todo.Text>
                    :
                    null
                }


            </Todo>

        </>
    )


}