const initialState = {
    orderName: 'increase'
}

export const order = (state = initialState, action) => {
    switch (action.type) {
        case "ORDER_DATA":
            return {
                ...state,
                orderName: action.payload
            }
        default:
            return state;
    }
}