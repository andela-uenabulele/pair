import React, { Component } from 'react';
import {connect} from 'react-redux'
import Login from './components/user/components/login/Login'
import SignUp from './components/user/components/signup/SignUp'
import Nav from './components/nav/Nav'
import './App.css';

class App extends Component {

  state = {
    route: 'login'
  }

  navigate = (route) => {
    this.setState({route})
  }

  render() {
    const {loggedIn} = this.props
    const { route} = this.state
    return (
      <div className="App">
        <Nav navigate={this.navigate}/>
        {!loggedIn && route === 'login' && <Login/>}
        {route === 'signUp' && <SignUp/>}
        {loggedIn && <div>Home</div>}
      </div>
    );
  }
}

const MapStateToProps = (state) => ({
  loggedIn: state.user.loggedIn,
})

export default connect(MapStateToProps, null)(App);
