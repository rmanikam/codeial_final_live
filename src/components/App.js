import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/posts';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import * as jwtDecode from 'jwt-decode';
// benefit is I can import navabar, login from index.js
// and dont have to write again and again import
// import navbar from ./navbar/.. etc
import { Home, Navbar, Page404, Login } from './';

import { authenticateUser } from '../actions/auth';
// import PrivateRoute from
const Signup = () => {
  <div>Signup</div>;
};

const Settings = () => <div>Setting</div>;

// const PrivatRoute = (privateRouteProps) =>
// {
//   const { isLoggedin, path, component: Component } = privateRouteProps;

//   return <Route path ={path} render = { (props) => {

//     return isLoggedin ? <Component {...props} /> : <Redirect to ="/login" />;

//   }}/>

// }
class App extends Component {
  componentDidMount() {
    this.props.dispatch(fetchPosts());

    const token = localStorage.getItem('token');
    if (token) {
      const user = jwtDecode(token);

      console.log('user', user);
      this.props.dispatch(
        authenticateUser({
          email: user.email,
          _id: user._id,
          name: user.name
        })
      );
    }
  }

  render() {
    const { posts, auth } = this.props;
    // posts is an array
    return (
      <Router>
        <div>
          <Navbar />
          {/* now my navbar is common to every route */}
          {/* we cannot use a tag because we will provide href to it
            and we will be reloading the page and we wont want that 
            Link component uses anchor tag and we dont need that 
            Link doesnt reload the page and when i click on link it will
            route me to diff path
            */}
          {/* history gives me history of my current application

               whenever i navigate to diff url i navigate 
               
               to different url and few functionality to change history

               it utilizes browser history api

               location property gives me inf abt current url

               match property is telling us how route component match our path

               

              */}
          <Switch>
            <Route
              // exact ={true}
              //or
              exact
              path="/"
              render={props => {
                return <Home {...props} posts={posts} />;
              }}
            />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route
              path="/settings"
              component={Settings}
              isLoggedin={auth.isLoggedin}
            />
            <Route component={Page404} />
          </Switch>
        </div>
      </Router>
    );
  }
}
function mapStateToProps(state) {
  return {
    posts: state.posts,
    auth: state.auth
  };
}
// we are defining property on App component
App.propTypes = {
  posts: PropTypes.array.isRequired
};

export default connect(mapStateToProps)(App);

// note wherever we add props to the component we simply add proptypes for that
// as well

// here we have connected our app component to redux store so that is why
// we see dispatch func in our console.log('store', store.getState());

// what is routing?
// routing is showing diff components to user depending
// upon the url where the current user is at
//we need client side routing in order to prevent page refresh
// so that user doesnot see a / or white page.

//in our case we dont fetch all css/ js / html files
// when user navigates away from current page

// what we do is we make call to the server and fetch piece of data
// for example when user clicks on user profile it will
// fetch data of particular user and it will show data
// in user profile component itself

// that is why we use navigation routing in our case

// when our app grows a lot bigger and since it is a single

// page application we want to make different routes for user to navigate around
