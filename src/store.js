//import { configureStore } from '@reduxjs/toolkit'
import reducer from "./reducers/reducer";
import reducerTabs from "./reducers/reducerTabs";
import reducerTickets from "./reducers/reducerTickets";
import { combineReducers, applyMiddleware, compose, } from 'redux'
import {createStore} from 'redux';
import thunk from 'redux-thunk';

export const rootReducer = combineReducers({
    reducerTabs,
    reducerTickets,
    reducer
})

// const store = configureStore({
//     reducer: {rootReducer}
// })

// const store = configureStore({    эта штука работает, но она одна
//     reducer: {reducer}
// })

const composeEnhancers =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        })
        : compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));


export default store;






