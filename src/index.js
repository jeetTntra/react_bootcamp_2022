import React from 'react';
import ReactDOM from 'react-dom/client';
import PokemonApp from './containers/PokemonApp';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import store from "./redux/store";
import Header from "./components/Header";
import styled from "styled-components";
import {Layout} from "antd";
import SearchBar from "./components/SearchBar";

const RootComponent = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
`;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RootComponent>
        <React.StrictMode>
            <Provider store={store}>
                <Header/>
                <PokemonApp/>
            </Provider>
        </React.StrictMode>
    </RootComponent>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
