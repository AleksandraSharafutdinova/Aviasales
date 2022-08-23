import {GET_FILTERED_TICKETS} from "../actions";

const initialState = {
    filteredTabs: [
        {label: 'Самый дешевый', id: 'cheapest', isActive: false},
        {label: 'Самый быстрый', id: 'fastest', isActive: false},
    ],
}


const reducerTabs = (state = initialState, action) => {

    switch (action.type) {
         case GET_FILTERED_TICKETS:
             return {...state, filteredTabs: action.payload}

        default:
            return state;
    }
};

export default reducerTabs;