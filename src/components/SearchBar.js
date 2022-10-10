import {useEffect, useState} from "react";
import {Button, Input} from "antd";
import styled from "styled-components";
import tw from "twin.macro";
import {fetchPokemonDetailsFromAPI, fetchPokemonListFromAPI} from "../api";
import {connect} from "react-redux";
import {getPokemonList} from "../redux/pokemonSelectors";
import {fetchPokemonList, fetchPokemonListSuccess} from "../redux/pokemonActions";

const Container = styled.div`
  && {
    display: flex;
    flex-direction: row;
    margin: 0 auto;
    background-color: #fff;
  }
`;

const CustomSearchBar = styled(Input)`
  && {
    ${tw`
            w-full
            h-auto
            m-2
            rounded-xl
            border-2
            border-gray-300
            focus:border-gray-500
            focus:outline-none
            focus:ring-2
            focus:ring-gray-500
            focus:ring-opacity-50
            p-2
            text-lg
            font-sans
            font-bold
            text-gray-700
        `}
  }
`;

const ButtonBox = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const CustomButton = styled(Button)`
  && {
    ${tw`
            bg-gray-300
            hover:bg-gray-400
            text-gray-700
            font-bold
            font-sans
            text-lg
            rounded-xl
            border-2
            border-gray-300
    `}
  }
`;


const SearchBar = ({fetchPokemonListSuccess}) => {
    const [term, setTerm] = useState('');

    const fetchPokemon = async () => {
        const pokemonRecord = await fetchPokemonDetailsFromAPI(term);
        console.log(pokemonRecord.data);
        const newPokemonList = [pokemonRecord.data];
        fetchPokemonListSuccess(newPokemonList);
    }

    const handleSearch = (e) => {
        e.preventDefault();
        const pokemon = e.target.value;
        if (!pokemon.isEmpty) {
            setTerm(pokemon);
        }
    }

    const getPokemonList = () => {
        fetchPokemonList();
        fetchPokemonListFromAPI().then(response => {
            const pokemonList = response.data.results;
            console.log("pokemonList", pokemonList);
            fetchPokemonDetails(pokemonList);
        });
    };

    const fetchPokemonDetails = async (pokemonList) => {
        const pokemonData = await Promise.all(pokemonList.map(async (pokemon) => {
            const pokemonRecord = await fetchPokemonDetailsFromAPI(pokemon.name);
            return pokemonRecord.data;
        }));
        console.log("pokemonData", pokemonData);
        fetchPokemonListSuccess(pokemonData);
    }

    useEffect(() => {
        getPokemonList();
    }, []);

    const handleSearchClick = (e) => {
        e.preventDefault();
        fetchPokemon();
    }
    return (<Container>
        <CustomSearchBar
            data-testid="search-bar"
            type="text"
            placeholder={"Search for a pokemon"}
            defaultValue={term}
            onChange={handleSearch}
            autoFocus
        />
        <ButtonBox>
            <CustomButton type="primary" onClick={() => fetchPokemonDetails()}>Search</CustomButton>
        </ButtonBox>
    </Container>);
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPokemonListSuccess: (pokemon) => dispatch(fetchPokemonListSuccess(pokemon)),
    };
}

export default connect(null, mapDispatchToProps)(SearchBar);