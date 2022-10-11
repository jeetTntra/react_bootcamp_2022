import {useEffect, useState} from "react";
import {Button, Input} from "antd";
import styled from "styled-components";
import tw from "twin.macro";
import PropTypes from   "prop-types";

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


const SearchBar = ({handleSearch, handleReset}) => {
    return (
        <Container>
            <CustomSearchBar
                data-testid="search-bar"
                type="text"
                placeholder={"Search for a pokemon"}
                defaultValue={""}
                onChange={handleSearch}
                autoFocus
            />
            <ButtonBox>
                <CustomButton type="primary" onClick={() => handleReset()}>Reset</CustomButton>
            </ButtonBox>
        </Container>
    );
}

// declare your prop types
SearchBar.propTypes = {
    handleSearch: PropTypes.func.isRequired,
    handleReset: PropTypes.func.isRequired,
};

export default SearchBar;