import {
    LOGIN_SENT,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT_SENT, LOGOUT_FAILURE, LOGOUT_SUCCESS
} from "../actions/types";

const initialState = {
    firstname: "",
    middlename: "",
    lastname: "",
    email: "",
    is_admin: false,
    id: -1,
    loggedIn: false
};
const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SENT:
            return state;
        case LOGIN_SUCCESS:
            return { ...state, loggedIn: true, ...action.payload };
        case LOGIN_FAILURE:
            return { ...state, loggedIn: false, ...action.payload };
        case LOGOUT_SENT:
            return state;
        case LOGOUT_FAILURE:
            return state;
        case LOGOUT_SUCCESS:
            return { ...state, ...initialState }
        default:
            return state;
    }
};

export default userReducer;