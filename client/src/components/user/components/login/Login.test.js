import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store'
import Login from './Login';

const initialState = { user: {} }
const mockStore = configureStore()
let store, wrapper

it('renders without crashing', () => {
  store = mockStore(initialState)
  wrapper = mount(<Provider store={store}><Login/></Provider>)
});

it('should show an error on login error', () => {
  store = mockStore({ user: { loginError: true}})
  wrapper = mount(<Provider store={store}><Login/></Provider>)
  const error = <div>Login Error</div>
  expect(wrapper.contains(error)).toBe(true);
});
