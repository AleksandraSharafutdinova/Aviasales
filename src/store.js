import reducer from "./reducers/reducer";
import reducerTabs from "./reducers/reducerTabs";
import reducerTickets from "./reducers/reducerTickets";
import reducerShowMore from "./reducers/reducerShowMore";
import { combineReducers, applyMiddleware, compose, createStore} from 'redux'
import thunk from 'redux-thunk';

export const rootReducer = combineReducers({
    reducerTickets,
    reducer,
    reducerTabs,
    reducerShowMore
})
const composeEnhancers =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        })
        : compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));


//const store = createStore(reducerTickets);


export default store;






