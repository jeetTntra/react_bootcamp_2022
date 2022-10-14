// Pokemon Selection Component, this is where the user and ai selects the pokemon they want to battle with.
//
// Language: javascript
// Path: src/components/PokemonSelection.js
// Compare this snippet from src/containers/PokemonDetails.js:
import React from 'react';
import {useParams} from "react-router-dom";
import {connect} from "react-redux";
import styled from "styled-components";
import PokemonDetailsCard from "../components/PokemonDetailsCard";
import {
    getPokemonDetails,
    getPokemonSpecies,
} from "../redux/pokemonSelectors";

const MainLayout = styled.div`
  && {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background-color: #ffffff;
  }
`;

const SelectionContainer = styled.div`
  && {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }
`;

const SelectionCard = styled.div`
  && {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }
`;

const PokemonSelection = ({pokemonSpecies, pokemonDetails, handleUserSelection, handleAiSelection}) => {

    const pokemon = pokemonDetails.length > 0 && pokemonSpecies.length > 0 ? pokemonDetails.map((pokemon, index) => {
        return {
            ...pokemon,
            ...pokemonSpecies[index]
        };
    }).sort(() => Math.random() - 0.5).slice(0, 10) : null;

    return (
        <MainLayout>
            <SelectionContainer>
                <SelectionCard>
                    <PokemonDetailsCard pokemon={pokemon}/>
                </SelectionCard>
            </SelectionContainer>
        </MainLayout>
    );
}

const mapStateToProps = (state) => {
    return {
        pokemonSpecies: getPokemonSpecies(state),
        pokemonDetails: getPokemonDetails(state)
    }
}

export default connect(mapStateToProps)(PokemonSelection);
