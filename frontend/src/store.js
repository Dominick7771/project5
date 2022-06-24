import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import rootReducer from "./modules/reducers"
import createSagaMiddleware from 'redux-saga';
import apiSaga from "./modules/saga";


const sagaMiddleware = createSagaMiddleware();


const store = configureStore({
    reducer: rootReducer,
    middleware: [...getDefaultMiddleware({thunk: false}), sagaMiddleware],
});

sagaMiddleware.run(apiSaga)

export default store;


