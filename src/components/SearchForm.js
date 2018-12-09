import React, { Component } from "react";
import { connect } from "react-redux";
import loadItems from "../utils/loadItems";
import loadRandomItem from "../utils/loadRandomItem";

class SearchForm extends Component {

    render() {
        return (
            <form className="search-form">
                <label>
                    abv_gt
                    <input
                        type="number"
                        name="abv_gt"
                        onChange={event => this.props.setValue(event.target.name, event.target.value)}
                        value={this.props.input.abv_gt}
                    />
                </label>
                <label>
                    abv_lt
                    <input
                        type="number"
                        name="abv_lt"
                        onChange={event => this.props.setValue(event.target.name, event.target.value)}
                        value={this.props.input.abv_lt}
                    />
                </label>
                <label>
                    ibu_gt
                    <input
                        type="number"
                        name="ibu_gt"
                        onChange={event => this.props.setValue(event.target.name, event.target.value)}
                        value={this.props.input.ibu_gt}
                    />
                </label>
                <label>
                    ibu_lt
                    <input
                        type="number"
                        name="ibu_lt"
                        onChange={event => this.props.setValue(event.target.name, event.target.value)}
                        value={this.props.input.ibu_lt}
                    />
                </label>
                <label>
                    ebc_gt
                    <input
                        type="number"
                        name="ebc_gt"
                        onChange={event => this.props.setValue(event.target.name, event.target.value)}
                        value={this.props.input.ebc_gt}
                    />
                </label>
                <label>
                    ebc_lt
                    <input
                        type="number"
                        name="ebc_lt"
                        onChange={event => this.props.setValue(event.target.name, event.target.value)}
                        value={this.props.input.ebc_lt}
                    />
                </label>
                <label>
                    beer_name
                    <input
                        type="text"
                        name="beer_name"
                        onChange={event => this.props.setValue(event.target.name, event.target.value)}
                        value={this.props.input.beer_name}
                    />
                </label>
                <label>
                    yeast
                    <input
                        type="text"
                        name="yeast"
                        onChange={event => this.props.setValue(event.target.name, event.target.value)}
                        value={this.props.input.yeast}
                    />
                </label>
                <label>
                    brewed_before
                    <input
                        type="date"
                        name="brewed_before"
                        onChange={event => this.props.setValue(event.target.name, event.target.value)}
                        value={this.props.input.brewed_before}
                    />
                </label>
                <label>
                    brewed_after
                    <input
                        type="date"
                        name="brewed_after"
                        onChange={event => this.props.setValue(event.target.name, event.target.value)}
                        value={this.props.input.brewed_after}
                    />
                </label>
                <label>
                    hops
                    <input
                        type="text"
                        name="hops"
                        onChange={event => this.props.setValue(event.target.name, event.target.value)}
                        value={this.props.input.hops}
                    />
                </label>
                <label>
                    malt
                    <input
                        type="text"
                        name="malt"
                        onChange={event => this.props.setValue(event.target.name, event.target.value)}
                        value={this.props.input.malt}
                    />
                </label>
                <label>
                    food
                    <input
                        type="text"
                        name="food"
                        onChange={event => this.props.setValue(event.target.name, event.target.value)}
                        value={this.props.input.food}
                    />
                </label>
                <input
                    type="button"
                    value="Search"
                    onClick={() => {
                        this.props.getItems();
                    }}
                />
                <input
                    type="button"
                    value="Clear"
                    onClick={() => {
                        this.props.resetForm();
                    }}
                />
                <input
                    type="button"
                    value="Get random beer"
                    onClick={() => {
                        this.props.getRandomItem()
                    }}
                />
            </form>
        );
    }
}

export default connect(
    store =>
        ({
            input: store.formInput
        }),
    dispatch =>
        ({
            setValue: (propertyName, propertyValue) =>
                dispatch({
                    type: "SET_VALUE",
                    propertyName: propertyName,
                    propertyValue: propertyValue
                }),
            getItems: () => dispatch(loadItems),
            getRandomItem: () => dispatch(loadRandomItem),
            resetForm: () => dispatch({ type: "RESET_VALUE" })
        })
)(SearchForm);
