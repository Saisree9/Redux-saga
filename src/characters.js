const initialState = {};

export default function characters (state = initialState, action) {
    switch (action.type) {
        case "RECEIVE_CHARACTERS":
            return Object.assign({}, action.payload);
        default:
            return state;
    }
};