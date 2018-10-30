export default function users(state = {loggedIn: false}, action) {
    switch (action.type) {
        case 'app/user/SIGNUP_SUCCESS':
            return {...state, signedUp: true}
        case 'app/user/LOGIN_SUCCESS':
            return { ...state, loggedIn: true, userCredentials: action.userData }
        case 'app/user/LOGIN_FAILED':
            return { ...state, loginError: true }
        default:
            return state;
    }
}