import ReduxConstants from "../../utils/reduxConstants"


export const getPlayAbout = (data, onSuccess, onError) => {
    console.log('getPlayAbout', data)
    return (
        {
            type: ReduxConstants.GET_PLAY_ABOUT,
            data,
            onSuccess,
            onError
        })
}
export const setPlayAbout = (data) => {
    return (
        {
            type: ReduxConstants.SET_PLAY_ABOUT,
            data
        })
}
export const getLearAbout = (data, onSuccess, onError) => {
    return (
        {
            type: ReduxConstants.GET_LEARN_ABOUT,
            data,
            onSuccess,
            onError
        })
}
export const setLearAbout = (data) => {
    return (
        {
            type: ReduxConstants.SET_LEARN_ABOUT,
            data
        })
}
