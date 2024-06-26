export const getAllTask = async() => {
    const url = 'https://6674179975872d0e0a950e53.mockapi.io/task';
    const options = {
        method: 'GET'
    };
    let res = await fetch(url, options);
    let data = await res.json();
    return data;
}

export const createTask = async (task) => {
    const url = 'https://6674179975872d0e0a950e53.mockapi.io/task';
    const options = {
        method: 'POST',
        headers: {
            'Conten-Type': 'application/json'
        },
        body: JSON.stringify(task)
    };
    let res = await fetch(url, options);
    let data = await res.json();
    return data;
}

export const deletedTask = async (taskId) => {
    const url = `https://6674179975872d0e0a950e53.mockapi.io/taks/${taskId}`;
    const options = {
        method: 'DELETE',
    };
    let res = await fetch(url, options);
    let data = await res.json();
    return data;
}

export const updateTask = async (taskId, task) => {
    const url = `https://6674179975872d0e0a950e53.mockapi.io/task/${taskId}`;
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(task)
    };
    let res = await fetch(url, options);
    let data = await res.json();
    return data;
}

export const getTask = async(taskId) => {
    const url = `https://6674179975872d0e0a950e53.mockapi.io/task/${taskId}`;
    const options = {
        method: 'GET'
    };
    let res = await fetch(url, options);
    let data = await res.json();
    return data;
}