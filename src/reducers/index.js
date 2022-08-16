// const initialState = {
//     sortButtons: [
//         { name: 'inexpensive', label: 'Самый дешевый', isActive: true },
//         { name: 'quick', label: 'Самый быстрый', isActive: false },
//         { name: 'optimal', label: 'Оптимальный', isActive: false },
//     ],
//
//     filterItems: [
//         { label: 'Все', name: 'all', isCheck: true },
//         { label: 'Без пересадок', name: '0', isCheck: true },
//         { label: '1 пересадка', name: '1', isCheck: true },
//         { label: '2 пересадки', name: '2', isCheck: true },
//         { label: '3 пересадки', name: '3', isCheck: true },
//     ],
//
//     searchId: '',
//
//     // firstPacketTickets: [],
//
//     packetTickets: [],
//
//     ticketsCounter: 5,
//
//     isStop: false,
//
//     error: null,
// };
//
// const reduser = (state = initialState, action) => {
//     switch (action.type) {
//         case 'UPDATE_SORT_BUTTONS':
//             return {
//                 ...state,
//                 sortButtons: action.payload,
//             };
//
//         case 'UPDATE_FILTERS':
//             return {
//                 ...state,
//                 filterItems: action.payload,
//             };
//
//         case 'UPDATE_SEARCH_ID':
//             return {
//                 ...state,
//                 searchId: action.payload,
//             };
//
//         case 'UPDATE_PACKET_TICKETS':
//             return {
//                 ...state,
//                 packetTickets: [...state.packetTickets, ...action.payload],
//             };
//
//         case 'UPDATE_TICKETS_COUNTER':
//             return {
//                 ...state,
//                 ticketsCounter: action.payload,
//             };
//
//         case 'TOGGLE_STOP':
//             return {
//                 ...state,
//                 isStop: action.payload,
//             };
//
//         case 'TICKETS_ERROR':
//             return {
//                 ...state,
//                 error: action.payload,
//             };
//
//         default:
//             return state;
//     }
// }
//
// export default reducer;

import {GET_TRANSFERS} from "../actions";

const initialState = {
    checkBoxTransfers: [
        {
            label: 'Все',
            id: 'all',
            isChecked: true,
        },
        {
            label: 'Без пересадок',
            id: 'noTransfers',
            isChecked: true,
        },
        {
            label: '1 пересадка',
            id: 'one',
            isChecked: true,
        },
        {
            label: '2 пересадки',
            id: 'two',
            isChecked: true,
        },
        {
            label: '3 пересадки',
            id: 'three',
            isChecked: true,
        },
    ]
};

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case GET_TRANSFERS:
            return {...state, checkBoxTransfers: action.payload}

        default:
            return state;
    }
};

export default reducer;