import {
    LOGIN_SENT, LOGIN_SUCCESS, LOGIN_FAILURE,
    LOGOUT_SENT, LOGOUT_SUCCESS, LOGOUT_FAILURE,
    REGISTER_SENT, REGISTER_SUCCESS, REGISTER_FAILURE
} from './types';

export const loginAction = (email, password) => dispatch => {
    dispatch({ type: LOGIN_SENT })
    fetch('/users/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email, password
        })
    })
        .then(resp => resp.json())
        .then(data => {
            if (data.success) {
                dispatch({ type: LOGIN_SUCCESS, payload: data.user })
            } else {
                dispatch({ type: LOGIN_FAILURE, payload: data })
            }
        }).catch(err => {
            dispatch({ type: LOGIN_FAILURE, payload: err })
        })
}

export const registerAction = (reg_data) => dispatch => {
    console.log('regiser action')
    console.log({ registerdata: reg_data })
    dispatch({ type: REGISTER_SENT })
    fetch('/users/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(reg_data)
    })
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
            if (data.success) {
                dispatch({ type: REGISTER_SUCCESS, payload: data })
            } else {
                dispatch({ type: REGISTER_FAILURE })
            }
        }).catch(err => {
            dispatch({ type: REGISTER_FAILURE, payload: err })
        })
}

export const logoutAction = () => dispatch => {
    dispatch({ type: LOGOUT_SENT })
    fetch('/users/logout', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({})
    })
        .then(resp => resp.json())
        .then(data => {
            console.log('logout action', data)
            dispatch({ type: LOGOUT_SUCCESS, payload: data })
        }).catch(err => {
            dispatch({ type: LOGOUT_FAILURE })
        })
}