import { call, put, takeEvery } from 'redux-saga/effects'
import { ASYNC_SET_USERS, usersCreator } from '../store/userReducer'

const fetchUsersFromApi = () => fetch('https://jsonplaceholder.typicode.com/users?_limit=10')

function* fetchUserWorker () {
    const data = yield call(fetchUsersFromApi)
    const dataJSON = yield call(()=>new Promise(res=>res(data.json())))
    yield put(usersCreator(dataJSON))
}

export function* userWatcher () {
    yield takeEvery(ASYNC_SET_USERS, fetchUserWorker)
}