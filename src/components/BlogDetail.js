import React, { Component } from "react";
import api from "../api/Blog";
import { Link } from "react-router-dom";

export default class BlogDetail extends Component {
  state = { id: "", title: "", description: "", user_id: "" };

  getPost = async () => {
    let id = this.props.match.params.id;
    const response = await api.get(`/blogs/${id}`);
    this.setState({
      id: response.data.id,
      title: response.data.title,
      description: response.data.description,
      user_id: response.data.user_id,
    });
  };

  componentDidMount() {
    this.getPost();
  }

  deleteBlog = async (id) => {
    await this.props.deleteBlog(id);
    this.props.history.push("/");
  };

  render() {
    // if user user matches with the login user then user can edit there own
    let button;
    if (
      localStorage.getItem("user") &&
      JSON.parse(localStorage.getItem("user")).id === this.state.user_id
    ) {
      console.log("user present");
      button = (
        <div>
          <Link
            to={{ pathname: `/blogs/${this.state.id}/edit`, state: this.state }}
          >
            <button>Edit</button>
          </Link>
          <button onClick={() => this.deleteBlog(this.state.id)}>Delete</button>
        </div>
      );
    }
    return (
      <div className="container">
        <h3>{this.state.title}</h3>
        <p>{this.state.description}</p>
        {button}
      </div>
    );
  }
}
