import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/posts';
import PropTypes from 'prop-types';

import { PostsList } from './';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(fetchPosts());
  }

  render() {
    const { posts } = this.props;
    // posts is an array
    return (
      <div>
        <nav className="nav">
          <div className="left-div">
            <img src="" alt="logo" />
          </div>
          <div className="search-container">
            <img className="search-icon" src="" alt="search-icon" />
            <input placeholder="Search" />
            <div className="search-results">
              <ul>
                <li className="search-results-row">
                  <img src="" alt="user-dp" />
                  <span>John Doe</span>
                </li>
                <li className="search-results-row">
                  <img src="" alt="user-dp" />
                  <span>John Doe</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="right-nav">
            <div className="user">
              <img src="" alt="user-dp" id="user-dp" />
              <span>John Doe</span>
            </div>
          </div>
        </nav>
        <PostsList posts={posts} />
      </div>
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
