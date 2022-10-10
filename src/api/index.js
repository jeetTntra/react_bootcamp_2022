import api from "./api";

export const fetchPokemonListFromAPI = () => {
    return api.get("/pokemon?limit=9");
}

export const fetchPokemonDetailsFromAPI = (pokemonName) => {
    return api.get(`/pokemon/${pokemonName}`);
}