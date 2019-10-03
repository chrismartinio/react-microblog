import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

// import EditPostForm from './EditPostForm';
// import Comment from './Comment';

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
    this.props.remove(this.props.location.pathname.slice(1));
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
    this.props.newComment(
      this.props.location.pathname.slice(1),
      this.state.newComment
    );
  }

  render() {
    if (this.props.error) {
      return <h1> error </h1>;
    }
    // let currentBlog = this.props.current[0];
    // console.log('currentBlog = ', currentBlog);

    if (this.state.redirectHome) {
      return <Redirect to="/" />;
    }

    return (
      <div>
        <pre>{JSON.stringify(this.props.current, null, 2)}</pre>
      </div>
      )

    // return (
    //   <div>
    //     <h2>{this.props.current.title}</h2>
    //     <p>
    //       <i>{this.props.current.description}</i>
    //     </p>
    //     <p>{this.props.current.body}</p>

    //     <button className="btn btn-primary" onClick={this.openEditForm}>
    //       Edit
    //     </button>
    //     <button className="btn btn-secondary" onClick={this.handleDelete}>
    //       Delete
    //     </button>

    //     {this.state.editForm ? (
    //       <EditPostForm
    //         title={this.props.current.title}
    //         description={this.props.current.description}
    //         body={this.props.current.body}
    //         id={this.props.current.id}
    //         editPost={this.props.edit}
    //         closeEditForm={this.closeEditForm}
    //       />
    //     ) : null}

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

    //     <form>
    //       <div className="form-group">
    //         <input
    //           onChange={this.handleChange}
    //           type="text"
    //           name="newComment"
    //           placeholder="New Comment"
    //         ></input>
    //         <button onClick={this.handleNewComment} className="btn btn-primary">
    //           Submit
    //         </button>
    //       </div>
    //     </form>
    //   </div>
    // );
  }
}

export default BlogDetails;
