import * as actionTypes from './actionTypes';
import {fromJS} from 'immutable'
const defaultState = fromJS({
   login:false

});

export default (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.ISLOGIN:
            return state.merge({login: action.value})
        case actionTypes.LOGOUT:
            return state.merge({login: action.value})
        default:
            break;


    }
    return state;
}