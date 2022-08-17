import {GET_FILTERED_TICKETS} from "../actions";

const initialState = {
    filteredTabs: [
        {label: 'Самый дешевый', id: 'cheapest', isActive: true},
        {label: 'Самый быстрый', id: 'fastest', isActive: false},
        {label: 'Оптимальный', id: 'optimal', isActive: false}
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