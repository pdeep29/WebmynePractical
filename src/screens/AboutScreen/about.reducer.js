import ReduxConstants from "../../utils/reduxConstants"


const initialState = {
    AboutPlayData: null,
    AboutLearnData: null,
}

export function AboutReducer(state = initialState, action) {

    switch (action.type) {
        case ReduxConstants.SET_PLAY_ABOUT:
            return {
                ...state,
                AboutPlayData: action.data,
            }
        case ReduxConstants.SET_LEARN_ABOUT:
            return {
                ...state,

                AboutLearnData: action.data,
            }
        default:
            return state
    }
}