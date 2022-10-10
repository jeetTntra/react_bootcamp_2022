import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {getPokemonList} from '../redux/pokemonSelectors';
import {fetchPokemonDetailsFromAPI, fetchPokemonListFromAPI} from "../api";
import {fetchPokemonList, fetchPokemonListFailure, fetchPokemonListSuccess,} from "../redux/pokemonActions";
import PokemonCard from "../components/PokemonCard";
import styled from "styled-components";

const CustomBackgroud = styled.div`
  && {
    min-height: 100vh;
    background-color: #ffffff;
  }
`;

const PokemonApp = ({pokemonState}) => {



        return (
            <CustomBackgroud>
                {pokemonState.loading && <h2>Loading...</h2>}
                {pokemonState.error && <h2>{pokemonState.error}</h2>}
                <div style={{display: 'flex', flexWrap: 'wrap', flexDirection: 'row'}}>
                    {pokemonState.pokemonList && pokemonState.pokemonList.map((pokemon, index) => (
                        <PokemonCard key={index} pokemon={pokemon}/>
                    ))}
                </div>
            </CustomBackgroud>
        );
    }
;

const mapStateToProps = state => {
    return {
        pokemonState: getPokemonList(state),
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPokemonList: () => {
            dispatch(fetchPokemonList())
        },
        fetchPokemonListSuccess: (pokemon) => {
            dispatch(fetchPokemonListSuccess(pokemon))
        },
        fetchPokemonListFailure: (error) => {
            dispatch(fetchPokemonListFailure(error))
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonApp);
