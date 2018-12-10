import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MainPage from './components/MainPage';
import { Provider } from "react-redux";
import { store } from "./store/configureStore";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import DetailedItemInfoPage from './components/DetailedItemInfoPage';

ReactDOM.render(<Provider store={store}>
    <BrowserRouter>
        <Switch>
            <Route exact path="/:request?" component={MainPage} />
            <Route exact path="/about/:id" component={DetailedItemInfoPage} />
        </Switch>
    </BrowserRouter>
</Provider>, document.getElementById('root'));
