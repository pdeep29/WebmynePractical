
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './rootReducer'; // replace with your actual root reducer
import rootSaga from './rootSaga'; // replace with your actual root saga


// Create saga middleware
const sagaMiddleware = createSagaMiddleware();

// Create the store
export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false, }).concat(sagaMiddleware),

});

// Run your sagas
sagaMiddleware.run(rootSaga);

export default store
