// import { createStore } from "redux";
// import reducer from "./reducers";
//
// const store = createStore(reducer);
//
// export default store;

import { configureStore } from '@reduxjs/toolkit'
import reducer from "./reducers";

const store = configureStore({
    reducer: reducer,
})

export default store;


// export const store = configureStore({
//     reducer: {},
// })