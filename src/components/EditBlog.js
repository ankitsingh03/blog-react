import React, { Component } from "react";

export default class EditBlog extends Component {
  constructor(props) {
    super(props);
    const { id, title, description } = this.props.history.location.state;
    this.state = {
      id,
      title,
      description,
    };
  }

  onChangeHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  editBlog = async (e) => {
    e.preventDefault();
    await this.props.updateBlog(this.state);
    this.props.history.push("/");
  };

  render() {
    return (
      <form className="container" onSubmit={this.editBlog}>
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
