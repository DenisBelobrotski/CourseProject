import React, { Component } from 'react';
import './App.css';
import SearchForm from './components/SearchForm';
import ItemsList from './components/ItemsList';

export default class App extends Component {
  render() {
    return (
      <div className="App-container">
        <div className="App">
          <SearchForm />
          <ItemsList />
        </div>
      </div>
    );
  }
}
