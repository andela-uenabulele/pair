import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store'
import App from './App';

const initialState = { user: {} }
const mockStore = configureStore()
let store, wrapper


it('renders without crashing', () => {
  store = mockStore(initialState)
  wrapper = mount(<Provider store={store}><App/></Provider>)
});

it('should show the home page on successful login', () => {
  store = mockStore({user:{loggedIn: true}})
  wrapper = mount(<Provider store={store}><App/></Provider>)
  const home = <div>Home</div>
  expect(wrapper.contains(home)).toBe(true);
});

it('should not display homePage if user isnt loggedin', () => {
  store = mockStore({user:{loggedIn: false}})
  wrapper = mount(<Provider store={store}><App/></Provider>)
  const home = <div>Home</div>
  expect(wrapper.contains(home)).toBe(false);
});
