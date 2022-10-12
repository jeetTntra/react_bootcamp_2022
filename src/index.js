import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import store from "./redux/store";
import styled from "styled-components";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/Header";
import {Layout} from "antd";
import routeConfig from "./utils/routeConfig";

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
                <Layout.Content>
                    <BrowserRouter>
                        <Routes>
                            <Route path={routeConfig[0].path} element={routeConfig[0].component}/>
                            <Route path={routeConfig[1].path} element={routeConfig[1].component}/>
                        </Routes>
                    </BrowserRouter>
                </Layout.Content>
            </Provider>
        </React.StrictMode>
    </RootComponent>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
