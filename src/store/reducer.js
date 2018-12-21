import {combineReducers} from 'redux-immutable';//将小的reducer组合到一起
import {reducer as headerReducer} from '../common/header/store';
import {reducer as homereducer} from '../pages/Home/store';


const reducer= combineReducers({
    header:headerReducer,
    home:homereducer
});
export default reducer;