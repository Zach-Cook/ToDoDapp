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

            let itterCount = 1

            try {
                while ( itterCount <= taskCount){
                    let task = await todoList.methods.tasks(itterCount).call()
                    taskArr.push(task)
                    itterCount++
                }
            } catch (err){
                console.log(err)
            }
            
            // this will return an array which is faster for the client but not better for the contract
            const tasksArray = await todoList.methods.getTasksArray().call()

            setToDos({tasks: taskArr, tasksArray: tasksArray, taskCount: taskCount})
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

            let currentTaskArr = [...todos.tasks]

            // get the values from the smart contract event
            const createdTaskVals = createdTask.events.TaskCreated.returnValues
            // use the event to create a new object to be pushed to the array
            const newData = {id: createdTaskVals.id, content: createdTaskVals.content,  completed: createdTaskVals.completed}
            currentTaskArr.push(newData)
            // set the state
            setToDos({tasksArray: currentTaskArr, tasks: currentTaskArr, taskCount: (todos.taskCount + 1)})

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