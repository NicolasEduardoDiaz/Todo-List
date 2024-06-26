export const taskList = async (res) =>{
    let plantilla = "";
    res.forEach(element => {
        let clase = element.status === "ready"? "completed" : "";
        plantilla += /*html*/
        `<li class="tasks ${clase}" data-id="${element.id}">
            <span class="todo_item">${element.task}</span>
            <div class="button">
                <a href="" onclick="return false;" class="check-btn">
                </a>
                <a href="" onclick="return false;" class="delete-btn">
                </a>
            </div>
        </li>`;
    });
    return plantilla;
}