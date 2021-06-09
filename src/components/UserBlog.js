import React, { Component } from "react";
import api from "../api/Blog";
import Blog from './Blog'

export default class UserBlog extends Component {
  state = { blogs: [] };

  blog = async () => {
    const response = await api.get("/blogs");
    const blogs = response.data.filter(
      (blog) => blog.user_id === JSON.parse(localStorage.getItem("user")).id
    );
    this.setState({ blogs });
    console.log(this.state.blogs);
  };

  componentDidMount() {
    this.blog();
  }

  render() {
      if (localStorage.getItem("user")){
          return <Blog blogs={this.state.blogs} />
      }else{
          return <h3>please login first</h3>
      }
  }
}
