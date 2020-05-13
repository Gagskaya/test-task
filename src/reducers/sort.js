const initialState = {
    sortName: 'id'
}

export const sort = (state = initialState, action) => {
    switch (action.type) {
        case "SORT_DATA":
            return {
                ...state,
                sortName: action.payload
            }
        default:
            return state;
    }
}