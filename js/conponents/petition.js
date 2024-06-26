import { headers } from "./nav.js";

export const getAllTask = async () => {
    console.log("bringing all the tasks...");
    const url = `https://6674179975872d0e0a950e53.mockapi.io/todoList`;
    const config = {
        method: 'GET'
    };

    try{
        let res = await fetch(url, config);

        if(!res.ok) {
            let errorMessage = `something has gone wrong. Try again!`;
            throw new Error(errorMessage);
        }

        let data = await res.json();
        return data;
    } catch (error) {
        console.error('Error with the data:', error.message);
        throw error
    }
};

export const addTask = async (arg) =>{
    console.log("Create a new Task...");
    const url = `https://6674179975872d0e0a950e53.mockapi.io/todoList`;
    const config = {
        method: 'POST',
        headers,
        body: JSON.stringify(arg)
    };

    try {
        let res = await fetch(url, config);

        if(!res.ok) {
            throw new Error(`Error when creating the task.`);
        }

        let data = await res.json();
        return data;
    }catch (error) {
        console.error('Error when creating the task', error.message);
        throw error;
    }
}

export const updateTask = async (arg) => {
    console.log("Updating...");
    const url = `https://6674179975872d0e0a950e53.mockapi.io/todoList`;
    const config = {
        method: 'PUT',
        headers,
        body: JSON.stringify(arg)
    };

    try {
        let res = await fetch(url, config);

        if(!res.ok) {
            let errorMessage = `Erro to update the task.`;
            throw new Error(errorMessage);
        }

        let data = await res.json();
        return data;
    } catch (error) {
        console.error('Erro to update the task:', error.message);
        throw error;
    }
};

export const getTaskById = async (id) => {
    console.log("Search the task...");
    const url = `https://6674179975872d0e0a950e53.mockapi.io/todoList/${id}`;
    const config = {
        method: 'GET',
    };

    try {
        let res = await fetch(url, config);

        if(!res.ok) {
            let errorMessage = `Error to search the task.`;
            throw new Error(errorMessage);
        }

        let data = await res.json();
        return data;
    } catch (error) {
        console.error(`Error at search the task:`, error.message);
        throw error;
    }
};