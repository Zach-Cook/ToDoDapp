// SPDX-License-Identifier: MIT
pragma solidity 0.8.5;


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
    mapping(uint => Task) public tasks;
    // this is an ethereum event for clients
    event TaskEvent(
        uint id,
        string content,
        bool completed
    );

    // // Data type for storing the users task
    struct User {
        uint id;
        address userAddress; // this will act as a foreign key 
        bool exists;
        uint[] taskIds;
    }
    mapping(address => User) public users;

    




    // creates a task
    function createTask(string memory _content) public {

        // increment the taskCount which is used as the id for each task
        taskCount ++;

        // add the task to the tasks
        tasks[taskCount] = Task(taskCount, _content, false); 

        // if in the users mapping the address is equal to the sender
        // this basically means the user has posted a task before
        if (users[msg.sender].exists == true){
            users[msg.sender].taskIds.push(taskCount);
        } else {
            userCount ++;

            User memory user;
            user.id = userCount;
            user.userAddress = msg.sender;
            user.exists = true;
            users[msg.sender] = user;
            users[msg.sender].taskIds.push(taskCount);
        }
        

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