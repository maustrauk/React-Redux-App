import axios from 'axios';

import {MARS_PHOTOS_URL,CURIOSITY_PHOTOS, API_KEY, CAMERA} from './../mic';

export const FETCHING_QUOTE_START = 'FETCHING_QUOTE_START';
export const FETCHING_QUOTE_SUCCESS = 'FETCHING_QUOTE_SUCCESS';
export const FETCHING_QUOTE_FAIL = 'FETCHING_QUOTE_FAIL';

export const getQuote = () => {
    return (dispatch => {

        dispatch({type:FETCHING_QUOTE_START});

        axios
            .get(`${MARS_PHOTOS_URL}${CURIOSITY_PHOTOS}api_key=${API_KEY}&sol=1000&camera=${CAMERA}`)
            .then(res=> {
                dispatch({type:FETCHING_QUOTE_SUCCESS, payload:res.data.photos});
            })
            .catch(err => {
                dispatch({type:FETCHING_QUOTE_FAIL, payload: err});
            });
    });
}