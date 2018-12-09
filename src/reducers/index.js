import { combineReducers } from "redux";

const initialStateFormInput = {
    abv_gt: "",
    abv_lt: "",
    ibu_gt: "",
    ibu_lt: "",
    ebc_gt: "",
    ebc_lt: "",
    beer_name: "",
    yeast: "",
    brewed_before: "",
    brewed_after: "",
    hops: "",
    malt: "",
    food: "",
}

export const rootReducer = combineReducers({
    formInput: (state = initialStateFormInput, action) => {
        if (action.type === "SET_VALUE") {
            switch (action.propertyName) {
                case "abv_gt": {
                    return {
                        ...state,
                        abv_gt: action.propertyValue
                    }
                }
                case "abv_lt": {
                    return {
                        ...state,
                        abv_lt: action.propertyValue
                    }
                }
                case "ibu_gt": {
                    return {
                        ...state,
                        ibu_gt: action.propertyValue
                    }
                }
                case "ibu_lt": {
                    return {
                        ...state,
                        ibu_lt: action.propertyValue
                    }
                }
                case "ebc_gt": {
                    return {
                        ...state,
                        ebc_gt: action.propertyValue
                    }
                }
                case "ebc_lt": {
                    return {
                        ...state,
                        ebc_lt: action.propertyValue
                    }
                }
                case "beer_name": {
                    return {
                        ...state,
                        beer_name: action.propertyValue
                    }
                }
                case "yeast": {
                    return {
                        ...state,
                        yeast: action.propertyValue
                    }
                }
                case "brewed_before": {
                    return {
                        ...state,
                        brewed_before: action.propertyValue
                    }
                }
                case "brewed_after": {
                    return {
                        ...state,
                        brewed_after: action.propertyValue
                    }
                }
                case "hops": {
                    return {
                        ...state,
                        hops: action.propertyValue
                    }
                }
                case "malt": {
                    return {
                        ...state,
                        malt: action.propertyValue
                    }
                }
                case "food": {
                    return {
                        ...state,
                        food: action.propertyValue
                    }
                }
                default: return state;
            }
        }
        if (action.type === "RESET_VALUE") {
            return {
                abv_gt: "",
                abv_lt: "",
                ibu_gt: "",
                ibu_lt: "",
                ebc_gt: "",
                ebc_lt: "",
                beer_name: "",
                yeast: "",
                brewed_before: "",
                brewed_after: "",
                hops: "",
                malt: "",
                food: "",
            };
        }
        return state;
    },
    items: (state = [], action) => {
        if (action.type === "SET_ITEMS") {
            return action.items;
        }      

        return state;
    },
    isLoading: (state = false, action) => {
        if (action.type === "SHOW_LOADING") return true;
        if (action.type === "HIDE_LOADING") return false;

        return state;
    },
    page: (state = 1, action) => {
        if (action.type === "NEXT_PAGE") return state + 1;
        if (action.type === "PREV_PAGE") return state - 1 >= 1 ? state - 1 : state;
        
        return state;
    },
    showingItemId: (state = 0, action) => {
        if (action.type === "SET_ITEM_ID") return action.id;

        return state;
    },
    showingItem: (state = null, action) => {
        if (action.type === "SET_ITEM") return action.item;

        return state;
    }
})
