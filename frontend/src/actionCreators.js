import axios from 'axios';

const API_URL = 'http://localhost:5000/api/posts';


function getPosts(data) {
  return {
    type: 'GET_POSTS',
    payload: data
  };
}

function handleError(error) {
  return {
    type: 'ERROR',
    error
  };
}

export function getPostsFromAPI() {
  return async function thunk(dispatch) {
    try {
      let posts = await axios.get(`${API_URL}`);
      dispatch(getPosts(posts));
    } catch (error) {
      dispatch(handleError(error.response.data));
    }
  };
}
