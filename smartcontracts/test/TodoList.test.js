const TodoList = artifacts.require("ToDoList.sol")



contract ("TodoList", (accounts)=>{

    

    before(async () =>{
        this.todoList = await TodoList.deployed()
        this.deployer = accounts[0]
        this.testAccount = accounts[1]
    })

    it('deploys successfully', async () =>{
        const address = await this.todoList.address
        assert.notEqual(address, 0x0)
        assert.notEqual(address, '')
        assert.notEqual(address, null)
        assert.notEqual(address, undefined)
    })


    it('lists tasks', async ()=> {
        const taskCount = await this.todoList.taskCount()
        const task = await this.todoList.tasks(taskCount)
        assert.equal(task.id.toNumber(), taskCount.toNumber())
        assert.equal(task.content, "Check out Zachcook.io")
        assert.equal(task.completed, false)
        assert.equal(taskCount.toNumber(), 1)
    })

    it('creates task with different user', async ()=>{
        await this.todoList.createTask(1634034138, 'Testing task', {from: this.testAccount})
        const taskCount = await this.todoList.taskCount()
        const createdTask= await this.todoList.tasks(taskCount)
        assert.equal(createdTask.id.toNumber(), taskCount.toNumber())
        assert.equal(taskCount.toNumber(), 2)
        assert.equal(createdTask.date.toString().length, 10)
        assert.equal(createdTask.content,"Testing task")
    })

    it('checks user', async ()=>{
        const user = await this.todoList.users(this.testAccount)
        const userCount = await this.todoList.userCount()
        const userArray = user.taskIds
        assert.equal(user.id.toNumber(), userCount.toNumber())
    })

    // it('lists current logged in user tasks', async ()=>{

    // })

    it('toggles task completion', async () => {
        const result = await this.todoList.toggleCompleted(1)
        const task = await this.todoList.tasks(1)
        assert.equal(task.completed, true)
        const event = result.logs[0].args
        assert.equal(event.id.toNumber(), 1)
        assert.equal(event.completed, true)
      })

    it('removes a task', async()=>{
        const deletedTask = await this.todoList.removeTask(1)
        const tasks = await this.todoList.tasks(1)
        assert.equal(tasks.length, undefined)
        const event = deletedTask.logs[0].args
        assert.equal(event.id.toNumber(), 1)
    })
})
