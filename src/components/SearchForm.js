import React, { Component } from "react";
import { connect } from "react-redux";
import loadItems from "../utils/loadItems";

class SearchForm extends Component {

    constructor(props) {
        super(props);
        this.setValuesFromPath = this.setValuesFromPath.bind(this);
        this.setValuesFromPath();
    }

    setValuesFromPath() {
        if (this.props.request !== undefined) {
            this.props.setInput(JSON.parse(this.props.request));
            this.props.getItems();
        }
    }

    render() {
        const numberProps = [
            "abv_gt",
            "abv_lt",
            "ibu_gt",
            "ibu_lt",
            "ebc_gt",
            "ebc_lt"
        ];
        const textProps = [
            "beer_name",
            "yeast", "hops",
            "malt",
            "food"
        ];
        const dateProps = [
            "brewed_before",
            "brewed_after"
        ];

        return (
            <form className="search-form">
                {
                    numberProps.map(prop =>
                        <label>
                            {prop}
                            <input
                                type="number"
                                name={prop}
                                onChange={event => this.props.setValue(event.target.name, event.target.value)}
                                value={this.props.input[prop]}
                            />
                        </label>
                    )
                }
                {
                    textProps.map(prop =>
                        <label>
                            {prop}
                            <input
                                type="text"
                                name={prop}
                                onChange={event => this.props.setValue(event.target.name, event.target.value)}
                                value={this.props.input[prop]}
                            />
                        </label>
                    )
                }
                {
                    dateProps.map(prop =>
                        <label>
                            {prop}
                            <input
                                type="date"
                                name={prop}
                                onChange={event => this.props.setValue(event.target.name, event.target.value)}
                                value={this.props.input[prop]}
                            />
                        </label>
                    )
                }
                <a
                    href={"/" + JSON.stringify(this.props.input)}
                >
                    <input
                        type="button"
                        value="Search"
                    />
               </a>
               <a
                    href={"/"}
                >
                    <input
                        type="button"
                        value="Clear"
                        onClick={() => {
                            this.props.resetForm();
                        }}
                    />
               </a>
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
            setInput: (input) => dispatch({
                type: "SET_ALL_VALUES",
                input: input
            }),
            getItems: () => dispatch(loadItems),
            resetForm: () => dispatch({ type: "RESET_VALUE" })
        })
)(SearchForm);
