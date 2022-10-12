import React from 'react';
import styled from "styled-components";
import tw from "twin.macro";

const CardContainer = styled.div(({color}) => [
    tw`
        flex
        flex-col
        items-center
        justify-center
        bg-white
        rounded-lg
        p-2
        m-2
        relative
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
        bg-gradient-to-t from-gray-900 to-transparent
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

const PokemonStatsContainer = styled.div`
  ${tw`
        flex
        flex-col
        items-center
        justify-center
        w-full
        h-full
        p-2
        relative
    `}
`;

const PokemonStats = styled.div`
  ${tw`
        flex
        flex-row
        justify-between
        items-center
        w-1/5
        h-full
        p-2
        relative
        gap-5
  `}
`;

const PokemonStatTitle = styled.h3`
  ${tw`
        font-bold
        text-black
        font-sans
        text-sm
    `}
`;

const PokemonStatValue = styled.h3`
  ${tw`
        font-bold
        text-black
        font-sans
        text-sm
    `}
`;

const PokemonStatsBlockContainer = styled.div([
    tw`
        flex
        flex-row
        justify-between
        items-center
        w-full
        h-full
        p-2
        relative
    `,
]);

const PokemonStatsBlock = styled.div(({color}) => [
    tw`
        flex
        flex-col
        items-center
        justify-center
        w-0.5
        h-3
        p-2
        m-0.5
        relative
    `,
    // background glow effect
    color === "red" && tw`bg-yellow-300`,
    color === "gray" && tw`bg-gray-300`,
]);

const PokemonStatsBar = ({stat}) => {
    const blocks = [];
    console.log(stat);
    for (let i = 0; i < 10; i++) {
        if (i < stat / 10) {
            blocks.push(<PokemonStatsBlock key={i} color="red"/>);
        } else {
            blocks.push(<PokemonStatsBlock key={i} color="gray"/>);
        }
    }
    return (
        <PokemonStatsBlockContainer>
            {blocks}
        </PokemonStatsBlockContainer>
    );
}

const PokemonDetailsCard = ({pokemon}) => {

    const capitalize = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    console.log(pokemon.color);
    return (
        <div>

            {
                pokemon &&
                <CardContainer color={pokemon.color.name}>
                    <CardImageHolder>
                        <HealthPoint>HP: {pokemon.stats[0].base_stat}</HealthPoint>
                        <CardImage src={`https://www.smogon.com/dex/media/sprites/xy/${pokemon.name}.gif`}
                                   alt={pokemon.name}/>
                    </CardImageHolder>
                    <CardTitle color={pokemon.color.name}>{capitalize(pokemon.name)}</CardTitle>
                    <PokemonStatsContainer>
                        <table>
                            <thead>
                            <tr>
                                <th>Stats</th>
                                <th>Value</th>
                                <th>Stats Bar</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                pokemon.stats.map((stat, index) => (
                                    <tr key={index}>
                                        <td>
                                            <PokemonStatTitle>{capitalize(stat.stat.name)}</PokemonStatTitle>
                                        </td>
                                        <td>
                                            <PokemonStatValue>{stat.base_stat}</PokemonStatValue>
                                        </td>
                                        <td>
                                            <PokemonStatsBar stat={stat.base_stat}/>
                                        </td>
                                    </tr>
                                ))

                            }
                            </tbody>
                        </table>
                    </PokemonStatsContainer>
                </CardContainer>
            }
        </div>
    );
};

export default PokemonDetailsCard;