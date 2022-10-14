import React from 'react';
import styled from "styled-components";
import tw from "twin.macro";
import {useNavigate} from "react-router-dom";

const CardContainer = styled.div(({color}) => [
    tw`
    flex
    flex-col
    items-center
    justify-center
    rounded-xl
    p-2
    m-2
    w-52
    cursor-pointer
  `,
    color === "red" && tw`bg-gradient-to-tr from-red-300 to-red-700`,
    color === "blue" && tw`bg-gradient-to-tr from-blue-300 to-blue-700`,
    color === "yellow" && tw`bg-gradient-to-tr from-yellow-300 to-yellow-700`,
    color === "green" && tw`bg-gradient-to-tr from-green-300 to-green-700`,
    color === "black" && tw`bg-gradient-to-tr from-gray-300 to-gray-700`,
    color === "brown" && tw`bg-gradient-to-tr from-yellow-600 to-yellow-800`,
    color === "purple" && tw`bg-gradient-to-tr from-purple-300 to-purple-700`,
    color === "gray" && tw`bg-gradient-to-bl from-gray-100 to-gray-500`,
    color === "white" && tw`bg-gradient-to-br from-gray-300 to-gray-700`,
    color === "pink" && tw`bg-gradient-to-tr from-pink-300 to-pink-700`,
]);

const CardImageHolder = styled.div`
  ${tw`
        relative
        flex
        justify-center
        items-center
        bg-gradient-to-t from-black to-transparent
        rounded-md
        w-full
        h-full
    `}
`;

// styled div for health point on top right corner inside the card image holder
const HealthPoint = styled.div`
  ${tw`
        absolute
        top-0
        right-0
        bg-yellow-500
        rounded-md
        text-white
        font-bold
        text-xs
        font-sans
        p-1
        m-1.5
    `}
`;

const CardImage = styled.img`
  ${tw`
          w-48
          h-48
          object-scale-down
  `}

  transition: transform 0.2s ease-in-out;
  
  &:hover {
    transform: scale(1.5); 
  }
`;

const CardTitle = styled.h3(({color}) => [
    tw`
        font-bold
        text-black
        font-sans
    `,
    color === "red" | color === "brown" | color === "gray" | color === "black" | color === "purple" | color === "white" && tw`text-white`,
    color === "green" | color === "pink" | color === "yellow" && tw`text-black`,
]);


const PokemonCard = ({pokemon}) => {

    const navigate = useNavigate();

    const capitalize = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    const goToPokemonDetails = () => {
        navigate(`/pokemon/${pokemon.id}`);
    }

    return (
        <div>
            {
                pokemon &&
                <CardContainer color={pokemon.color.name} onClick={goToPokemonDetails}>
                    <CardImageHolder>
                        <HealthPoint>HP: {pokemon.stats[0].base_stat}</HealthPoint>
                        <CardImage src={`https://www.smogon.com/dex/media/sprites/xy/${pokemon.name}.gif`} alt={pokemon.name}/>
                    </CardImageHolder>
                    <CardTitle color={pokemon.color.name}>{capitalize(pokemon.name)}</CardTitle>
                </CardContainer>
            }
        </div>
    );
};

export default PokemonCard;