const initialState = {
    sortValue: ''
}

export const sort = (state = initialState, action) => {
    switch (action.type) {
        case "SORT_DATA":
            return {
                ...state,
                sortValue: action.payload
            }
        default:
            return state;
    }
}