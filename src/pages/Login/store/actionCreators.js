import axios from 'axios';
import * as actionTypes from './actionTypes';
import {
    fromJS
} from 'immutable';

export const checklogin = (account, password) => {
    return (dispatch)=>{
        axios.get('/api/login.json').then((res)=>{

        }).catch((err)=>{
            console.log(err)

        })
    }
}