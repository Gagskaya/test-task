const initialState = {
    orderValue: 'increase'
}

export const order = (state = initialState, action) => {
    switch (action.type) {
        case "ORDER_DATA":
            return {
                ...state,
                orderValue: action.payload
            }
        default:
            return state;
    }
}