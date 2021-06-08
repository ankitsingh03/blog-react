import React, { Component } from "react";

export default class AddBlog extends Component {
  constructor(props) {
    super(props);
    this.state = {
    //   userid: "",
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
    await this.props.addBlog(this.state);
    this.props.history.push("/");
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
