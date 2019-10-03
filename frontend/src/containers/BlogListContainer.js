import { connect } from 'react-redux';
import BlogList from '../components/BlogList';

import { add } from '../actions';
import { getPostsFromAPI } from '../actions'



function mapStateToProps(state) {
  console.log('state', state);
  return { blogs: state.blogs };
}

function mapDispatchToProps(dispatch) {
  return {
    add: (data) => dispatch(add(data)),
    getPostsFromAPI: () => dispatch(getPostsFromAPI())
  }
}

const connectedComponent = connect(mapStateToProps, mapDispatchToProps);

export default connectedComponent(BlogList);

