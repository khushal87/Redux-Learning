export const UserReducer = (state = {
    userName: "ABC", age: 19
}, action) => {
    switch (action.type) {
        case "SET_NAME_FULFILLED":
            state = {
                ...state,
                userName: action.payload
            };
            break;
        case "SET_AGE":
            state = {
                ...state,
                age: action.payload
            };
            break;
        default:
            console.log("error")
    }
    return state;
}