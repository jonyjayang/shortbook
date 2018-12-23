import axios from 'axios';
import * as actionTypes from './actionTypes';
import {
    fromJS
} from 'immutable';

const  changeDetail=(result)=>({
      type: actionTypes.CHANGE_DETAIL_DATA,
       detailList:result
}
)
    


export const getDetailList = (id) => {
  return (dispatch)=>{
      axios.get('/api/detail.json?id=' + id).then((res) => {
            const result=res.data.data;
            dispatch(changeDetail(result))
      }).catch((err)=>{
          console.log(err);

      })
  }

}
