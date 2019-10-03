import React, { Component } from 'react';

class BlogCard extends Component {
  render() {
    return (
      <div className="blog-card">
        <h4>{this.props.blog.title}</h4>
        <p>{this.props.blog.description}</p>
      </div>
    );
  }
}

export default BlogCard;
