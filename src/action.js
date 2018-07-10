import axios from 'axios'
import {call, put} from "redux-saga/effects"

const API_END_POINT = "https://swapi.co/api/people";

const getCharacters = () => {
    return axios.get(API_END_POINT)
}

export function* fetchCharacters() {
    try {
        const res = yield call(getCharacters)
        yield put({type: "RECEIVE_CHARACTERS", payload: res.data.results})
    }
    catch (e) {
        console.log('error', e)
    }
}