import { ADD_TODO, DELETE_TODO, EDIT_TODO, COMPLETE_TODO, COMPLETE_ALL, CLEAR_COMPLETED } from './todoTypes';

export const addTodo = (text) => {
    return {
        type: ADD_TODO,
        payload: text
    }
};

export const deleteTodo = (id) => {
    return {
        type: DELETE_TODO,
        payload: id
    }
};

export const completeTodo = (id) => {
    return {
        type: COMPLETE_TODO,
        payload: id
    }
};

export const completeAll = () => {
    return {
        type: COMPLETE_ALL
    }
};

export const clearCompleted = () => {
    return {
        type: CLEAR_COMPLETED
    }
};