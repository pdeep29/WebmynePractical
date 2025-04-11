import { put, takeLatest, call } from 'redux-saga/effects'
import { api, setToken } from '../../api'
import ApiConstants from '../../api/ApiConstant'
import * as AboutActions from './about.action'
import reduxConstants from '../../utils/reduxConstants'

function* fetchAboutPlay(action) {
    const { data, onSuccess, onError } = action

    try {
        console.log('fetchAboutPlay', data)
        let apiCall = yield call(api.post, ApiConstants.PLAY_LOCATION, data)
        console.log('apiCall', apiCall)
        if (apiCall.data && apiCall.data) {
            console.info('successsuccesssuccesssuccesssuccess', apiCall.data)

            onSuccess(apiCall.data)
            yield put(AboutActions.setPlayAbout(apiCall.data))
        }
        else if (apiCall && apiCall.status != 200) {
            onError(apiCall)

        }

    } catch (error) {

        onError(error)
    }
}
function* fetchAboutLearn(action) {
    const { data, onSuccess, onError } = action
    try {
        let apiCall = yield call(api.post, ApiConstants.EVENT_LEARN, data)
        console.log('apiCall', apiCall)

        if (apiCall.data && apiCall.data) {
            console.log('successsuccesssuccesssuccesssuccess', apiCall, apiCall.data)
            onSuccess(apiCall.data)
            yield put(AboutActions.setLearAbout(apiCall.data))

        }
        else if (apiCall && apiCall.status != 200) {

            onError(apiCall)
        }

    } catch (error) {
        onError(error)
    }
}
export function* watchAbout() {
    yield takeLatest(reduxConstants.GET_PLAY_ABOUT, fetchAboutPlay)
    yield takeLatest(reduxConstants.GET_LEARN_ABOUT, fetchAboutLearn)

}
