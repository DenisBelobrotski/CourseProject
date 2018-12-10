import React, { Component } from 'react';
import '../App.css';
import SearchForm from './SearchForm';
import ItemsList from './ItemsList';

export default class App extends Component {
    render() {
        return (
            <div className="App-container">
                <div className="App">
                    <SearchForm
                        request={this.props.match.params.request}
                    />
                    <ItemsList />
                </div>
            </div>
        );
    }
}
