import {FETCHING_QUOTE_START,FETCHING_QUOTE_SUCCESS,FETCHING_QUOTE_FAIL} from './../actions/marsActions';

export const initState = {
    photos: [],
    error: "",
    isFetching: false
}

export const marsReducer = (state = initState, action) => {
    switch (action.type) {
        case(FETCHING_QUOTE_START):
        return ({
            ...state,
            isFetching: true,
            error: ""
        });
        case(FETCHING_QUOTE_SUCCESS):
        return({
            ...state,
            photos: action.payload,
            isFetching: false
        });
        case(FETCHING_QUOTE_FAIL):
        return({
            ...state,
            error: action.payload,
            isFetching: false
        })
        default:
            return state;
    }
}