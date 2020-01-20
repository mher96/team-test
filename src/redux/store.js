import {createStore, applyMiddleware} from "redux";
import combinedReducers from "./reducers";

// import { composeWithDevTools } from 'redux-devtools-extension';

export const store = createStore(combinedReducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() );