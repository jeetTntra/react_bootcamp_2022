import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {getPokemonDetails, getPokemonList, getPokemonSpecies, getPokemonState} from '../redux/pokemonSelectors';
import {fetchPokemonDetailsFromAPI, fetchPokemonListFromAPI, fetchPokemonSpeciesFromAPI} from "../api";
import {
    fetchPokemonDetails,
    fetchPokemonDetailsFailure,
    fetchPokemonDetailsSuccess,
    fetchPokemonList,
    fetchPokemonListFailure,
    fetchPokemonListSuccess,
    fetchPokemonSpecies,
    fetchPokemonSpeciesFailure,
    fetchPokemonSpeciesSuccess,
} from "../redux/pokemonActions";
import PokemonCard from "../components/PokemonCard";
import styled from "styled-components";
import SearchBar from "../components/SearchBar";
import {Layout} from "antd";

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

const PokemonListContainer = ({
                                  pokemonState,
                                  pokemonList,
                                  pokemonSpecies,
                                  pokemonDetails,
                                  fetchPokemonList,
                                  fetchPokemonListSuccess,
                                  fetchPokemonListFailure,
                                  fetchPokemonDetails,
                                  fetchPokemonDetailsSuccess,
                                  fetchPokemonDetailsFailure,
                                  fetchPokemonSpecies,
                                  fetchPokemonSpeciesSuccess,
                                  fetchPokemonSpeciesFailure
                              }) => {

        const [search, setSearch] = React.useState("");

        const handleSearch = (e) => {
            setSearch(e.target.value);
        }

        const handleReset = () => {
            setSearch("");
        }

        useEffect(() => {
            getPokemonList();
        }, []);

        const getPokemonList = () => {
            fetchPokemonList();
            fetchPokemonListFromAPI().then(response => {
                const pokemonList = response.data.results;
                fetchPokemonListSuccess(pokemonList);
                getPokemonDetails(pokemonList);
            });
        };

        const getPokemonDetails = async (pokemonList) => {
            fetchPokemonDetails()
            const pokemonData = await Promise.all(pokemonList.map(async (pokemon) => {
                const pokemonRecord = await fetchPokemonDetailsFromAPI(pokemon.url);
                return pokemonRecord.data;
            }));
            fetchPokemonDetailsSuccess(pokemonData);
            getPokemonSpecies(pokemonData);
        }

        const getPokemonSpecies = async (pokemonData) => {
            fetchPokemonSpecies();
            const pokemonSpecies = await Promise.all(pokemonData.map(async (pokemon) => {
                const pokemonRecord = await fetchPokemonSpeciesFromAPI(pokemon.species.url);
                return pokemonRecord.data;
            }));
            fetchPokemonSpeciesSuccess(pokemonSpecies);
        }

        const pokemonData = pokemonDetails.length > 0 && pokemonSpecies.length > 0 ? pokemonDetails.map((pokemon, index) => {
                return {
                    ...pokemon, ...pokemonSpecies[index]
                }
            }).filter((pokemon, index, self) => {
                return index === self.findIndex((p) => (p.id === pokemon.id))
            }).filter((pokemon) => {
                return pokemon.name.toLowerCase().includes(search.toLowerCase());
            }) : [];

        return (
            <CustomLayout>
                <SearchBar handleSearch={handleSearch} handleReset={handleReset}/>
                <CustomBackground>
                    {pokemonState.loading && <h2>Loading...</h2>}
                    {pokemonState.error && <h2>{pokemonList.error}</h2>}
                    <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        flexDirection: 'row',
                        gap: '1px',
                        justifyContent: 'center'
                    }}>
                        {pokemonData.length > 0 && pokemonData.map((pokemon, index) => <PokemonCard key={pokemon.id}
                                                                                                    pokemon={pokemon}/>)}
                    </div>
                </CustomBackground>
            </CustomLayout>
        );
    }
;

const mapStateToProps = state => {
    return {
        pokemonState: getPokemonState(state),
        pokemonList: getPokemonList(state),
        pokemonSpecies: getPokemonSpecies(state),
        pokemonDetails: getPokemonDetails(state)
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPokemonList: () => {
            dispatch(fetchPokemonList())
        }, fetchPokemonListSuccess: (pokemon) => {
            dispatch(fetchPokemonListSuccess(pokemon))
        }, fetchPokemonListFailure: (error) => {
            dispatch(fetchPokemonListFailure(error))
        }, fetchPokemonDetails: (pokemon) => {
            dispatch(fetchPokemonDetails(pokemon))
        }, fetchPokemonDetailsSuccess: (pokemon) => {
            dispatch(fetchPokemonDetailsSuccess(pokemon))
        }, fetchPokemonDetailsFailure: (error) => {
            dispatch(fetchPokemonDetailsFailure(error))
        }, fetchPokemonSpecies: (pokemon) => {
            dispatch(fetchPokemonSpecies(pokemon))
        }, fetchPokemonSpeciesSuccess: (pokemon) => {
            dispatch(fetchPokemonSpeciesSuccess(pokemon))
        }, fetchPokemonSpeciesFailure: (error) => {
            dispatch(fetchPokemonSpeciesFailure(error))
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonListContainer);
