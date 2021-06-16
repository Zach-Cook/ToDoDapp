import  { useEffect, useState, useContext} from 'react'

// context
import { UserContext } from '../context/user';

// contracts
import todoListContract from '../contract-artifacts/TodoList.json'

// helper
import getNetwork from '../helper/getnework'

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
        async function getData(){
            const { todoList, chainName } = await getNetwork(todoListContract)

            if (todoList){
                let taskCount = await todoList.methods.taskCount().call()
                // getting the users to do list ids and then making calls based off of that
                const usersTodolistIds = await todoList.methods.getUserTasks().call({from: userState.account})
                // looping over the the itter count to get the mapping for the existing item
                let taskArr = []
                try {
                    for (let i = 0; i<usersTodolistIds.length; i++){
                        let task = await todoList.methods.tasks(usersTodolistIds[i]).call()
                        if (task.id !== "0"){
                            taskArr.push(task)
                        }
                    }
                } catch (err){
                    console.log(err)
                }
                setToDos({tasks: taskArr, taskCount: taskCount})
                setLoading(false) 
            } else {
                setErrors(chainName)
            }
            
        }   

        // if the user is logged in the get the data
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
    // anytime the chain id or the state of the user changes then re-run this component
    }, [currentChainID, userState])

    // this connects with the blockchain and creates the task
    async function createTask(content){

        const { todoList, chainName } = await getNetwork(todoListContract)

        if (todoList){
            setLoading(true)
            try {
                const createdTask = await todoList.methods.createTask(content).send({from: userState.account})

                let currentTaskArr = [...todos.tasks]

                // get the values from the smart contract event
                const createdTaskVals = createdTask.events.TaskEvent.returnValues
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
        } else {
            setErrors(chainName)
        }
        
        
        
        
    }

    // toggles the check mark on the completed
    async function toggleCompletion(id){

        const { todoList, chainName } = await getNetwork(todoListContract)

        if(todoList){
            let currentTaskArr = [...todos.tasks]
            try {
                
                const completed = await todoList.methods.toggleCompleted(id).send({from: userState.account})
                // get the values from the smart contract event
                const completedTaskVals = completed.events.TaskEvent.returnValues
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
        } else {
            setErrors(chainName)
        }
        

    }

    // this will remove the task from the list
    async function removeTask(id){

        const { todoList, chainName } = await getNetwork(todoListContract)

        if(todoList){
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
        } else {
            setErrors(chainName)
        }
        
        

    }


    return { todos, setToDos, createTask, removeTask, toggleCompletion, loading, errors}

}
