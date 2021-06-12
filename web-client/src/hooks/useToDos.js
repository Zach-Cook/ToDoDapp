import  { useEffect, useState} from 'react'
import Web3 from 'web3';

// contracts
import todoListContract from '../contract-artifacts/TodoList.json'


export default function useToDos(){

    const [ todos, setToDos ] = useState({
        tasks: null,
        tasksArray: null,
        taskCount: null,
    })


    useEffect(()=>{
        const web3 = new Web3(window.ethereum)
        async function getData(){

            // get the network id
            const netID = await web3.eth.net.getId()

            const todoList = new web3.eth.Contract(todoListContract.abi, todoListContract.networks[netID].address) 

            const tasks = await todoList.methods.tasks(1).call()
            const todoCount = await todoList.methods.taskCount().call()
            const tasksArray = await todoList.methods.getTasksArray().call()

            setToDos({tasks: tasks, tasksArray: tasksArray, taskCount: todoCount})
        }   


        getData()

        return ()=> setToDos(null)
    }, [])


    async function createTodo(content){
        const web3 = new Web3(window.ethereum)
        const netID = await web3.eth.net.getId()
        const todoList = new web3.eth.Contract(todoListContract.abi, todoListContract.networks[netID].address)
        
        try {
            const createdTask = await todoList.methods.createTask(content).send()
        } catch (err){
            console.log(err)
        }
        


    }



    return { todos, setToDos}

}