import { takeEvery, call, put } from "redux-saga/effects";
import { USERREQUEST } from "../action/index";
import axios from "axios";
import {fetchDataSuccess} from '../action/index'

function* fetchRequest(){
    try{
        const url = 'https://jsonplaceholder.typicode.com/users'
        const response = yield call(()=> axios.get(url));
        console.log(response);
        yield put(fetchDataSuccess(response.data))
    }
    catch(error){
        console.log(error)
    }
}

export function* saga(){
    yield takeEvery("USERREQUEST", fetchRequest)
}