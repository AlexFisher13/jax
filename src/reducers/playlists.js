const initialState = [
    'My work playlist',
    'My home playlist'
];

export default function playlist(state = initialState, action) {
    if (action.type === "ADD_PLAYLIST") {
        return [
            ...state,
            action.payload
        ]
    } else if (action.type === "DELETE_PLAYLIST") {
        return state;
    }
    return state;
}