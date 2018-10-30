import { loginDone} from './actions'

describe('ACTION user', () => {
    it('should return success object for succesful login', () => {
        const loginSuccess = loginDone({message: 'success'})
        expect(loginSuccess).toEqual({ type: 'app/user/LOGIN_SUCCESS' })
    })
    it('should return a failed object for failed login', () => {
        const loginSuccess = loginDone({message: 'failed'})
        expect(loginSuccess).toEqual({ type: 'app/user/LOGIN_FAILED' })
    })
})