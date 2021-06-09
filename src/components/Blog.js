import React, { Component } from "react";
import {Link} from 'react-router-dom'

class Blog extends Component {
  render() {
    const blogs = this.props.blogs.map((blog) => {
      return (
        <div key={blog.id} className="container">
          <Link to={`blogs/${blog.id}`} >
          <h3>{blog.title}</h3>
          </Link>
          <p>{blog.description}</p>
        </div>
      );
    });
    return <div>{blogs}</div>;
  }
}

export default Blog;
