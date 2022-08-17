import {GET_TICKETS_ALL} from "../actions";

const initialState = {
    tickets: [],

}

const reducerTickets = (state = initialState, action) => {

    switch (action.type) {
         case GET_TICKETS_ALL:
             return {...state, tickets: action.payload}

        default:
            return state;
    }
};

export default reducerTickets;