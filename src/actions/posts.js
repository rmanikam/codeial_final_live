// import { APIUrls } from '../helpers/urls';
import { APIUrls } from '../helpers/urls';
import { UPDATE_POSTS } from './actionTypes';

export function fetchPosts() {
  return dispatch => {
    const url = APIUrls.posts();
    fetch(url)
      .then(response => {
        // convert response to json
        return response.json();
      })
      .then(data => {
        console.log(data);
        dispatch(updatePosts(data.data.posts));
      });
  };
}

// we are creating action creator
export function updatePosts(posts) {
  return {
    type: UPDATE_POSTS,
    posts
  };
}
