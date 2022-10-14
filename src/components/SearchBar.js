import {useEffect, useState} from "react";
import {Button, Input} from "antd";
import styled from "styled-components";
import tw from "twin.macro";
import PropTypes from "prop-types";

const Container = styled.div`
  && {
    display: flex;
    flex-direction: row;
    margin: 0 auto;
    padding: 10px;
    gap: 10px;
    background-color: #fff;
  }
`;

const CustomSearchBar = styled(Input)`
  && {
    border-radius: 2rem;
    border: 0;
    background: #f0f0f0;
    padding: 1rem;
    width: 100%;

    font-family: "Montserrat", sans-serif;
    font-size: 1rem;
    font-weight: 400;

    .ant-input {
      padding-left: 0.5rem;
      background: gray;
    }
  }
`;

const ButtonBox = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const CustomButton = styled(Button)`
  && {
    border-radius: 2rem;
    border: 0;
    background: firebrick;
    padding: 1rem;
    font-family: "Montserrat", sans-serif;
    font-size: 1rem;
    font-weight: 400;
    color: white;

    transition : all 0.1s ease-in-out;
    
    &:hover {
      background: darkred;
      cursor: pointer;
      transform: scale(0.9);
      transition: 0.1s ease-in-out;
    }
  }
`;


const SearchBar = ({handleSearch, handleReset, value}) => {
    return (
        <Container>
            <CustomSearchBar
                data-testid="search-bar"
                type="text"
                placeholder={"Search for a pokemon"}
                value={value}
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
    value: PropTypes.string.isRequired
};

export default SearchBar;