import { ADD_TODO, DELETE_TODO, EDIT_TODO, COMPLETE_TODO, COMPLETE_ALL, CLEAR_COMPLETED } from './todoTypes';

const initialState = {
    todos: [
        {
            text: 'Use Redux',
            completed: false,
            id: 0,
        },
        {
            text: 'Learn to connect it to React',
            completed: false,
            id: 1
        }
    ]
};

// Explain the reducer function
// The reducer function is a pure function that takes the previous state and an action, and returns the next state.
// (previousState, action) => newState
// It's called a reducer because it's the type of function you would pass to Array.prototype.reduce(reducer, ?initialValue).
// It's very important that the reducer stays pure. Things you should never do inside a reducer:
// Mutate its arguments;
// Perform side effects like API calls and routing transitions;
// Call non-pure functions, e.g. Date.now() or Math.random().

// Explain the Array.prototype.reduce(reducer, ?initialValue).
// The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {
                        id: state.todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
                        completed: false,
                        text: action.payload.text
                    }
                ]
            };
        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload.id)
            };
        case COMPLETE_TODO:
            return {
                ...state,
                todos: state.todos.map(todo => todo.id === action.payload.id ? { ...todo, completed: !todo.completed } : todo)
            };
        case COMPLETE_ALL:
            const areAllMarked = state.todos.every(todo => todo.completed);
            return {
                ...state,
                todos: state.todos.map(todo => ({ ...todo, completed: !areAllMarked }))
            };
        case CLEAR_COMPLETED:
            return {
                ...state,
                todos: state.todos.filter(todo => todo.completed === false)
            };
        default:
            return state;
    }
};

export default todoReducer;