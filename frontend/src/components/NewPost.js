import React, { Component } from 'react';

import { Redirect } from 'react-router-dom';


class NewPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirectHome: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.add(this.state);
    this.setState({
      redirectHome: true
    })
  }

  handleCancel(e) {
    e.preventDefault();
    this.setState({
      redirectHome: true
    })
  }

  render() {
    if (this.state.redirectHome === true) {
      return <Redirect to='/' />
    }
    console.log(this.props)
    return (
      <div>
        <h4>New Post</h4>
        <form>
          <div className="form-group">
            <input
              name="title"
              type="text"
              placeholder="Title"
              onChange={this.handleChange}
            ></input>
          </div>
          <div className="form-group">
            <input
              name="description"
              type="text"
              placeholder="Description"
              onChange={this.handleChange}
            ></input>
          </div>
          <div className="form-group">
            <textarea
              name="body"
              type="text"
              placeholder="Body"
              onChange={this.handleChange}
            ></textarea>
          </div>
          <button
            onClick={this.handleSubmit}
            className="btn btn-small btn-primary"
          >
            Submit
          </button>
          {/* <Link to='/'
            className="btn btn-small btn-secondary"
          >
            Cancel
          </Link> */}
          <button
            onClick={this.handleCancel}
            className="btn btn-small btn-secondary"
          >
            Cancel
          </button>
        </form>
      </div>
    );
  }
}

export default NewPost;
