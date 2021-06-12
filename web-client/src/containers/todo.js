import React from 'react'

import { Todo } from '../components';



export default function ToDoContainer(props){

    console.log(props)

    return (

        <>

            <Todo>
                {
                    props.todos.tasksArray ?
                    props.todos.tasksArray.map((todo)=>(
                        <p key={todo.id} style={{color: "white"}}>{todo.content}</p>
                    ))
                    :
                    null
                }
            </Todo>

        </>
    )


}