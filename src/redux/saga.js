import { call } from 'file-loader';
import { takeEvery } from 'redux/saga/effects';

function* fetchUsersSaga(){
  yield call(fetch)
} 

export function* fetchUsers() {
  yield takeEvery("FETCH_USERS", fetchUsersSaga)
}