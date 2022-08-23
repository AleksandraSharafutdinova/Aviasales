import {GET_FIVE_MORE_TICKETS} from "../actions";

const initialState = {
    numberTickets: 5
};

const reducerShowMore = (state = initialState, action) => {
    switch (action.type) {
        case GET_FIVE_MORE_TICKETS:
            return {... state, numberTickets: action.payload};

        default:
            return state;
    }
}

export default reducerShowMore;