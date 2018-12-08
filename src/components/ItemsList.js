import React, { Component, Fragment } from "react";
import PaginationButtons from "./PaginationButtons";
import { connect } from "react-redux"

class ItemsList extends Component {
    render() {
        return (
            <div className="right-part">
                {
                    this.props.isLoading ? <p>Loading ... </p> : this.props.items.length > 0 ?
                        <Fragment>
                            {
                                this.props.items.length === 25 && <PaginationButtons />
                            }
                            <ol>
                                {
                                    this.props.items.map(item =>
                                        <li key={item.id}>
                                            {item.name}
                                            <input
                                                type="button"
                                                value="Get info"
                                                onClick={() => this.props.showInfo(item)}
                                            />
                                        </li>
                                    )
                                }
                            </ol>
                        </Fragment> : <p>Nothing to show</p>
                }
            </div>
        );
    }
}

export default connect(
    store =>
        ({
            items: store.items,
            isLoading: store.isLoading
        }),
    dispatch =>
        ({
            showInfo: item => dispatch({ type: "SET_DETAILED_ITEM", item: item })
        })
)(ItemsList);
