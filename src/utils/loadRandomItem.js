export default function loadItems(dispatch) {    
    dispatch({ type: "SHOW_LOADING" });
    const request = "https://api.punkapi.com/v2/beers/random";
    fetch(request)
        .then(response => response.json())
        .then(data => {
            dispatch({ type: "HIDE_LOADING" });
            if (data.length > 0) {
                dispatch({ type: "SET_ITEMS", items: data });
                dispatch({ type: "HIDE_MULTIPLE_ITEMS" });
            }
        });
}
