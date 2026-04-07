const addBtn = document.getElementById('add-btn')
const taskInput = document.getElementById('task-input')
const taskList = document.getElementById('task-list')

addBtn.addEventListener('click',function(){
    const taskText = taskInput.value
    
    //don't add empty tasks
    if (taskText === '') return

    //create a new list
    const li = document.createElement('li')
    li.classList.add('task-item')   

    //put html inside it
    li.innerHTML = `
        <span>${taskText}</span>
        <button class="delete-btn">X</button>    
    `

    //add it to the list
    taskList.appendChild(li)

    //clear the input value
    taskInput.value = ''

    //delete button logic
    const deleteBtn = li.querySelector('.delete-btn')
    deleteBtn.addEventListener('click',function(){
        li.remove()
    })

    //click task to mark done
    const span = li.querySelector('span')
    span.addEventListener('click',function(){
        li.classList.toggle('done')
    })
})