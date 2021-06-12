// SPDX-License-Identifier: MIT
pragma solidity 0.8.4;


contract TodoList {

    // state variables written to blockchain
    uint public taskCount = 0;


    // Data Type
    struct Task {
        uint id;
        string content;
        bool completed;
        address user;
    }


    mapping(uint => Task) public tasks;
    Task[] public tasksArray; 

    // creates a task
    function createTask(string memory _content) public {

        taskCount ++;
        tasks[taskCount] = Task(taskCount, _content, false, msg.sender); 
        tasksArray.push(Task(taskCount, _content, false, msg.sender));
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