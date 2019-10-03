import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import uuid from 'uuid/v4';

import Routes from './Routes';
import Nav from './Nav';

class App extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   blogs: [
    //     {
    //       title: 'blog1',
    //       description: 'a blog',
    //       body: 'hello im a blog',
    //       id: 'id1',
    //       comments: [
    //         {
    //           comment: 'hi this is a comment',
    //           id: 1
    //         },
    //         {
    //           comment: 'so is this',
    //           id: 2
    //         }
    //       ]
    //     }
    //   ]
    // };

    this.addPost = this.addPost.bind(this);
    this.editPost = this.editPost.bind(this);
    this.removePost = this.removePost.bind(this);
    this.removeComment = this.removeComment.bind(this);
    this.addComment = this.addComment.bind(this);
  }

  addPost(post) {
    let newPost = {
      title: post.title,
      description: post.description,
      body: post.body,
      comments: [],
      id: uuid()
    };
    this.setState(st => ({
      blogs: [...st.blogs, newPost]
    }));
  }

  editPost(editedBlog, id) {
    this.setState(st => {
      let items = [...st.blogs];

      for (let blog of items) {
        if (blog.id === id) {
          if (editedBlog.title) {
            blog.title = editedBlog.title;
          }
          if (editedBlog.description) {
            blog.description = editedBlog.description;
          }
          if (editedBlog.body) {
            blog.body = editedBlog.body;
          }
        }
      }
      return { blogs: items };
    });
  }

  removePost(id) {
    this.setState(st => ({
      blogs: st.blogs.filter(blog => blog.id !== id)
    }));
  }

  removeComment(id) {
    console.log('remove comment id', id);
    this.setState(st => {
      let items = [...st.blogs];
      for (let blog of items) {
        for (let comment of blog.comments) {
          if (comment.id === id) {
            blog.comments.splice(blog.comments.indexOf(comment), 1);
          }
        }
      }
      return { blogs: items };
    });
  }

  addComment(blogId, newComment) {

    let newC = {
      comment: newComment,
      id: uuid()
    };

    this.setState({
      blogs: this.state.blogs.map(blog => {
        if (blog.id === blogId) {
          return { ...blog, comments: [...blog.comments, newC] };
        } else {
          return { ...blog };
        }
      })
    });
  }

  render() {
    return (
      <BrowserRouter>
        <Nav />
        <Routes />
      </BrowserRouter>
    );
  }
}

export default App;
