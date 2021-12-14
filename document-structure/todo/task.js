const taskList = document.getElementById('tasks__list')
const taskInput = document.getElementById('task__input')
const taskForm = document.getElementById('tasks__form')

function addTask(elem) {
    elem.preventDefault()

    let task = document.createElement('div')

    if(Array.from(taskInput.value).length > 5) {
    task.classList.add('task')
    task.insertAdjacentHTML('afterbegin', "<div class='task__title'></div><a href='#' class='task__remove'>&times;</a>")
    taskList.append(task)

    const taskTitle = document.getElementsByClassName('task__title')
    taskTitle[taskTitle.length - 1].textContent = taskInput.value;

    function removeTask() {
        this.closest('.task').remove();
    }
    let removeElem = document.getElementsByClassName('task__remove');
    removeElem[removeElem.length -1].addEventListener('click', removeTask);

    taskInput.value = '';
}

}

taskForm.addEventListener('submit', addTask)