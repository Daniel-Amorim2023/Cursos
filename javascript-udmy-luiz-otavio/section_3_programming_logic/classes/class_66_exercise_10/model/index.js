function main () {
    const newTaskInput = document.querySelector('.newTaskInput')
    const buttonNewTask = document.querySelector('.buttonNewTask')
    const tasks = document.querySelector('.tasks')

    buttonNewTask.addEventListener('click', function () {
        if (!newTaskInput.value) return '';
        console.log(newTaskInput.value)
    })
}

main();