import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from "react-redux";
import { store } from "./store/configureStore";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import DetailedItemInfo from './components/DetailedItemInfo';

ReactDOM.render(<Provider store={store}>
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App} />
            <Route exact path="/about/:id" component={DetailedItemInfo} />
        </Switch>
    </BrowserRouter>
</Provider>, document.getElementById('root'));
