// SPDX-License-Identifier: MIT
pragma solidity 0.8.4;


contract TodoList {

    // state variables written to blockchain
    uint public taskCount = 0;
    uint public userCount = 0;

    // Task Data Type
    struct Task {
        uint id;
        string content;
        bool completed;
    }

    // // Data type for storing the users task
    struct User {
        address userAddress; // this will act as a foreign key 
        uint id;
        Task[] tasksArray;
    }

    // keep mapping of users
    mapping(address => User) public users;
    // data structures for holding the tasks
    // using mapping
    mapping(uint => Task) public tasks;
    


    // this is an ethereum event for clients
    event TaskEvent(
        uint id,
        string content,
        bool completed
    );


    // creates a task
    function createTask(string memory _content) public {

        taskCount ++;
        // adding to the mapping
        tasks[taskCount] = Task(taskCount, _content, false); 

        // if in the users mapping the address is equal to the sender
        // this basically means the user has posted a before
        // if (users[msg.sender].userAddress == msg.sender){
        //     users[msg.sender].tasksArray.push(Task(taskCount, _content, false));
        // } else {
             
        //     userCount ++;
        //     // Task[] taskArr = [];
        //     User(msg.sender, userCount, Task(taskCount, _content, false));
        // }
        

        emit TaskEvent(taskCount, _content, false);

    }

    function removeTask(uint _id) public {

        Task memory _task = tasks[_id];

        delete(tasks[_id]);

        emit TaskEvent(_id, _task.content, _task.completed);
    }


    // toggles completion of the task
    function toggleCompleted(uint _id) public {

        Task memory _task = tasks[_id];
        // toggle by turning it to the opposite
        _task.completed = !_task.completed;
        tasks[_id] = _task;

        emit TaskEvent(_id, _task.content, _task.completed);
    }
 
    constructor() {

        // Create a base task on creation of the contract
        createTask("Check out Zachcook.io");
    }

}