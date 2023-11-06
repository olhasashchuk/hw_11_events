// 1. Завдання Переход на сторінку
document.addEventListener('DOMContentLoaded', () => {
    const setWebsite = document.querySelector('.link');
    const goToWebsite = document.querySelector('.site');
    let websiteLink;

    setWebsite.addEventListener('click', () => {
        websiteLink = prompt('Enter website link');
    });

    goToWebsite.addEventListener('click', () => {
        if (websiteLink) {
            document.location.href = websiteLink;
        } else {
            alert('Please set a website link first.');
        }
    });
});

// 2. Завдання. Використання подій
const buttonClick = document.querySelector('.js--buttonParent')
buttonClick.addEventListener('click', function (event) {
    let target = event.target;
    switch (true) {
        case target.classList == 'js--button1':
            alert ('Click by button: Button 1')
            break
        case target.classList == 'js--button2':
            alert ('Click by button: Button 2')
            break;
        case target.classList == 'js--button3':
            alert ('Click by button: Button 3')
    }
})

// 3. TO-DO лист

const getTask = document.querySelector('.js--but-add')
const textTask = document.querySelector('.js--text-task') //input value
const list = document.querySelector('.js--task-list')

function creatTask () {
    const task = document.createElement('li')
    list.appendChild(task)

    const text = document.createElement('p')
    text.innerText = textTask.value;
    task.appendChild(text);

    const delBut = document.createElement('button');
    delBut.innerText = 'Delete';
    task.appendChild(delBut);
}

getTask.addEventListener('click', creatTask)

list.addEventListener('click', function (event) {
    if (event.target.tagName === 'BUTTON') {
        const task = event.target.parentElement;
        list.removeChild(task);
    }
});






