import React, { Component, Fragment } from "react";
import PaginationButtons from "./PaginationButtons";
import { connect } from "react-redux"

class ItemsList extends Component {
    render() {
        return (
            <div className="right-part">
                {
                    this.props.items.length > 0 ?
                        <Fragment>
                            {
                                this.props.isShowingMultipleItems && <PaginationButtons />
                            }
                            <ol>
                                {
                                    this.props.items.map(item =>
                                        <li key={item.id}>
                                            <h5>{item.name}</h5>
                                            <h6>{item.first_brewed}</h6>
                                            <p>{item.description}</p>
                                            <a href={"/about/" + item.id}>More...</a>                                   
                                        </li>
                                    )
                                }
                            </ol>
                        </Fragment> : 
                        this.props.isLoading ?
                        <p>Loading ... </p> : <p>Nothing to show</p>
                }
            </div>
        );
    }
}

export default connect(
    store =>
        ({
            items: store.items,
            isLoading: store.isLoading,
            isShowingMultipleItems: store.isShowingMultipleItems
        })
)(ItemsList);
