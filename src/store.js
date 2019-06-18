import { createStore, combineReducers } from 'redux';

let searchHistoryReducer = function(state = [], action) {
    if (action.type === 'PUSH_SEARCH_HISTORY') {
        let newState = state.concat([action.query]);
        return newState;
    }
    return state;
}

const redusers = combineReducers({
    searchHistory: searchHistoryReducer,
});

const store = createStore(redusers);

export default store;
