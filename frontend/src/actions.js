import {
  ADD,
  REMOVE,
  NEW_COMMENT,
  REMOVE_COMMENT,
  EDIT,
  GET_POSTS,
  GET_POST,
  NEW_POST,
  LOADING,
  LOADED,
  VOTE_UP,
  VOTE_DOWN
} from './actionTypes';

import uuid from 'uuid/v4';
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/posts';

export function loadingPage() {
  return {
    type: LOADING,
    payload: true
  };
}

export function loadedPage() {
  return {
    type: LOADED,
    payload: false
  };
}

export function add(data) {
  return {
    type: ADD,
    payload: {
      title: data.title,
      comments: [],
      body: data.body,
      description: data.description,
      id: uuid()
    }
  };
}

export function remove(id) {
  return {
    type: REMOVE,
    id: id
  };
}

export function edit(data, id) {
  console.log('edit', data, id);
  return {
    type: EDIT,
    payload: data,
    id: id
  };
}

export function newComment(blogId, newComment, newCommentId) {
  return {
    type: NEW_COMMENT,
    blogId: blogId,
    newComment: newComment,
    id: newCommentId
  };
}

export function removeComment(commentId, blogId) {
  return {
    type: REMOVE_COMMENT,
    commentId: commentId,
    blogId: blogId
  };
}

function getPosts(data) {
  return {
    type: GET_POSTS,
    payload: data
  };
}

function getPost(data) {
  return {
    type: GET_POST,
    payload: data
  };
}

function newPost(data) {
  return {
    type: NEW_POST,
    payload: {
      title: data.title,
      comments: [],
      votes: 0,
      body: data.body,
      description: data.description,
      id: data.id
    }
  };
}

function handleError(error) {
  return {
    type: 'ERROR',
    error
  };
}

function voteUp(blogId) {
  console.log('voteup');
  return {
    type: VOTE_UP
  };
}

function voteDown(blogId) {
  console.log('votedown');
  return {
    type: VOTE_DOWN
  };
}

export function getPostsFromAPI() {
  return async function thunk(dispatch) {
    try {
      let posts = await axios.get(`${API_URL}`);
      dispatch(getPosts(posts.data));
    } catch (error) {
      dispatch(handleError(error));
    }
  };
}

export function getPostFromAPI(id) {
  return async function thunk(dispatch) {
    dispatch(loadingPage());
    try {
      let post = await axios.get(`${API_URL}/${id}`);
      dispatch(loadedPage());
      dispatch(getPost(post.data));
    } catch (error) {
      dispatch(handleError(error));
    }
  };
}

export function newPostToAPI(title, description, id) {
  return async function thunk(dispatch) {
    try {
      let post = await axios.post(`${API_URL}`, {
        title: title,
        description: description,
        id: id,
        votes: 0
      });
      dispatch(newPost(post.data));
    } catch (error) {
      console.log('error');
      dispatch(handleError(error));
    }
  };
}

export function deletePostToAPI(id) {
  return async function thunk(dispatch) {
    try {
      await axios.delete(`${API_URL}/${id}`);
      dispatch(remove(id));
    } catch (error) {
      console.log('error');
      dispatch(handleError(error));
    }
  };
}

export function editPostToAPI(data, id) {
  return async function thunk(dispatch) {
    try {
      let resp = await axios.put(`${API_URL}/${id}`, {
        title: data.title,
        description: data.description,
        body: data.body
      });
      console.log('resp', resp);
      dispatch(edit(data, id));
    } catch (error) {
      console.log('error');
      dispatch(handleError(error));
    }
  };
}

export function newCommentToAPI(id, text) {
  return async function thunk(dispatch) {
    // dispatch(loadingPage());
    try {
      let resp = await axios.post(`${API_URL}/${id}/comments`, {
        text: text
      });
      // dispatch(loadedPage());
      dispatch(newComment(id, resp.data.text, resp.data.id));
    } catch (error) {
      console.log('error');
      dispatch(handleError(error));
    }
  };
}

export function removeCommentFromAPI(commentId, blogId) {
  return async function thunk(dispatch) {
    try {
      let resp = await axios.delete(
        `${API_URL}/${blogId}/comments/${commentId}`
      );
      dispatch(removeComment(commentId, blogId));
    } catch (error) {
      console.log('error');
      dispatch(handleError(error));
    }
  };
}

export function voteUpToAPI(blogId) {
  console.log('blogid', blogId);
  return async function thunk(dispatch) {
    try {
      let resp = await axios.post(`${API_URL}/${blogId}/vote/up`);
      console.log('response', resp);
      dispatch(voteUp(blogId));
    } catch (error) {
      console.log('error');
      dispatch(handleError(error));
    }
  };
}

export function voteDownToAPI(blogId) {
  console.log('blogid', blogId);
  return async function thunk(dispatch) {
    try {
      let resp = await axios.post(`${API_URL}/${blogId}/vote/down`);
      console.log('response', resp);
      dispatch(voteDown(blogId));
    } catch (error) {
      console.log('error');
      dispatch(handleError(error));
    }
  };
}
