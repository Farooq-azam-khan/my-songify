import {
    LOGIN_SENT, LOGIN_SUCCESS, LOGIN_FAILURE,
    LOGOUT_SENT, LOGOUT_SUCCESS, LOGOUT_FAILURE
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
            console.log('login action', data)
            dispatch({ type: LOGIN_SUCCESS, payload: data.user })
        }).catch(err => {
            dispatch({ type: LOGIN_FAILURE })
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