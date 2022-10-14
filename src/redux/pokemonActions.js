import {
    GET_POKEMON_LIST,
    GET_POKEMON_LIST_SUCCESS,
    GET_POKEMON_LIST_FAILURE,
    GET_POKEMON_SPECIES,
    GET_POKEMON_SPECIES_SUCCESS,
    GET_POKEMON_DETAILS_FAILURE,
    GET_POKEMON_DETAILS_SUCCESS,
    GET_POKEMON_DETAILS, GET_POKEMON_SPECIES_FAILURE, MERGE_POKEMON_DETAILS
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

export const fetchPokemonDetails = () => {
    return {
        type: GET_POKEMON_DETAILS
    }
}

export const fetchPokemonDetailsSuccess = (pokemon) => {
    return {
        type: GET_POKEMON_DETAILS_SUCCESS,
        payload: pokemon
    }
}

export const fetchPokemonDetailsFailure = (error) => {
    return {
        type: GET_POKEMON_DETAILS_FAILURE,
        payload: error
    }
}

export const fetchPokemonSpecies = () => {
    return {
        type: GET_POKEMON_SPECIES
    }
}

export const fetchPokemonSpeciesSuccess = (pokemon) => {
    return {
        type: GET_POKEMON_SPECIES_SUCCESS,
        payload: pokemon
    }
}

export const fetchPokemonSpeciesFailure = (error) => {
    return {
        type: GET_POKEMON_SPECIES_FAILURE,
        payload: error
    }
}