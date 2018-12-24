import axios from 'axios';
import * as actionTypes from './actionTypes';
const changeLogin=()=>({
    type:actionTypes.ISLOGIN,
    value:true
})

export const checklogin = (account, password) => {
    return (dispatch)=>{
        axios.get('/api/login.json').then((res)=>{
                const result=res.data.data;
                console.log(result);
                if(result.name===account&&result.password===password){
                    dispatch(changeLogin());
                }else{
                    alert('账号密码出错')
                    return false;
                }
        }).catch((err)=>{
            console.log(err)

        })
    }
}
export const logout = () => ({
	type: actionTypes.LOGOUT,
	value: false
})
