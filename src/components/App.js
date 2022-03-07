import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/posts';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import { PostsList, Navbar } from './';

const Login = () => {
  <div>Login</div>;
};
const Signup = () => {
  <div>Signup</div>;
};
const Home = () => {
  <div>Home</div>;
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
          <PostsList posts={posts} />
             <ul>
               <li>
                 <Link to ="/">Home</Link>
               </li>
               <li>
                 <Link to ="/login">Login</Link>
               </li>
               <li>
                 <Link to ="/signup">Signup</Link>
               </li>
             </ul>

           <Route exact path="/" component={Home}></Route>
           <Route path="/login" component={Login}></Route> 
           <Route path="/signup" component={Signup}></Route> 

        </div>
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
