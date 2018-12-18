import * as actionType from './actionType';
import {fromJS} from 'immutable'; 
const defaultState=fromJS({
    focused:false,
    list:[],
    mouseIn:false,
    //分页
    page:1,
    pagetotal:5
});

export default (state=defaultState,action)=>{
    switch(action.type){
        case actionType.SERACH_FOCUS:
        //immutable对象的set方法，会结合之前immutable对象的值
        //和设置的值，返回一个全新的对象
            return state.set('focused',true);
        case actionType.SERACH_BLUR:
            return state.set('focused', false);
        case actionType.CHANGELIST:
            return state.set('list',action.data);
        case actionType.SERACH_ENTER:
            return state.set('mouseIn',true);
        case actionType.SERACH_LEAVE:
            return state.set('mouseIn',false);
        case actionType.SERACH_CHANGE:
            return state.set('page',action.page);
        default:
            break;
            

    }
    return state;   
}