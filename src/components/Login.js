import React, { Component } from "react";
import api from "../api/Blog";

class Login extends Component {
  state = { user: "", password: "" };

  onChangeHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  checkUserExist = async () => {
    // verification is not possible in backend using this to validate the user
    let flag = false;
    const response = await api.get("/users");
    for (let i of response.data) {
      if (i.user === this.state.user && i.password === this.state.password) {
        localStorage.setItem("user", JSON.stringify(response.data));
        flag = true;
        return flag;
      }
    }
    alert("check your user and password");
  };

  userLogin = async (e) => {
    e.preventDefault();
    if (!this.state.user || !this.state.password) {
      alert("field can't be empty");
    } else {
      let data = await this.checkUserExist();
      if (data) this.props.history.push("/");
    }
  };

  render() {
    return (
      <form onSubmit={this.userLogin} className="container">
        <div className="mb-3">
          <label className="form-label">User Name</label>
          <input
            name="user"
            value={this.state.user}
            onChange={this.onChangeHandler}
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            name="password"
            value={this.state.password}
            onChange={this.onChangeHandler}
            type="text"
            className="form-control"
          />
        </div>
        <button type="submit" className="btn-sm btn-primary">
          Submit
        </button>
      </form>
    );
  }
}
export default Login;
