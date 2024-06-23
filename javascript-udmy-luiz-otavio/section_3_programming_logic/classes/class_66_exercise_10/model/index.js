const newTaskInput = document.querySelector('.newTaskInput');
const buttonNewTask = document.querySelector('.buttonNewTask');
const tasks = document.querySelector('.tasks');

function main () {

    buttonNewTask.addEventListener('click', function () {
        if (!newTaskInput.value) return;
        createTask(newTaskInput.value);
        cleartext();
    })

    newTaskInput.addEventListener('keypress', function (e) {
        if (e.keyCode === 13) {
            if (!newTaskInput.value) return;
            createTask(newTaskInput.value);
            cleartext();

        }
    })
    document.addEventListener('click', function (e) {
        const event = e.target;
        if (event.classList.contains('clear')) {
            event.parentElement.remove();
            saveTasks();
        };
    })
    
    addTasksSave();
}

main();

function addTasksSave () {
    const tasks = localStorage.getItem('taskList');
    const listOfTasks = JSON.parse(tasks)
    
    for (let task of listOfTasks) {
        createTask(task);
    }
}

function saveTasks() {
    const liTask = tasks.querySelectorAll('li');
    const taskList = [];

    for (let task of liTask) {
        let textTask = task.innerText;
        textTask = textTask.replace('Apagar', '').trim();
        taskList.push(textTask);
    }
    const taskJson = JSON.stringify(taskList); //JSON is the text format that we use to save data between systems
    localStorage.setItem('taskList', taskJson);
}

function createButtonClear (li) {
    li.innerText += ' ';
    const clearButton = document.createElement('button');
    clearButton.innerText = 'Apagar';
    // clearButton.classList.add('clear');
    clearButton.setAttribute('class', 'clear');
    li.appendChild(clearButton);

}

function cleartext () {
    newTaskInput.value = '';
    newTaskInput.focus();
}

function createTask (inputText) {
    const li = creatLi();
    li.innerText = inputText;
    tasks.appendChild(li);
    createButtonClear(li);
    saveTasks();
}

function creatLi () {
    const li = document.createElement('li');
    return li;
}