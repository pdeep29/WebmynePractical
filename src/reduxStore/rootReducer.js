import { combineReducers } from 'redux';
import { reducer as network } from 'react-native-offline';
import { AboutReducer } from '../screens/AboutScreen/about.reducer';


const rootReducer = combineReducers({

    infoTab: AboutReducer,
    //
    network
})


export default rootReducer