import React from 'react';
import {useLocation, useParams} from "react-router-dom";
import {connect} from "react-redux";
import styled from "styled-components";
import {Layout} from "antd";
import PokemonDetailsCard from "../components/PokemonDetailsCard";
import {
    getPokemonDetails,
    getPokemonSpecies,
} from "../redux/pokemonSelectors";

const CustomBackground = styled.div`
  && {
    min-height: 100vh;
    background-color: #ffffff;
  }
`;

const CustomLayout = styled(Layout)`
  && {
    flex-direction: column;
  }
`;

const  PokemonDetails = ({pokemonSpecies, pokemonDetails}) => {
    const params = useParams();
    const pokemonId = params.id;

    const pokemon = pokemonDetails.length > 0 && pokemonSpecies.length > 0 ? pokemonDetails.map((pokemon, index) => {
        return {
            ...pokemon,
            ...pokemonSpecies[index]
        };
    }).filter(pokemon => pokemon.id === parseInt(pokemonId))[0] : null;

    console.log(pokemon);

    return (
        <CustomBackground>
            <CustomLayout>
                <PokemonDetailsCard pokemon={pokemon}/>
            </CustomLayout>
        </CustomBackground>
    );
}

const mapStateToProps = (state) => {
    return {
        pokemonSpecies: getPokemonSpecies(state),
        pokemonDetails: getPokemonDetails(state)
    }
}

export default connect(mapStateToProps)(PokemonDetails);
