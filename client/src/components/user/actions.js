import { BASE_URL } from '../../constants'

export const login = ({ username, password }) => {
    return (dispatch) => {
        fetch(`${BASE_URL}/login`,
            {
                method: 'POST', body: JSON.stringify({ username, password }),
                headers: {
                    "Content-Type": "application/json; charset=utf-8",
                },
            })
            .then((res) => res.json())
            .then((response) => dispatch(loginDone(response)))
    }
}


export const loginDone = (data) => {
    if (data.message === 'success') {
        return {
            type: 'app/user/LOGIN_SUCCESS',
        }
    }
    return {
        type: 'app/user/LOGIN_FAILED',
    }
}
export const signUp = (userData) => {
    return (dispatch) => {
        fetch(`${BASE_URL}/signup`,
            {
                body: JSON.stringify(userData),
                method: 'POST',
                headers: {
                    "Content-Type": "application/json; charset=utf-8",
                },
            })
            .then((res) => res.json()).then((res) => dispatch(signUpDone(res)))
    }
}


export const signUpDone = (res) => {
    if (res.message === 'user created') {
        return {
            type: 'app/user/SIGNUP_SUCCESS',
            userData: res.data
        }
    }
    return { type: 'app/user/SIGNUP_FAILED' }
}

