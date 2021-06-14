import  { useEffect, useState, useContext} from 'react'
import Web3 from 'web3';

// context
import { UserContext } from '../context/user';

// contracts
import todoListContract from '../contract-artifacts/TodoList.json'


export default function useToDos(){


    const { userState, currentChainID } = useContext(UserContext)


    const [ todos, setToDos ] = useState({
        tasks: null,
        taskCount: null,
    })

    const [ loading, setLoading ] = useState(false)
    const [ errors, setErrors ] = useState()


    // when the currentChainID state from the userContext changes this will re-fire
    useEffect(()=>{
        setErrors(null)
        const web3 = new Web3(window.ethereum)
        async function getData(){

            // get the network id
            const netID = await web3.eth.net.getId()
            console.log(netID)
            // this handles the chain id
            // currently if not on test net then this will cleanup the hook
            let todoList;
            let taskCount;
            if (netID === 5777){
                console.log('loading')
                todoList = new web3.eth.Contract(todoListContract.abi, todoListContract.networks[netID].address) 
                taskCount = await todoList.methods.taskCount().call()
            } else {
                console.log('not loading')
                setLoading(false)
                setErrors("Switch to the Ganache Chain")
            }

            
            

            // looping over the the itter count to get the mapping for the existing item
            let taskArr = []
            let itterCount = 1 
            try {
                while ( itterCount <= taskCount){
                    let task = await todoList.methods.tasks(itterCount).call()
                    if (task.id !== "0"){
                        taskArr.push(task)
                    }
                    itterCount++
                }
            } catch (err){
                console.log(err)
            }
            setToDos({tasks: taskArr, taskCount: taskCount})
            setLoading(false)
        }   

        if(userState){
            getData()
        }
        

        // when unmount
        return ()=> {
            setLoading(true)
            setToDos({
                tasks: [],
                taskCount: null,
            })
        }

    }, [currentChainID, userState])

    // this connects with the blockchain and creates the task
    async function createTask(content){
        const web3 = new Web3(window.ethereum)
        const netID = await web3.eth.net.getId()
        const todoList = new web3.eth.Contract(todoListContract.abi, todoListContract.networks[netID].address)
        
        setLoading(true)

        try {
            const createdTask = await todoList.methods.createTask(content).send({from: userState.account})

            let currentTaskArr = [...todos.tasks]

            // get the values from the smart contract event
            const createdTaskVals = createdTask.events.TaskCreated.returnValues
            // use the event to create a new object to be pushed to the array
            const newData = {id: createdTaskVals.id, content: createdTaskVals.content,  completed: createdTaskVals.completed}
            currentTaskArr.push(newData)
            // set the state
            setToDos({tasks: currentTaskArr, taskCount: (todos.taskCount + 1)})

            setLoading(false)
        } catch (err){
            console.log(err)
            setLoading(false)
        }
        
    }

    // toggles the check mark on the completed
    async function toggleCompletion(id){

        const web3 = new Web3(window.ethereum)
        const netID = await web3.eth.net.getId()
        const todoList = new web3.eth.Contract(todoListContract.abi, todoListContract.networks[netID].address)
        let currentTaskArr = [...todos.tasks]

        try {
            
            const completed = await todoList.methods.toggleCompleted(id).send({from: userState.account})
            // get the values from the smart contract event
            const completedTaskVals = completed.events.TaskCompleted.returnValues
            // use the event to create a new object to be pushed to the array
            const newData = {id: completedTaskVals.id, content: completedTaskVals.content,  completed: completedTaskVals.completed}

            const indexOfItem = currentTaskArr.map(task => task.id).indexOf(newData.id);
            currentTaskArr[indexOfItem] = newData

            setToDos({...todos, tasks: currentTaskArr})
            // need to update client state
            setLoading(false)
        } catch (err){
            setLoading(false)
            console.log(err)
        }

    }

    // this will remove the task from the list
    async function removeTask(id){

        const web3 = new Web3(window.ethereum)
        const netID = await web3.eth.net.getId()
        const todoList = new web3.eth.Contract(todoListContract.abi, todoListContract.networks[netID].address)
        let currentTaskArr = [...todos.tasks]

        try {

            const deletedTask = await todoList.methods.removeTask(id).send({from: userState.account})
            const indexArray = currentTaskArr.map(e => e.id)
            const indexOfItem = indexArray.indexOf(id.toString());
            currentTaskArr.splice(indexOfItem, 1)
            setToDos({...todos, tasks: currentTaskArr})

        } catch (err){
            console.log(err)
        }
        

    }


    return { todos, setToDos, createTask, removeTask, toggleCompletion, loading, errors}

}
