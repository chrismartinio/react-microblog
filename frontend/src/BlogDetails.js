import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import EditPostForm from './EditPostForm';
import Comment from './Comment';

// import { getPostFromAPI } from './actions'

class BlogDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editForm: false,
      redirectHome: false,
      newComment: ''
    };

    this.openEditForm = this.openEditForm.bind(this);
    this.closeEditForm = this.closeEditForm.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleNewComment = this.handleNewComment.bind(this);
    this.handleVoteUp = this.handleVoteUp.bind(this);
    this.handleVoteDown = this.handleVoteDown.bind(this);
  }

  componentDidMount() {
    this.props.getPostFromAPI(this.props.location.pathname.slice(1));
  }

  openEditForm() {
    this.setState({
      editForm: true
    });
  }

  closeEditForm() {
    this.setState({
      editForm: false
    });
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.deletePostToAPI(this.props.location.pathname.slice(1));
    this.setState({
      redirectHome: true
    });
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleNewComment(e) {
    e.preventDefault();
    this.props.newCommentToAPI(
      this.props.location.pathname.slice(1),
      this.state.newComment
    );
  }

  handleVoteDown(e) {
    e.preventDefault();
    this.props.voteDownToAPI(this.props.location.pathname.slice(1));
  }
  
  handleVoteUp(e) {
    e.preventDefault();
    console.log(this.props.location.pathname.slice(1));
    this.props.voteUpToAPI(this.props.location.pathname.slice(1));
  }

  render() {
    if (this.props.error) {
      return <h1> error </h1>;
    }

    if (this.state.redirectHome) {
      return <Redirect to="/" />;
    }

    // return (
    //   <div>
    //     <pre>{JSON.stringify(this.props.current, null, 2)}</pre>
    //   </div>
    // )

    // for (let comment in this.props.current.comments) {
    //   console.log(comment);
    // }

    return (
      <div>
        <p className="votes">Votes: {this.props.current.votes}</p>
        <button onClick={this.handleVoteUp}>Up</button>
        <button onClick={this.handleVoteDown}>Down</button>

        <h1>{this.props.current.title}</h1>
        <p>
          <i>{this.props.current.description}</i>
        </p>
        <p>{this.props.current.body}</p>

        <button className="btn btn-primary" onClick={this.openEditForm}>
          Edit
        </button>
        <button className="btn btn-secondary" onClick={this.handleDelete}>
          Delete
        </button>

        {this.state.editForm ? (
          <EditPostForm
            title={this.props.current.title}
            description={this.props.current.description}
            body={this.props.current.body}
            id={this.props.current.id}
            editPost={this.props.editPostToAPI}
            closeEditForm={this.closeEditForm}
          />
        ) : null}

        {this.props.current.loading ? <p>loading</p> : null}
        <hr></hr>
        <h3>Comments</h3>
        {this.props.current.comments
          ? this.props.current.comments.map(comment => (
              <Comment
                comment={comment.text}
                id={comment.id}
                key={comment.id}
                removeComment={this.props.removeCommentFromAPI}
              />
            ))
          : null}

        <form>
          <div className="form-group">
            <input
              onChange={this.handleChange}
              type="text"
              name="newComment"
              placeholder="New Comment"
            ></input>
            <button onClick={this.handleNewComment} className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    );

    // return (
    //   <div>
    //     <h2>{this.props.current.title}</h2>
    //     <p>
    //       <i>{this.props.current.description}</i>
    //     </p>
    //     <p>{this.props.current.body}</p>

    //     <button className="btn btn-secondary" onClick={this.handleDelete}>
    //       Delete
    //     </button>

    //     <hr></hr>
    //     <h3>Comments</h3>
    //     {this.props.current.comments.map(comment => (
    //       <Comment
    //         removeComment={this.props.removeComment}
    //         comment={comment.comment}
    //         blogId={this.props.current.id}
    //         id={comment.id}
    //         key={comment.id}
    //       />
    //     ))}

    //   </div>
    // );
  }
}

export default BlogDetails;
