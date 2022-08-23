import {GET_TICKETS_ALL} from "../actions";

const initialState = {
    tick: []
};

const reducerTickets = (state = initialState, action) => {

    switch (action.type) {
        case GET_TICKETS_ALL:
             return {... state, tick: action.ticketsPart};

        default:
            return state;
    }
};

export default reducerTickets;

