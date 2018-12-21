import * as actionTypes from './actionTypes';
import {fromJS} from 'immutable'; 
const defaultState=fromJS({
    topicList: [],
	articleList: [],
    recommendList: [],
    writerList:[]
});
const changeHomeData=(state,action)=>{
    return state.merge({
		topicList: fromJS(action.topicList),
		articleList: fromJS(action.articleList),
        recommendList: fromJS(action.recommendList),
        writerList: fromJS(action.writerList)
	});
}
export default (state=defaultState,action)=>{
    switch(action.type){
        case actionTypes.CHANGE_HOME_DATA:
            return changeHomeData(state,action)
        default:
            break;
            

    }
    return state;   
}