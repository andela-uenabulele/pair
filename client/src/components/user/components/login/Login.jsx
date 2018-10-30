import React, { Component } from 'react';
import {connect} from 'react-redux'
import {login} from '../../actions'

class Login extends Component {

    state = { username: ''}

    onUsernameChange = ({target: {value}}) => {
        this.setState({
            username: value
        })
    }
    onPasswordChange = ({ target: {value} }) => {
        this.setState({
            password: value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const { username, password } = this.state
        this.props.login({
            username,
            password
        })
    }

    render() {
        return (
            <div>
                <div> Login </div>
                {this.props.loginError && <div>Login Error</div>}
                <form onSubmit={this.handleSubmit}>
                <label>
                    Username:
                    <input type="text" value={this.state.username} onChange={this.onUsernameChange} />
                </label>
                <label>
                    password:
                    <input type="password" value={this.state.passwrod} onChange={this.onPasswordChange} />
                </label>
                <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: (...args) => dispatch(login(...args))
    }
}

const MapStateToProps = (state) => ({
    loginError: state.user.loginError,
})


export default connect(MapStateToProps, mapDispatchToProps )(Login)
