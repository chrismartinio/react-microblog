import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import BlogCard from './BlogCard';
// import { getPostsFromAPI } from '../actions'

class BlogList extends Component {
  componentDidMount() {
    this.props.getPostsFromAPI();
  }

  render() {
    if (this.props.error) {
      return <h1> error </h1>;
    }

    return (
      <div>

        <div className="blog-list">
        
          {this.props.blogs.map(blog => (
            <Link to={{ pathname: `/${blog.id}` }} key={blog.id}><BlogCard blog={blog} key={blog.id} /></Link>
          ))}

        </div>
      </div>
    );
  }
}

export default BlogList;



        //   {/* {this.props.blogs.map(blog => (
        //     <Link
        //       to={{
        //         pathname: `/${blog.id}`,
        //         state: {
        //           title: `${blog.title}`,
        //           description: `${blog.description}`,
        //           body: `${blog.body}`
        //         }
        //       }}
        //       key={blog.id}
        //     >
        //       <BlogCard blog={blog} key={blog.id} />
        //     </Link> */}
        //   ))}
        //   {/* BlogList
        // <pre>{JSON.stringify(this.props.blogs, null, 2)}</pre> */}