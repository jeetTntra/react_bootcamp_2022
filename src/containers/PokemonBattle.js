// Pokemon Battle Container contains the battle logic and renders the battle to the screen
//
// 1. The pokemon selection screen is rendered if the battle has not started.
// 2. The screen will be split into 2 parts, the top part where random 10 pokemon are drawn from the pokemon list.
// 3. The bottom part will contain the user's pokemon and the ai's pokemon.
// 4. The user will be able to select 2 pokemon from the top part of the screen.
// 5. The ai will be able to select 2 pokemon from the top part of the screen.
// 6. The selected pokemon will be displayed in the bottom part of the screen.
// 7. The user than will be able to start the battle by selecting a pokemon to battle with.
// 8. The ai will then select a pokemon to battle with.
// 9. The screen will route to the battle screen.
// Lets start by importing the following:
//     - React: to create the component
//     - useState: to create the state
//     - useEffect: to create a side effect
//     - useSelector: to get the pokemon list from the store
//     - useDispatch: to dispatch actions to the store
//     - useHistory: to route to the battle screen
//     - useBattle: to use the battle hook
//     - PokemonSelection: to render the pokemon selection screen
//     - Battle: to render the battle screen
//     - setPokemonList: to set the pokemon list in the store

//—————————————————————————————————————————————————————————————————————————————————————————————
// Lets create the PokemonBattle component
import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useBattle} from '../hooks/useBattle';
import PokemonSelection from '../components/PokemonSelection';
import {useNavigate} from "react-router-dom";

//—————————————————————————————————————————————————————————————————————————————————————————————
// Lets create the PokemonBattle component
const PokemonBattle = () => {
    // Lets create the following state:
    //     - userPokemon: the user's pokemon
    //     - aiPokemon: the ai's pokemon
    //     - userPokemonSelected: a boolean which indicates if the user's pokemon is selected or not
    //     - aiPokemonSelected: a boolean which indicates if the ai's pokemon is selected or not
    //     - pokemonList: the pokemon list
    const [userPokemon, setUserPokemon] = useState(null);
    const [aiPokemon, setAIPokemon] = useState(null);
    const [userPokemonSelected, setUserPokemonSelected] = useState(false);
    const [aiPokemonSelected, setAIPokemonSelected] = useState(false);
    const pokemonList = useSelector(state => {
        return {
            pokemonDetails: state.pokemon.pokemonDetails,
            pokemonSpecies: state.pokemon.pokemonSpecies,
        }
    });


    // Lets create the following variables:
    //     - dispatch: to dispatch actions to the store
    //     - history: to route to the battle screen
    //     - [battleState, battleActions]: to use the battle hook
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [battleState, battleActions] = useBattle({
        pokemon1: userPokemon,
        pokemon2: aiPokemon,
    });

    // Lets create the following functions:
    //     - handleUserPokemonSelection: this function will be called when the user selects a pokemon to battle with
    //     - handleAIPokemonSelection: this function will be called when the ai selects a pokemon to battle with
    //     - handleBattleStart: this function will be called when the user starts the battle
    const handleUserPokemonSelection = pokemon => {
        setUserPokemon(pokemon);
        setUserPokemonSelected(true);
    };
    const handleAIPokemonSelection = pokemon => {
        setAIPokemon(pokemon);
        setAIPokemonSelected(true);
    };
    const handleBattleStart = () => {
        battleActions.startBattle();
        navigate('/battle');
    };

    // Lets create the following variables:
    //     - pokemonSelectionProps: the props for the PokemonSelection component
    //     - battleProps: the props for the Battle component
    const pokemonSelectionProps = {
        pokemonList,
        userPokemon,
        aiPokemon,
        userPokemonSelected,
        aiPokemonSelected,
        handleUserPokemonSelection,
        handleAIPokemonSelection,
        handleBattleStart,
    };

    const battleProps = {
        battleState,
        battleActions,
    };

    // Lets render the pokemon selection screen if the battle has not started
    if (!battleState.battleStarted) {
        return <PokemonSelection {...pokemonSelectionProps} />
    }

    // Lets render the battle screen if the battle has started
    // return <Battle {...battleProps} />;
};

// Lets export the PokemonBattle component
export default PokemonBattle;

