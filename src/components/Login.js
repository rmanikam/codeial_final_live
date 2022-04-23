import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { login, clearAuthState } from '../actions/auth';
// uncontrolled component is component where form data like
// email field, password field is not managed by react
// itself but by DOM.
// data resides in DOM and not in react state
// we create a reference which points to input field of
//email and password and
// when we submit form we call reference
// and say hey get the value
// so email will get me latest value inside it
// and password will give me latest value inside it

// when we click on login button this scenario will happen

class Login extends Component {
  constructor(props) {
    super(props);

    // email input is my input where email is being entered
    // this.emailInputRef = React.createRef(); // this react.createRef() will create a reference and it will be null because we have not attached it to any input

    // this.passwordInputRef = React.createRef();
    this.state = {
      email: '',
      password: ''
    };
  }
  componentWillUnmount() {
    this.props.dispatch(clearAuthState());
  }

  handleEmailChange = e => {
    this.setState({
      email: e.target.value
    });
  };

  handlePasswordChange = e => {
    this.setState({
      password: e.target.value
    });
  };

  // I can use the login  and startLogin action in my Login component
  // where do i have to dispatch this login action
  // in my handle form submit
  // when i click on submit button i dispatch
  //
  handleFormSubmit = e => {
    // when i click on button everytime it is automatically
    //submitting the form . i dont want to do that.
    // so i do e.preventDefault();
    e.preventDefault();
    // console.log('this.emailInputRef', this.emailInputRef);
    // console.log('this.passwordInputRef', this.passwordInputRef);

    // every ref in react will have current property which
    // will be either null if not set or current.

    console.log('this.state', this.state);
    const { email, password } = this.state;
    // we dispatch action if we have both email and password
    if (email && password) {
      this.props.dispatch(login(email, password));
    }
  };
  render() {
    const { error, inProgress, isLoggedin } = this.props.auth;
    if (isLoggedin) {
      return <Redirect to="/" />;
    }
    return (
      <form className="login-form">
        <span className="login-signup-header">Log In</span>
        {error && <div className="alert error-dialog ">{error}</div>}
        <div className="field">
          <input
            type="email"
            placeholder="Email"
            required
            //ref={this.emailInputRef}
            onChange={this.handleEmailChange}
            value={this.state.email}
          />
        </div>
        <div className="field">
          <input
            type="password"
            placeholder="Password"
            required
            //ref={this.passwordInputRef}
            onChange={this.handlePasswordChange}
            value={this.state.password}
          />
        </div>
        <div className="field">
          {inProgress ? (
            <button onClick={this.handleFormSubmit} disabled={inProgress}>
              Logging in...
            </button>
          ) : (
            <button onClick={this.handleFormSubmit} disabled={inProgress}>
              Log In
            </button>
          )}
        </div>
      </form>
    );
  }
}
function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}
export default connect(mapStateToProps)(Login);
