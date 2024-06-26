import { taskList } from "./components/list.js";
import { createTask, deleteTask, getAllTask, getTask, updateTask } from "./module/app.js";

// Selección de elementos del DOM
const taskListItems = document.querySelector(".task__list__items");
const addTaskButton = document.querySelector(".add__task__button");
const taskInput = document.querySelector("#task__input");
const date = document.querySelector(".date");

// Evento personalizado
const taskUpdatedEvent = new Event('taskUpdated');

// Renderizado de fecha y hora
setInterval(() => {
  date.innerHTML = /*html*/`
    <p class="fecha">${new Date().toLocaleDateString()}, ${new Date().toLocaleTimeString()}</p>
  `;
}, 1000); // actualiza cada 1 segundo

// Función para actualizar la lista de tareas
let updateTaskList= async () =>{
  const data = await getAllTask();
  taskListItems.innerHTML = await taskList(data);
}

// Inicialización
updateTaskList();

// Evento click del botón "Agregar tarea"
addTaskButton.addEventListener("click", async (e) => {
  e.preventDefault();
  const newTask = { task: taskInput.value, status: "On hold" };
  taskInput.value = null;
  await createTask(newTask);
  document.dispatchEvent(taskUpdatedEvent);
});

// Evento click del botón "Borrar tarea"
taskListItems.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete__btn")) {
      const taskId = e.target.parentNode.parentNode.dataset.id;
      console.log(taskId);
      deleteTask(taskId).then((data) => {
        console.log(data);
        document.dispatchEvent(taskUpdatedEvent);
      });
    }
});

// Evento click del botón "Checkear tarea"
taskListItems.addEventListener("click", async (e) => {
  if (e.target.classList.contains("check__btn")) {
    const taskId = e.target.parentNode.parentNode.dataset.id;
    const task = await getTask(taskId); // obtener el task actual
    const newStatus = task.status === "On hold"? "ready" : "On hold";
    const updatedTask = { status: newStatus };
    await updateTask(taskId, updatedTask).then((data) => {
      console.log(data);
      document.dispatchEvent(taskUpdatedEvent);
    });
  }
});

// Listener para el evento taskUpdated
document.addEventListener('taskUpdated', updateTaskList);