import {

    START_DOWNLOAD_TEST ,
    DOWNLOAD_TEST_SUCCESS ,
    DOWNLOAD_TEST_ERROR 
} from '../types';

const initialState = {
    items: [],
    error: null,
    loading: false
}

export default function(state = initialState, action) {
    switch(action.type) {
        case DOWNLOAD_TEST_SUCCESS:
            return {
                ...state,
                loading: false,
                items: [ action.payload, ...state.items]
            }
        case START_DOWNLOAD_TEST: 
        return {
            ...state,
            loading: action.payload
        }
        default:
            return state;
    }
} 