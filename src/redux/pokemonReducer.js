import {
    GET_POKEMON_LIST,
    GET_POKEMON_LIST_SUCCESS,
    GET_POKEMON_LIST_FAILURE
} from './pokemonTypes';

const initialState = {
    loading: false,
    pokemonList: [],
    error: ''
};

// The reducer function is a pure function that takes the previous state and an action, and returns the next state.
// (previousState, action) => newState
// It's called a reducer because it's the type of function you would pass to Array.prototype.reduce(reducer, ?initialValue).
// It's very important that the reducer stays pure. Things you should never do inside a reducer:
// Mutate its arguments;
// Perform side effects like API calls and routing transitions;
// Call non-pure functions, e.g. Date.now() or Math.random().

const pokemonReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_POKEMON_LIST:
            return {
                ...state,
                loading: true
            }
        case GET_POKEMON_LIST_SUCCESS:
            return {
                ...state,
                loading: false,
                pokemonList: action.payload,
                error: ''
            }
        case GET_POKEMON_LIST_FAILURE:
            return {
                ...state,
                loading: false,
                pokemonList: [],
                error: action.payload
            }
        default:
            return state
    }
};

export default pokemonReducer;