const addBtn = document.getElementById('add-btn')
const taskInput = document.getElementById('task-input')
const taskList = document.getElementById('task-list')

// Load tasks from localStorage when page opens
let tasks = JSON.parse(localStorage.getItem('tasks')) || []
renderTasks()

function renderTasks() {
  taskList.innerHTML = ''
  tasks.forEach(function(task, index) {
    const li = document.createElement('li')
    li.classList.add('task-item')
    if (task.done) li.classList.add('done')

    li.innerHTML = `
      <span>${task.text}</span>
      <button class="delete-btn">✕</button>
    `

    taskList.appendChild(li)

    // Mark done
    const span = li.querySelector('span')
    span.addEventListener('click', function() {
      tasks[index].done = !tasks[index].done
      saveTasks()
      renderTasks()
    })

    // Delete
    const deleteBtn = li.querySelector('.delete-btn')
    deleteBtn.addEventListener('click', function() {
      tasks.splice(index, 1)
      saveTasks()
      renderTasks()
    })
  })
}

function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(tasks))
}

addBtn.addEventListener('click', function() {
  const taskText = taskInput.value
  if (taskText === '') return

  tasks.push({ text: taskText, done: false })
  saveTasks()
  renderTasks()
  taskInput.value = ''
})