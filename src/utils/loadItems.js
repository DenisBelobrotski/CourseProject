import createRequest from "./createRequest";

export default function loadItems(dispatch, getState) {    
    dispatch({ type: "SHOW_LOADING" });    
    const state = getState();
    const request = createRequest(state.formInput, state.page);
    fetch(request)
        .then(response => response.json())
        .then(data => {
            dispatch({ type: "HIDE_LOADING" });
            if (data.length > 0) {
                dispatch({ type: "SET_ITEMS", items: data });
                dispatch({ type: "SHOW_MULTIPLE_ITEMS" });
            } else {
                dispatch({ type: "PREV_PAGE" });
            }
        });
}
