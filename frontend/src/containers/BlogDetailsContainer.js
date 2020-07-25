import { connect } from 'react-redux';

import {
  add,
  remove,
  newComment,
  removeComment,
  edit,
  loadingPage,
  loadedPage,
  removeCommentFromAPI
} from '../actions';
import {
  getPostFromAPI,
  deletePostToAPI,
  editPostToAPI,
  newCommentToAPI,
  voteUpToAPI,
  voteDownToAPI
} from '../actions';
import BlogDetails from '../BlogDetails';

function mapStateToProps(state, rtProps) {
  return { current: state.blog };
}

// function mapDispatchToProps(dispatch) {
//   return {
//     voteDownToAPI: (blogId) => dispatch(voteDownToAPI(blogId)),
//     voteUpToAPI: (blogId) => dispatch(voteUpToAPI(blogId)),
//     loadedPage: () => dispatch(loadedPage()),
//     loadingPage: () => dispatch(loadingPage()),
//     add: data => dispatch(add(data)),
//     remove: id => dispatch(remove(id)),
//     edit: (data, id) => dispatch(edit(data, id)),
//     newComment: (id, data) => dispatch(newComment(id, data)),
//     removeComment: (blogId, commentId) => dispatch(removeComment(blogId, commentId)),
//     getPostFromAPI: (id) => dispatch(getPostFromAPI(id)),
//     deletePostToAPI: (id) => dispatch(deletePostToAPI(id)),
//     editPostToAPI: (data, id) => dispatch(editPostToAPI(data, id)),
//     newCommentToAPI: (id, text) => dispatch(newCommentToAPI(id, text)),
//     removeCommentFromAPI: (commentId, blogId) => dispatch(removeCommentFromAPI(commentId, blogId))
//   };
// }

const mapDispatchToProps = {
  voteDownToAPI,
  voteUpToAPI,
  loadedPage,
  loadingPage,
  add,
  remove,
  edit,
  newComment,
  removeComment,
  getPostFromAPI,
  deletePostToAPI,
  editPostToAPI,
  newCommentToAPI,
  removeCommentFromAPI
};

const connectedComponent = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default connectedComponent(BlogDetails);
