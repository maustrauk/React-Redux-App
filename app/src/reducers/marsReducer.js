import {FETCHING_QUOTE_START} from './../actions/marsActions';

export const initState = {
    API_Data: {},
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
        default:
            return state;
    }
}