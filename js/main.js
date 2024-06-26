import { getAllTask, addTask, updateTask, getTaskById } from "./components/petition.js";

const works = [];

const container = document.querySelector('.container');
const containerLoading = document.getElementById('onload');

const buttonGotThis = document.querySelector(".Gotthis");
const todoPlaceholderBar = document.querySelector("#todo_placeholder");

const showLoadingScreen = () => {
    containerLoading.style.display = 'flex';
    container.style.display = 'none';
};

const hideLoadingScreen = () => {
    containerLoading.style.display = 'none';
    container.style.display = 'block';
};

const getTarea = () => {
    const resultList = document.getElementById('task_list');
    resultList.innerHTML = works.map((work, index) => /*html*/`
        <li>
            <p class="${work.completado ? 'completed' : ''}">${work.texto}</p>
            <button class="check_button" data-index="${index}">✔️</button>
            <button class="trash_button" data-index="${index}">🗑️</button>
        </li>`
    ).join('');
    addEventListeners();
};

const addTaskToList = async () => {
    const input = document.getElementById('todo_placeholder');
    const newTask = input.value.trim();
    if (newTask) {
        const task = { texto: newTask, completado: false };
        try {
            const addedTask = await addTask(task);
            works.push(addedTask);
            getTarea();
            input.value = '';
        } catch (error) {
            console.error('Error adding task:', error);
        }
    }
};

document.querySelector('.Gotthis').addEventListener('click', addTaskToList);

document.getElementById('todo_placeholder').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTaskToList();
    }
});

document.addEventListener('DOMContentLoaded', async () => {
    showLoadingScreen();
    try {
        const tasks = await getAllTask();
        works.push(...tasks);
        getTarea();
    } catch (error) {
        console.error('Error fetching tasks:', error);
    } finally {
        hideLoadingScreen();
    }
});

const addEventListeners = () => {
    document.querySelectorAll('.check_button').forEach(button => {
        button.addEventListener('click', async (e) => {
            const index = e.target.getAttribute('data-index');
            works[index].completado = !works[index].completado;
            try {
                await updateTask(works[index]);
                getTarea();
            } catch (error) {
                console.error('Error updating task:', error);
            }
        });
    });

    document.querySelectorAll('.trash_button').forEach(button => {
        button.addEventListener('click', async (e) => {
            const index = e.target.getAttribute('data-index');
            const [deletedTask] = works.splice(index, 1);
            try {
                await fetch(`https://6674179975872d0e0a950e53.mockapi.io/todoList/${deletedTask.id}`, { method: 'DELETE' });
                getTarea();
            } catch (error) {
                console.error('Error deleting task:', error);
            }
        });
    });
};
