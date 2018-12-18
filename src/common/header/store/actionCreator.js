import * as actionType from './actionType'
import {fromJS} from 'immutable' 
import axios from 'axios'
const changeList=(data)=>({
    type:actionType.CHANGELIST,
    data:fromJS(data)
    //由于在reducer中是使用immutable对象的set函数来对state进行改变，其数组为fromJS类型的数组
    //此时如果传递一个普通数组过去的话会报错，所以需要先转换成fromJS数组才可以进行传值
});
//不需要爆出的常量元素通常放在页面的最上面或者最下面
export const searchFocus=()=>({
    type: actionType.SERACH_FOCUS
});
export const searchBlur=()=>({
    type: actionType.SERACH_BLUR
});
export const searchEnter=()=>({
    type: actionType.SERACH_ENTER
});
export const searchLeave=()=>({
    type: actionType.SERACH_LEAVE
});
export const changepage=(page)=>({
    type: actionType.SERACH_CHANGE,
    page:page
});
export const getList=()=>{
    return(dispatch)=>{
        axios.get('/api/headerList.json').then((res)=>{
            const data=res.data;
            dispatch(changeList(data.data));
        }).catch(()=>{
            console.log('error');
        })
    }
}