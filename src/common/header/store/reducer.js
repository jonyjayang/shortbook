import * as actionType from './actionType';
import {fromJS} from 'immutable'; 
const defaultState=fromJS({
    focused:false
});

export default (state=defaultState,action)=>{
    switch(action.type){
        case actionType.SERACH_FOCUS:
        //immutable对象的set方法，会结合之前immutable对象的值
        //和设置的值，返回一个全新的对象
            return state.set('focused',true);
        case actionType.SERACH_BLUR:
            return state.set('focused', false);
        default:
            break;
            

    }
    return state;   
}