import React, { Component } from "react";

export default class AddBlog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: "",
      title: "",
      description: "",
    };
  }

  onChangeHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  addBlog = async (e) => {
    e.preventDefault();
    if (localStorage.getItem("user")) {
      const user_id = JSON.parse(localStorage.getItem("user")).id;
      await this.props.addBlog({ ...this.state, user_id: user_id });
      this.props.history.push("/");
    } else {
      alert("Add post you need to login");
    }
  };

  render() {
    return (
      <form className="container" onSubmit={this.addBlog}>
        <label className="form-lable">Title</label>
        <input
          type="text"
          class="form-control mb-3"
          name="title"
          value={this.state.title}
          onChange={this.onChangeHandler}
        ></input>

        <label className="form-lable">description</label>
        <input
          class="form-control mb-3"
          name="description"
          value={this.state.description}
          onChange={this.onChangeHandler}
        ></input>
        <br />
        <button type="submit" class="btn btn-primary">
          Add
        </button>
      </form>
    );
  }
}
