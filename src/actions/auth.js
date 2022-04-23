import {
  LOGIN_FAILED,
  LOGIN_START,
  LOGIN_SUCCESS,
  SIGNUP_START,
  SIGNUP_SUCCESS,
  SIGNUP_FAILED,
  AUTHENTICATE_USER,
  LOG_OUT,
  CLEAR_AUTH_STATE
} from './actionTypes';
import { APIUrls } from '../helpers/urls';
import { getFormBody } from '../helpers/utils';
export function startLogin() {
  return {
    type: LOGIN_START
  };
}
export function loginFailed(errorMessage) {
  return {
    type: LOGIN_FAILED,
    error: errorMessage
  };
}
export function loginSuccess(user) {
  return {
    type: LOGIN_SUCCESS,
    user
  };
}

// login action . this is asynchronous action. this
// action will require redux thunk. since it is
// asynchronous action we will be returning func in it
// this func will get dispatch as an argument.
//
export function login(email, password) {
  return dispatch => {
    dispatch(startLogin());
    const url = 'APIUrls.login()';
    // by default my fetch request is get one
    // i dont want to make a get request as my login
    // request is post one
    fetch(url, {
      method: 'POST',
      // i write this bcoz my server will only request
      // which are content type of url form encoded
      // if i send it as json it wont accept it
      // because our api are written as that way
      // if my api would accept json then i dont need to
      // specify content type header, you could
      // specify you are passing json only but it
      // would work without it as well
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },

      // i have to convert my url and password into
      // url encoded string
      // pass it as an object why?
      // because in future i need to send post request
      // for creating post
      // there my properties will be diff
      // like post.id, post.content, who created the post,
      // for that my url encoded parameters will be different

      body: getFormBody({ email, password })
    })
      // fetch will get me a promise and here i will get a
      // response and this response will be of type reponse
      //object and i have to convert it into json using json method
      // in fetch response.json is a syntax
      .then(response => response.json())
      .then(data => {
        console.log('data', data);
        if (data.success) {
          // dispatch action to save user
          dispatch(loginSuccess(data.data.user));
          return;
        }
        dispatch(loginFailed(data.message));
      });
  };
}
// make 8 to 10 small or more projects in redux. do regular practise
// to do app without redux, using redux

export function authenticateUser(user) {
  return {
    type: AUTHENTICATE_USER,
    user
  };
}

export function logoutUser(user) {
  return {
    type: LOG_OUT
  };
}

export function signup(email, password, confirmPassword, name) {
  return dispatch => {
    const url = APIUrls.signup();
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: getFormBody({
        email,
        password,
        confirm_password: confirmPassword,
        name
      })
    })
      .then(response => response.json())
      .then(data => {
        // console.log('data', data);
        if (data.success) {
          localStorage.setItem('token', data.data.token);

          // dispatch action to save user
          dispatch(signupSuccessful(data.data.user));
          return;
        }
        dispatch(signupFailed(data.message));
      });
  };
}

export function startSignup() {
  return {
    type: SIGNUP_START
  };
}
export function signupFailed(error) {
  return {
    type: SIGNUP_FAILED,
    error
  };
}
export function signupSuccessful(user) {
  return {
    type: SIGNUP_SUCCESS,
    user
  };
}

export function clearAuthState() {
  return {
    type: CLEAR_AUTH_STATE
  };
}
