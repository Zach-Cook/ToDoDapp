import React from 'react'

import { Todo } from '../components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRemove } from '@fortawesome/free-solid-svg-icons'


export default function ToDoContainer(props){

    console.log(props)

    return (

        <>

            <Todo>

                <Todo.NewTaskFrame>
                    <Todo.Input place="Add an item"/>
                    <Todo.Button>Add</Todo.Button>
                </Todo.NewTaskFrame>

                {
                    props.todos.tasksArray ?
                    props.todos.tasksArray.map((todo, index)=>(
                       
                        <Todo.TaskFrame key={todo.id}>
                            <Todo.TaskItemFrame>
                                <Todo.CheckBox type="checkbox"/>
                                <Todo.Text>{index+1}.) {todo.content}</Todo.Text>
                                <Todo.Text style={{color: "#fa314a", cursor: "pointer"}} >Remove</Todo.Text>
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