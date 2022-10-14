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
    },
    {
        path: '/play',
        exact: true,
        component: lazy(() => import('../containers/PokemonBattle')),
    }
];

export default routes;