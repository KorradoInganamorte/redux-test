import { put } from "redux-saga/effects"
import { increment } from "../store/CounterSlice"

const delay = (ms) => new Promise(res => setTimeout(res, ms))

function* incrementWorker() {
    yield delay(1000)
    yield put(increment())
}

function* decrementWorker() {
    
}

function* countWatcher () {

}