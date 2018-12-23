import * as actionTypes from './actionTypes';
import {
    fromJS,
} from 'immutable';
const defaultState = fromJS({
  detailList:'',

});

export default (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_DETAIL_DATA:
            return state.merge({
                detailList: action.detailList
            })
        default:
            break;


    }
    return state;
}