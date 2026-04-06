const addBtn = document.getElementById('add-btn')
const taskInput = document.getElementById('task-input')
const taskList = document.getElementById('task-list')

addBtn.addEventListener('click',function(){
    const taskText = taskInput.value
    console.log(taskText)
})