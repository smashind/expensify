import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
  login,
  logout
} from '../../actions/auth';

const createMockStore = configureMockStore([thunk]);

// store and dispatch are not necessary here apparently
test('login should return the uid of the user', () => {
  const store = createMockStore({});
  const uid = '2lskjadlfkjjlkj1808';
  const action = store.dispatch(login(uid));
  expect(action).toEqual({
    type: 'LOGIN',
    uid: uid
  });
});

// store and dispatch are not necessary here apparently
test('logout should call the logout action', () => {
  const store = createMockStore({});
  const action = store.dispatch(logout());
  expect(action).toEqual({
    type: 'LOGOUT'
  });
});