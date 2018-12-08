import React, { Component } from "react";
import { connect } from "react-redux";

class DetailedItemInfo extends Component {
    render() {
        const { name, description, image_url, first_brewed, tagline, food_pairing } = this.props.item;
        return (
            <div className="detailed-info">
                <h2>{name}</h2>
                <p>{description}</p>
                <img src={image_url} alt={name} />
                <p>First brewed:{first_brewed}</p>
                <p>{tagline}</p>
                <ul>
                    <li>Food</li>
                    {
                        food_pairing.map(food => <li key={food}>{food}</li>)
                    }
                </ul>

                <input
                    type="button"
                    value="Hide"
                    onClick={() => this.props.hideInfo()}
                />
            </div>
        );
    }
}

export default connect(
    () => ({}),
    dispatch =>
        ({
            hideInfo: () => dispatch({ type: "HIDE_DETAILED_ITEM" })
        })
)(DetailedItemInfo);
