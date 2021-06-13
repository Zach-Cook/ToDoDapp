import React, { useState } from 'react'

import { Todo } from '../components';



export default function ToDoContainer(props){

    // holds the state of the new value
    const [ newTodo, setNewTodo ] = useState("")



    return (

        <>

            <Todo>

                <Todo.NewTaskFrame>
                    <Todo.Input place="Add an item" onChange={(e)=> setNewTodo(e.target.value)}/>
                    <Todo.Button onClick={(e)=> props.createTask(newTodo)}>Add</Todo.Button>
                </Todo.NewTaskFrame>

                {
                    props.todos.tasks ?
                    props.todos.tasks.map((todo, index)=>(
                       
                        <Todo.TaskFrame key={todo.id}>
                            <Todo.TaskItemFrame>
                                <Todo.CheckBox type="checkbox" checked={todo.completed} onClick={()=>props.toggleCompletion(todo.id)}/>
                                <Todo.Text>{index+1}.) {todo.content}</Todo.Text>
                                <Todo.Text style={{color: "#fa314a", cursor: "pointer"}} onClick={()=>props.removeTask(todo.id)}>Remove</Todo.Text>
                            </Todo.TaskItemFrame>
                        </Todo.TaskFrame>
                 
                    ))
                    :
                    null
                }

            </Todo>

        </>
    )


}