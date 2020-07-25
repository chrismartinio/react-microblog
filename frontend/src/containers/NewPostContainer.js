import { connect } from 'react-redux';

import { add, newPostToAPI } from '../actions';
import NewPost from '../components/NewPost';

function mapStateToProps(state) {
  return { blogs: state.blogs };
}

function mapDispatchToProps(dispatch) {
  return {
    add: data => dispatch(add(data)),
    newPostToAPI: (title, description, id) => dispatch(newPostToAPI(title, description, id))
  };
}

const connectedComponent = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default connectedComponent(NewPost);
