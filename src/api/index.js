import api from "./api";

export const fetchPokemonListFromAPI = () => {
    return api.get("/pokemon?limit=1000&offset=0");
}

export const fetchPokemonDetailsFromAPI = (url) => {
    return api.get(url);
}

export const fetchPokemonSpeciesFromAPI = (url) => {
    return api.get(url);
}