import React, { Component } from 'react';
import './App.css';
import SearchForm from './components/SearchForm';
import ItemsList from './components/ItemsList';
import { connect } from "react-redux";
import DetailedItemInfo from './components/DetailedItemInfo';

class App extends Component {
  render() {
    return (
      <div className="App-container">
        <div className="App">
          <SearchForm />
          <ItemsList />
        </div>
        {
          this.props.showindDetailedItem !== null &&
          <DetailedItemInfo
            item={this.props.showindDetailedItem}
          />
        }
      </div>
    );
  }
}

export default connect(
  store =>
    ({
      showindDetailedItem: store.showindDetailedItem
    }),
  dispatch =>
    ({

    })
)(App);
