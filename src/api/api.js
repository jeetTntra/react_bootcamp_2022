import {create} from "apisauce";

const api = create({
    baseURL: "https://pokeapi.co/api/v2",
    headers: {
        "Content-Type": "application/json",
    },
});

export default api;