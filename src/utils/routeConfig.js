import { lazy } from 'react';
import Home from "../containers/Home";
import PokemonDetails from "../containers/PokemonDetails";

const routes = [
    {
        path: '/',
        exact: true,
        component: <Home/>,
    },
    {
        path: '/pokemon/:id',
        exact: true,
        component: <PokemonDetails/>,
    }
];

export default routes;