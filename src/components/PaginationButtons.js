import React, { Component } from "react";
import { connect } from "react-redux";
import loadItems from "../utils/loadItems";

class PaginationButtons extends Component {
    render() {
        return (
            <div className="pagination">
                <input
                    type="button"
                    value="previous page"
                    onClick={() => {
                        this.props.prevPage();
                        if (this.props.page > 1) {
                            this.props.loadItems();
                        }
                    }}
                />
                <p>{this.props.page}</p>
                <input
                    type="button"
                    value="next page"
                    onClick={() => {
                        this.props.nextPage();
                        this.props.loadItems();
                    }}
                />
            </div>
        );
    }
}

export default connect(
    store =>
        ({
            page: store.page
        }),
    dispatch =>
        ({
            nextPage: () => dispatch({ type: "NEXT_PAGE" }),
            prevPage: () => dispatch({ type: "PREV_PAGE" }),
            loadItems: () => dispatch(loadItems)
        })
)(PaginationButtons);
