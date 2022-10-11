// Create a PokemonCard component that renders a pokemon's name, image and type. The component should be a functional component that takes in a pokemon object as a prop. The component should render the pokemon's name, image and type. The component should be exported as default.

// Language: javascript
// Path: src/components/PokemonCard.js
// Compare this snippet from src/components/PokemonCard.js:
import React from 'react';
import styled from "styled-components";
import tw from "twin.macro";
import {log} from "@craco/craco/lib/logger";

const CardContainer = styled.div(({color}) => [
    tw`
    flex
    flex-col
    items-center
    justify-center
    rounded-xl
    p-2
    m-2
  `,
    color === "red" && tw`bg-red-500`,
    color === "blue" && tw`bg-blue-500`,
    color === "yellow" && tw`bg-yellow-500`,
    color === "green" && tw`bg-green-500`,
    color === "black" && tw`bg-black`,
    color === "purple" && tw`bg-purple-500`,
    color === "gray" && tw`bg-gray-500`,
    color === "white" && tw`bg-gray-500`,
    color === "pink" && tw`bg-pink-500`,

]);

const CardImageHolder = styled.div`
  ${tw`
        flex
        justify-center
        items-center
        bg-white
        rounded-md
        w-full
        h-full
    `}
`;

const CardImage = styled.img`
  ${tw`
          w-full
          h-full
          object-contain    
  `}
`;

const CardTitle = styled.h2`
  ${tw`
        text-xl
        font-bold
        text-gray-700
        font-sans
    `}
`;


const PokemonCard = ({pokemon}) => {

    const capitalize = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    const setBgColor = (pokemon) => {
        console.log(pokemon.color.name);
    }

    return (
        <div>
            {pokemon &&
                <CardContainer color={pokemon.color.name}>
                    <CardImageHolder>
                        <CardImage src={pokemon.sprites.front_default} alt={pokemon.name} style={{width: "200px"}}/>
                    </CardImageHolder>
                    <CardTitle>{capitalize(pokemon.name)}</CardTitle>
                </CardContainer>
            }
        </div>
    );
};

export default PokemonCard;