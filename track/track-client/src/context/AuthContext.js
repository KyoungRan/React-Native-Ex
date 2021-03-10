import AsyncStorage from '@react-native-community/async-storage';
import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import { navigate } from '../navigationRef';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'add_error':
      return { ...state, errorMessage: action.payload };
    case 'clear_error_message':
      return { ...state, errorMessage: '' };
    case 'signup' || 'signin':
      return { errorMessage: '', token: action.payload };
    case 'signout':
      return { token: null, errorMessage: '' }
    default:
      return state;
  }
}

const tryLocalSignin = dispatch => async () => {
  const token = await AsyncStorage.getItem('token');
  if (token) {
    dispatch({ type: 'signin', payload: token });
    navigate('TrackList');
  } else {
    navigate('Signup')
  }
};

const clearErrorMessage = dispatch => () => {
  dispatch({ type: 'clear_error_message' })
}

// QUICK EXAMPLE
// const add = (a, b) => a + b;

const signup = dispatch => async ({ email, password }) => {
  // make api request to sign up with that email and password
  // if we sign up, modify our state, and say that we are authenticated
  // if signing up fails, we rpbably need to reflect an error message somewhere
  try {
    const response = await trackerApi.post('/signup', { email, password });
    await AsyncStorage.setItem('token', response.data.token);
    dispatch({ type: 'signup', payload: response.data.token });
    console.log(response.data);

    // navigate to main flow
    navigate('TrackList')
  } catch (err) {
    console.log(err.response.data);
    dispatch({ 
      type: 'add_error', 
      payload: 'Something went wrong with sign up' 
    });
  }
};

const signin = (dispatch) => async ({ email, password }) => {
  // Try to signin
  // handle success by updating state
  // handle failure by showing error message (somehow)
  try {
    const response = await trackerApi.post('/signin', { email, password });
    await AsyncStorage.setItem('token', response.data.token);
    dispatch({ type: 'signin', payload: response.data.token });
    navigate('TrackList');
  } catch(err) {
    dispatch({
      type: 'add_error',
      payload: 'Something went wrong with sign in'
    });
  }
};

const signout = (dispatch) => async () => {
  // somehow sign out!!!
  // try {
  await AsyncStorage.removeItem('token');
  dispatch({ type: 'signout' });
  navigate('loginFlow');
  // } catch(err) {
  //   dispatch({
  //     type: 'add_error',
  //     payload: 'Something went wrong with sign out'
  //   })
  // }
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signin, signout, signup, signout, clearErrorMessage, tryLocalSignin },
  { token: null, errorMessage: '' }
);
