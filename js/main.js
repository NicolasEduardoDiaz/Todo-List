import { taskList } from "./conponents/list.js";
import { createTask, deletedTask, getAllTask, getTask, updateTask } from "./module/app.js";

const taskListItems = document.querySelector(".task_listItems");
const addTaskButton = document.querySelector(".add_task");
const taskInput = document.querySelector("#task_input")
const date = document.querySelector(".date");

const taskUpdatedEvent = new Event('taskUpdated');

setInterval(() => {
    date.innerHTML = /*html*/
    `<p clase="fecha">${new Date().toLocaleDateString()}, ${new Date().toLocaleDateString()}</p>`;
}, 1000);

let updateTaskList = async () => {
    const data = await getAllTask();
    taskListItems.innerHTML = await taskList(data);
}

updateTaskList();

addTaskButton.addEventListener("click", async (e) => {
    e.preventDefault();
    const newTask = { task: taskInput.value, status: "On hold"};
    taskInput.value = null;
    await createTask(newTask);
    document.dispatchEvent(taskUpdatedEvent);
});

taskListItems.addEventListener("click", (e) => {
    if(e.target.classList.contains("delete_btn")) {
        const taskId = e.target.parentNode.parentNode.dataset.id;
        console.log(taskId);
        deletedTask(taskId).then((data) => {
            console.log(data);
            document.dispatchEvent(taskUpdatedEvent);
        });
    }
});

taskListItems.addEventListener("click", async (e) => {
    if (e.target.classList.contains("check_btn")) {
        const taskId = e.target.parentNode.parentNode.dataset.id;
        const task = await getTask(taskId);
        const newStatus = task.status === "On hold"? "ready" : "On hold";
        const updateTask = { status: newStatus };
        await updateTask(taskId, updateTask).then((data) => {
            console.log(data);
            document.dispatchEvent(taskUpdatedEvent)
        });
    }
});

document.addEventListener('taskUpdated', updateTaskList);