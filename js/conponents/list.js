export const taskList = async (res) =>{
    let plantilla = "";
    res.forEach(element => {
        let clase = element.status === "ready"? "completed" : "";
        plantilla +=/*html*/`
        <li class="tasks ${clase}" data-id="${element.id}">
            <span class="todo__item">${element.task} </span>
            <div class="buttons">
                <a href="" onclick="return false;" class="check__btn">
                </a>
                <a href="" onclick="return false;" class="delete__btn">
                </a>
            </div>
        </li>
        `;
    });
    return plantilla;
}
