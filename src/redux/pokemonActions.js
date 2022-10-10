import {
    GET_POKEMON_LIST,
    GET_POKEMON_LIST_SUCCESS,
    GET_POKEMON_LIST_FAILURE
} from './pokemonTypes';

export const fetchPokemonList = () => {
    return {
        type: GET_POKEMON_LIST
    }
}

export const fetchPokemonListSuccess = (pokemon) => {
    return {
        type: GET_POKEMON_LIST_SUCCESS,
        payload: pokemon
    }
}

export const fetchPokemonListFailure = (error) => {
    return {
        type: GET_POKEMON_LIST_FAILURE,
        payload: error
    }
}