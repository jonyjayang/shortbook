import {combineReducers} from 'redux-immutable';//将小的reducer组合到一起
import {reducer as headerReducer} from '../common/header/store';
import {reducer as homereducer} from '../pages/Home/store';
import {reducer as detailreducer} from '../pages/Detail/store';
import {reducer as Loginreducer} from '../pages/Login/store';


const reducer= combineReducers({
    header:headerReducer,
    home:homereducer,
    detail: detailreducer,
    login: Loginreducer
});
export default reducer;