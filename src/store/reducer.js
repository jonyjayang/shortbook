import {combineReducers} from 'redux-immutable';//将小的reducer组合到一起
import {reducer as headerReducer} from '../common/header/store';


const reducer= combineReducers({
    header:headerReducer
});
export default reducer;