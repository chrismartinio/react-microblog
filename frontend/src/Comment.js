import React, { Component } from 'react';

class Comment extends Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.removeComment(this.props.id, this.props.blogId);
  }
  render() {
    return (
      <div className="comments">
        <p>{this.props.comment}</p>
        <button
          onClick={this.handleDelete}
          className="btn btn-sm btn-danger remove-comment"
        >
          x
        </button>

      </div>
    );
  }
}

export default Comment;
