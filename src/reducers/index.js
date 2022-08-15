const initialState = {
    tickets: []
};

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case "TICKETS_LOADED":
            return {
                tickets: action.payload
            }
    }

    return state;
};

export default reducer;