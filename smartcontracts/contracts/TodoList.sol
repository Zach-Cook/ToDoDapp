// SPDX-License-Identifier: MIT
pragma solidity 0.8.4;


contract TodoList {

    // state variables written to blockchain
    uint public taskCount = 0;


    // Task Data Type
    struct Task {
        uint id;
        string content;
        bool completed;
        address user;
    }

    // data structures for holding the tasks
    // using mapping
    mapping(uint => Task) public tasks;
    // using array
    Task[] public tasksArray; 

    // this is an ethereum event for clients
    event TaskCreated(
        uint id,
        string content,
        bool completed
    );



    // creates a task
    function createTask(string memory _content) public {

        taskCount ++;
        // adding to the mapping
        tasks[taskCount] = Task(taskCount, _content, false, msg.sender); 
        // adding to the array
        tasksArray.push(Task(taskCount, _content, false, msg.sender));

        emit TaskCreated(taskCount, _content, false);

    }



    // returns an array of all of the tasks
    function getTasksArray() public view returns(Task[] memory){
        return tasksArray;
    }

    
    constructor() {

        // Create a base task on creation of the contract
        createTask("Check out Zachcook.io");
    }

}