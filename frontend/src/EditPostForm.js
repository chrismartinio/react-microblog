import React, { Component } from "react";

class EditPostForm extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.editPost(this.state, this.props.id);
    this.props.closeEditForm();
  }

  handleCancel(e) {
    e.preventDefault();
    this.props.closeEditForm();
  }

  render() {
    return (
      <div>
        <form>
          <div className="form-group">
            <input
              onChange={this.handleChange}
              type="text"
              name="title"
              placeholder={this.props.title}
            ></input>
          </div>
          <div className="form-group">
            <input
              onChange={this.handleChange}
              name="description"
              type="text"
              placeholder={this.props.description}
            ></input>
          </div>
          <div className="form-group">
            <textarea
              onChange={this.handleChange}
              type="text"
              name="body"
              placeholder={this.props.body}
            ></textarea>
          </div>
          <button onClick={this.handleSubmit}>Submit</button>
          <button onClick={this.handleCancel}>Cancel</button>
        </form>
      </div>
    );
  }
}

export default EditPostForm;