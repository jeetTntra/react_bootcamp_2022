// Create a PokemonCard component that renders a pokemon's name, image and type. The component should be a functional component that takes in a pokemon object as a prop. The component should render the pokemon's name, image and type. The component should be exported as default.

// Language: javascript
// Path: src/components/PokemonCard.js
// Compare this snippet from src/components/PokemonCard.js:
import React from 'react';
import styled from "styled-components";
import tw from "twin.macro";

const CardContainer = styled.div`
  ${tw`
    flex
    flex-col
    items-center
    justify-center
    bg-red-200
    rounded-xl
    p-2
    m-2
  `}
`;

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

    return (
        <CardContainer>
            <CardImageHolder>
                <CardImage src={pokemon.sprites.other.home.front_default} alt={pokemon.name} style={{width: "200px"}}/>
            </CardImageHolder>
            <CardTitle>{capitalize(pokemon.name)}</CardTitle>
        </CardContainer>
    );
};

export default PokemonCard;