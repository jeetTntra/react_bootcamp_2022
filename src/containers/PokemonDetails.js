import React from 'react';
import {useLocation} from "react-router-dom";
import {connect} from "react-redux";
import styled from "styled-components";
import {Layout} from "antd";
import PokemonDetailsCard from "../components/PokemonDetailsCard";
import {getPokemonDetails, getPokemonList, getPokemonSpecies, getPokemonState} from "../redux/pokemonSelectors";

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

const  PokemonDetails = () => {
    const pokemon = useLocation().state;

    return (
        <CustomBackground>
            <CustomLayout>
                <PokemonDetailsCard pokemon={pokemon}/>
            </CustomLayout>
        </CustomBackground>
    );
}

export default PokemonDetails;
