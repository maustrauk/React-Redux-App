import axios from 'axios';

export const FETCHING_QUOTE_START = 'FETCHING_QUOTE_START';

export const getQuote = () => {
    return {
        type: FETCHING_QUOTE_START
    }
}