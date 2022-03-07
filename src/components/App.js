import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/posts';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Home, Navbar, Page404, Login } from './';

const Signup = () => {
  <div>Signup</div>;
};

class App extends Component {
  componentDidMount() {
    this.props.dispatch(fetchPosts());
  }

  render() {
    const { posts } = this.props;
    // posts is an array
    return (
      <Router>
        <div>
          <Navbar />

          <Switch>
            <Route
              exact
              path="/"
              render={(props) => {
                return <Home {...props} posts={posts} />;
              }}
            />
            <Route path="/login" component={Login}></Route>
            <Route path="/signup" component={Signup}></Route>
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
  };
}

App.propTypes = {
  posts: PropTypes.array.isRequired,
};
export default connect(mapStateToProps)(App);

// here we have connected our app component to redux store so that is why
// we see dispatch func in our console.log('store', store.getState());

// what is routing?
// routing is showing diff components to user depending upon the url where the current user is at
//we need client side routing in order to prevent page refresh
// so that user doesnot see a / or white page.
