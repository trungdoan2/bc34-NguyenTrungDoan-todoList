let btnAddTaskEl = document.querySelector('button');
let taskNameEl = document.querySelector('#newTask');

let tasks = getTaskFromLocalStorage();
renderTask(tasks);
btnAddTaskEl.addEventListener('click', () => {
   if (!taskNameEl.value) {
    alert('Vui lòng nhập tên công việc')
    return false
   }

   let tasks = getTaskFromLocalStorage();
   
   tasks.push({ name: taskNameEl.value})
   taskNameEl.value = '';

   localStorage.setItem('tasks', JSON.stringify(tasks))
   renderTask(tasks)
})

function renderTask(tasks = []) {
    let content = '';
     
    tasks.forEach((task,index) => {
        content += `<ul class="todo" id="todo">
          <li class = "task-name">${task.name}
          <button onclick ="deleteTask(${index})">Xoá</button>
          </li>
        
        </ul>`
       })


  document.querySelector('#todo').innerHTML = content;
}

function getTaskFromLocalStorage() {
    return localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];
}

function deleteTask(id) {
     if (confirm('Bạn thực sự muốn xóa')) {
        let tasks = getTaskFromLocalStorage();
        tasks.splice(id, 1)
        localStorage.setItem('tasks', JSON.stringify(tasks))
        renderTask(tasks);
     }
}

