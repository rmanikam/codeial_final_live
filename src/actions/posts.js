import { APIUrls } from '../helpers/urls';
import { UPDATE_POSTS } from './actionTypes';

export function fetchPosts() {
  return (dispatch) => {
    const url = APIUrls.fetchPosts();
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        dispatch(updatePosts(data.data.posts));
      });
  };
}

// we are creating action creator
export function updatePosts(posts) {
  return {
    // here the object below is an action

    type: UPDATE_POSTS,
    posts,
  };
}
