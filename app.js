const form = document.querySelector('form')
const ul = document.querySelector('ul')
const listItems = document.getElementsByClassName('task')
const taskInput = document.querySelector('input.add')
const searchInput = document.querySelector('input.search')
const p = document.querySelector('p')
let count = 0


const addTask = (e) => {
   e.preventDefault()
   const taskTitle = taskInput.value
   if (taskTitle !== '') {
      const task = document.createElement('li')
      task.className = 'task'
      task.innerHTML = `<div>${taskTitle}</div>` + '<div class="buttons"><button class="check" title="Check"><i class="fas fa-check"></i></button><button class="times" title="Remove task"><i class="fas fa-times"></i></button></div>'
      ul.appendChild(task)
      taskInput.value = ''
      task.querySelector('button.times').addEventListener('click', removeTask)
      task.querySelector('button.check').addEventListener('click', checkBox)
      ++count
      check()
   }
}

const removeTask = (e) => {
   e.target.parentNode.parentNode.remove()
   count--
   check()
}

const searchTask = (e) => {
   let tasks = [...listItems];
   searchText = searchInput.value.toLowerCase();
   if (searchText === "") {
      tasks.forEach(item => item.style.display = "flex");
   } else {
      tasks.forEach(item => item.style.display = "none");
      tasks.filter(item => item.innerText.toLowerCase().includes(searchText)).forEach(item => item.style.display = "flex");
   }
}

const check = () => {
   if (listItems.length > 0) {
      p.textContent = `Number of tasks: ${count}`
      p.style.color = 'black'
   } else {
      p.textContent = 'nothing here...'
      p.style.color = 'gray'
   }
}

const checkBox = (e) => {
   e.target.parentNode.parentNode.classList.toggle('active')
}

searchInput.addEventListener('input', searchTask)

form.addEventListener('submit', addTask)