import authReducer from '../../reducers/auth';
import user from '../fixtures/user';

test('should return the uid', () => {
  const action = {
    type: 'LOGIN',
    uid: user.uid
  };

  const state = authReducer(user, action);
  expect(state).toEqual({ uid: user.uid });
});

test('should return an empty object', () => {
  const action = {
    type: 'LOGOUT'
  };

  const state = authReducer(user, action);
  expect(state).toEqual({});
});
