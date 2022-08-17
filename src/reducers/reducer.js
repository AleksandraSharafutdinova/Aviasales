import { GET_TRANSFERS } from "../actions";

const initialState = {
    checkBoxTransfers: [
        { label: 'Все', id: 'all', isChecked: true, },
        { label: 'Без пересадок', id: 'noTransfers', isChecked: true, },
        { label: '1 пересадка',  id: 'one',  isChecked: true, },
        { label: '2 пересадки',  id: 'two',  isChecked: true, },
        { label: '3 пересадки', id: 'three', isChecked: true,},
    ],
};

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case GET_TRANSFERS:
            return {...state, checkBoxTransfers: action.payload};

        default:
            return state;
    }
};

export default reducer;