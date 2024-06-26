export const getAllTask = async () => {
    const url = 'https://6677385c145714a1bd742329.mockapi.io/todoList';
    const options = {
      method: 'GET'
    };
    let res = await fetch(url, options);
    let data = await res.json();
    return data;
  }
  
  export const createTask = async (task) => {
    const url = 'https://6677385c145714a1bd742329.mockapi.io/todoList';
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(task)
    };
    let res = await fetch(url, options);
    let data = await res.json();
    return data;
  }
  
  export const deleteTask = async (taskId) => {
    const url = `https://6677385c145714a1bd742329.mockapi.io/todoList/${taskId}`;
    const options = {
      method: 'DELETE'
    };
    let res = await fetch(url, options);
    let data = await res.json();
    return data;
  }
  
  export const updateTask = async (taskId, task) => {
    const url = `https://6677385c145714a1bd742329.mockapi.io/todoList/${taskId}`;
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
  
  export const getTask = async (taskId) => {
    const url = `https://6677385c145714a1bd742329.mockapi.io/todoList/${taskId}`;
    const options = {
      method: 'GET'
    };
    let res = await fetch(url, options);
    let data = await res.json();
    return data;
  }