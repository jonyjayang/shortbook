import * as actionTypes from './actionTypes';
import {fromJS, set} from 'immutable'; 
const defaultState=fromJS({
    topicList: [],
	articleList: [],
    recommendList: [],
    writerList:[],
    totalpage:1,
    showScroll:false
    
});
const changeHomeData=(state,action)=>{
    return state.merge({
		topicList: fromJS(action.topicList),
		articleList: fromJS(action.articleList),
        recommendList: fromJS(action.recommendList),
        writerList: fromJS(action.writerList)
	});
}
const addHomeList=(state,action)=>{
    return state.merge({
        'articleList':state.get('articleList').concat(action.list),
        'totalpage': action.nextpage
	});
}
export default (state=defaultState,action)=>{
    switch(action.type){
        case actionTypes.CHANGE_HOME_DATA:
            return changeHomeData(state,action)
        case actionTypes.ADD_HOME_DATA:
            return addHomeList(state,action)
        case actionTypes.CHANGE_SHOWSCROLL:
            return state.set('showScroll',action.show)
        default:
            break;
            

    }
    return state;   
}