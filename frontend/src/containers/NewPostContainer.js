import { connect } from 'react-redux';

import { add } from '../actions';
import NewPost from '../components/NewPost';

function mapStateToProps(state) {
  return { blogs: state.blogs };
}

function mapDispatchToProps(dispatch) {
  return {
    add: data => dispatch(add(data))
  };
}

const connectedComponent = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default connectedComponent(NewPost);
