const defaultState = { users: [] }

export const SET_USERS = "SET_USERS"

export default function userReducer (state = defaultState, action) {
    switch (action.type) {
        case SET_USERS: return { ...state, users: action.payload }
        default: return state
    }
}

export const usersCreator = (payload) => ({ type: SET_USERS, payload})