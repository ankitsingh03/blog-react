import React, { Component } from "react";

export default class AddBlog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: "",
      title: "",
      description: "",
    };
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.addBlog = this.addBlog.bind(this)
  }

  onChangeHandler(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  formValidation(){
    return this.state.title && this.state.description
      ? true
      : alert("can't be empty");
  };

  async addBlog(e){
    e.preventDefault();
    if (localStorage.getItem("user")) {
      if (this.formValidation()) {
        const user_id = JSON.parse(localStorage.getItem("user")).id;
        await this.props.addBlog({ ...this.state, user_id: user_id });
        this.props.history.push("/");
      }
    } else {
      alert("Add post you need to login");
    }
  };

  render() {
    if (localStorage.getItem("user")) {
      return (
        <form className="ui form container" onSubmit={this.addBlog}>
          <div className="field">
            <label>Title</label>
            <input
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.onChangeHandler}
            ></input>
          </div>
          <div className="field">
            <label>description</label>
            <textarea
              name="description"
              value={this.state.description}
              onChange={this.onChangeHandler}
            ></textarea>
          </div>
          <br />
          <button type="submit" className="ui button">
            Add
          </button>
        </form>
      );
    } else {
      return <h3>"please login first"</h3>;
    }
  }
}
