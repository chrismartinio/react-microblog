import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

// import NewPost from './components/NewPost';
// import BlogDetails from './BlogDetails';
import BlogListContainer from './containers/BlogListContainer';
import NewPostContainer from './containers/NewPostContainer';
import BlogDetailsContainer from './containers/BlogDetailsContainer';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route
          exact
          path="/new"
          render={() => <NewPostContainer />}
        />
        <Route
          exact
          path="/:slug"
          render={rtProps => <BlogDetailsContainer blogs={this.props.blogs} addComment={this.props.addComment} removeComment={this.props.removeComment} removePost={this.props.removePost} editPost={this.props.editPost} {...rtProps} />}
        />
        <Route
          exact
          path="/"
          render={() => <BlogListContainer />}
        />
      </Switch>
    );
  }
}

export default Routes;
