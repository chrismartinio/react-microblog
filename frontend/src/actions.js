import { ADD, REMOVE, NEW_COMMENT, REMOVE_COMMENT, EDIT, GET_POSTS, GET_POST } from './actionTypes';

import uuid from 'uuid/v4';
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/posts';

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
  return {
    type: EDIT,
    payload: data,
    id: id
  };
}

export function newComment(blogId, newComment) {
  return {
    type: NEW_COMMENT,
    blogId: blogId,
    newComment: newComment,
    id: uuid()
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
  }
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
      console.log('all blogs api', posts);
      dispatch(getPosts(posts.data));
    } catch (error) {
      dispatch(handleError(error));
    }
  };
}

export function getPostFromAPI(id) {
  return async function thunk(dispatch) {
    try {
      let post = await axios.get(`${API_URL}/${id}`);
      console.log('api data', post)
      dispatch(getPost(post.data));
    } catch (error) {
      dispatch(handleError(error));
    }
  }
}


