import React, { Component, Fragment } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import loadItemById from "../utils/loadItemById";

const Header = styled.h2`
    padding: 10px;
    border: solid red 2px;
`;

const Description = styled.p`
    padding: 5px;
    background-color: yellow;
`;

const FirstBrewed = styled.h3`
    padding: 7px;
    border: 5px dotted orange;
    border-radius: 30%;
`;

class DetailedItemInfo extends Component {    

    componentDidMount() {        
        this.props.setId(this.props.match.params.id);
        this.props.getItem();
    }

    render() {
        return (
            <div className="detailed-info">
                {
                    this.props.showingItem === null ? <p>Loading...</p> :
                        <Fragment>
                            <Header>{this.props.showingItem.name}</Header>
                            <Description>{this.props.showingItem.description}</Description>
                            <img src={this.props.showingItem.image_url} alt={this.props.showingItem.name} />
                            <FirstBrewed>First brewed:{this.props.showingItem.first_brewed}</FirstBrewed>
                            <h4>{this.props.showingItem.tagline}</h4>
                            <ul>
                                <li>Food:</li>
                                {
                                    this.props.showingItem.food_pairing.map(food => <li key={food}>{food}</li>)
                                }
                            </ul>
                        </Fragment>
                }
            </div>
        );
    }
}

export default connect(
    store => ({       
        showingItemId: store.showingItemId,
        showingItem: store.showingItem
    }),
    dispatch => ({
        setId: id => dispatch({ type: "SET_ITEM_ID", id: id }),       
        getItem: () => dispatch(loadItemById)
    })
)(DetailedItemInfo);
