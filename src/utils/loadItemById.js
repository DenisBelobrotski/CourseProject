export default function loadItemById(dispatch, getState) {
    dispatch({ type: "SHOW_LOADING" });
    const state = getState();
    fetch(`https://api.punkapi.com/v2/beers/${state.showingItemId}`)
        .then(response => response.json())
        .then(data => {
            if (data.error === undefined) {
                dispatch({ type: "SET_ITEM", item: data[0] });
            }
            dispatch({ type: "HIDE_LOADING" });
        });
}
