import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Header extends Component {
  checkUser = () => {
    if (localStorage.getItem("user")) {
      localStorage.setItem("user", "");
      this.props.history.push("/");
    } else {
      this.props.history.push("/login");
    }
  };

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Blog
          </Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              {localStorage.getItem("user") && (
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/addblog"
                  >
                    Add Blog
                  </Link>
                </li>
              )}

              {localStorage.getItem("user") && (
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/userblog"
                  >
                    You Blog
                  </Link>
                </li>
              )}

              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  onClick={this.checkUser}
                >
                  {localStorage.getItem("user") ? "Logout" : "Log in"}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
