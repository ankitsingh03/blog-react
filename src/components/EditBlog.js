import React, { Component } from "react";

export default class EditBlog extends Component {
  constructor(props) {
    super(props);
    const { id, title, description, user_id } = this.props.history.location.state;
    this.state = {
      id,
      title,
      description,
      user_id
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
      <form className="ui form container" onSubmit={this.editBlog}>
        <div className="field">
        <label>Title</label>
        <input
          type="text"
          name="title"
          value={this.state.title}
          onChange={this.onChangeHandler}
        ></input>
        </div>
        <div className='field'>
        <label>description</label>
        <textarea
          name="description"
          value={this.state.description}
          onChange={this.onChangeHandler}
        ></textarea>

        </div>
        <br />
        <button type="submit" className='ui button'>
          Add
        </button>
      </form>
    );
  }
}
