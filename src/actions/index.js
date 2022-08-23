export const GET_TRANSFERS = 'GET_TRANSFERS';
export const GET_TICKETS_ALL = 'GET_TICKETS_ALL';
export const GET_FILTERED_TICKETS = 'GET_FILTERED_TICKETS';
export const GET_FIVE_MORE_TICKETS = 'GET_FIVE_MORE_TICKETS';

export const getTicketsAll = (ticketsPart) => ({
    type: GET_TICKETS_ALL,
    ticketsPart
});

export const getCheckBoxTransfers = (newTransfers) => ({
    type: GET_TRANSFERS,
    payload: newTransfers
});

export const getFilteredTicketsTabs = (payload) => ({
    type: GET_FILTERED_TICKETS,
    payload
});

export const getMoreTickets = (payload) => ({
    type: GET_FIVE_MORE_TICKETS,
    payload
})