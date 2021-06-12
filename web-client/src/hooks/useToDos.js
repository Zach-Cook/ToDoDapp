import  { useEffect, useState} from 'react'
import Web3 from 'web3';

// contracts
import todoListContract from '../contract-artifacts/TodoList.json'


export default function useToDos(currentAccount){

    const [ todos, setToDos ] = useState({
        tasks: null,
        tasksArray: null,
        taskCount: null,
    })

    const [ loading, setLoading ] = useState(false)


    useEffect(()=>{
        const web3 = new Web3(window.ethereum)
        async function getData(){

            // get the network id
            const netID = await web3.eth.net.getId()

            const todoList = new web3.eth.Contract(todoListContract.abi, todoListContract.networks[netID].address) 


            const taskCount = await todoList.methods.taskCount().call()
            
            let taskArr = []

            let itterCount = 0

            try {
                while ( itterCount < taskCount){
                    let task = await todoList.methods.tasks(itterCount + 1).call()
                    taskArr.push(task)
                    itterCount++
                }
            } catch (err){
                console.log(err)
            }
            

            const todoCount = await todoList.methods.taskCount().call()
            const tasksArray = await todoList.methods.getTasksArray().call()

            setToDos({tasks: taskArr, tasksArray: tasksArray, taskCount: todoCount})
        }   


        getData()

        return ()=> setToDos(null)
    }, [])

    // this connects with the blockchain and creates the task
    async function createTask(content){
        const web3 = new Web3(window.ethereum)
        const netID = await web3.eth.net.getId()
        const todoList = new web3.eth.Contract(todoListContract.abi, todoListContract.networks[netID].address)
        
        setLoading(true)

        try {
            const createdTask = await todoList.methods.createTask(content).send({from: currentAccount})
            console.log(createdTask)
            setLoading(false)
        } catch (err){
            console.log(err)
            setLoading(false)
        }
        
    }


    async function toggleCompleted(){

    }

    // this will remove the task from the list
    async function removeTask(){

        const web3 = new Web3(window.ethereum)
        const netID = await web3.eth.net.getId()
        const todoList = new web3.eth.Contract(todoListContract.abi, todoListContract.networks[netID].address)

    }


    return { todos, setToDos, createTask, loading}

}