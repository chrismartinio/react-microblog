import { connect } from 'react-redux';

import { add, remove, newComment, removeComment, edit } from '../actions';
import { getPostFromAPI } from '../actions';
import BlogDetails from '../BlogDetails';

function mapStateToProps(state, rtProps) {
  return { current: state.blog };
}

function mapDispatchToProps(dispatch) {
  return {
    add: data => dispatch(add(data)),
    remove: id => dispatch(remove(id)),
    edit: (data, id) => dispatch(edit(data, id)),
    newComment: (id, data) => dispatch(newComment(id, data)),
    removeComment: (blogId, commentId) => dispatch(removeComment(blogId, commentId)),
    getPostFromAPI: (id) => dispatch(getPostFromAPI(id))
  };
}

const connectedComponent = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default connectedComponent(BlogDetails);
