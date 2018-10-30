import React, { Component } from 'react';
import { connect } from 'react-redux'
import { signUp } from '../../actions'

class Login extends Component {

    state = { username: '', password: '', firstName: '', lastName: '' }

    // this is not as performant as separating the handlers for each input
    onUserDataChange = (type, value) => {
        this.setState({
            [type]: value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const { firstName, lastName, username, password } = this.state
        this.props.signUp({
            firstName, lastName, username, password
        })
    }

    render() {
        return (
            <div>
                <div> SignUp </div>
                {this.props.signedUp && <div>Signed Up Successfully Click here to login</div>}
                <form onSubmit={this.handleSubmit}>
                    <label>
                        FirstName:
                        <input
                            type="text"
                            value={this.state.firstName}
                            onChange={({ target: { value } }) =>
                                this.onUserDataChange("firstName", value)
                            }
                        />
                    </label>
                    <label>
                        LastName:
                        <input
                            type="text"
                            value={this.state.lastName}
                            onChange={({ target: { value } }) =>
                                this.onUserDataChange("lastName", value)
                            }
                        />
                    </label>
                    <label>
                        Username:
                        <input
                            type="text"
                            value={this.state.username}
                            onChange={({ target: { value } }) =>
                                this.onUserDataChange("username", value)
                            }
                        />
                    </label>
                    <label>
                        password:
                        <input
                            type="password"
                            value={this.state.password}
                            onChange={({ target: { value } }) =>
                                this.onUserDataChange("password", value)
                            }
                        />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (...args) => dispatch(signUp(...args))
    }
}

const MapStateToProps = (state) => ({
    signedUp: state.user.signedUp,
})


export default connect(MapStateToProps, mapDispatchToProps)(Login)
