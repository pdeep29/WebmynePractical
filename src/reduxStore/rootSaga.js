import { all } from 'redux-saga/effects'
import { watchAbout } from '../screens/AboutScreen/about.saga';


function* rootSaga() {
    yield all([
        watchAbout(),
    ])
}

export default rootSaga;