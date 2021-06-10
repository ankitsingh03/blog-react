import React from "react";
import api from "./api/Blog";
import Blog from "./components/Blog";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import BlogDetails from "./components/BlogDetail";
import EditBlog from "./components/EditBlog";
import AddBlog from "./components/AddBlog";
import UserBlog from "./components/UserBlog";

class App extends React.Component {
  state = { blogs: [] };

  blog = async () => {
    const response = await api.get("/blogs");
    this.setState({ blogs: response.data });
  };

  componentDidMount() {
    this.blog();
  }

  addBlog = async (blog) => {
    const response = await api.post("/blogs", blog);
    const blogs = [...this.state.blogs, response.data];
    this.setState({ blogs });
  };

  updateBlog = async (blog) => {
    const response = await api.put(`/blogs/${blog.id}`, blog);
    const blogs = this.state.blogs.map((blog) =>
      blog.id === response.data.id ? response.data : blog
    );
    this.setState({ blogs });
  };

  deleteBlog = async (id) => {
    // const response = await api.delete(`/blogs/${id}`);
    await api.delete(`/blogs/${id}`);
    const blogs = this.state.blogs.filter((blog) => blog.id !== id);
    this.setState({ blogs });
  };

  render() {
    return (
      <div>
        <Router>
          <Route render={(props) => <Header {...props} />} />
          <Switch>
            <Route exact path="/">
              <Blog blogs={this.state.blogs} />
            </Route>
            <Route
              exact
              path="/login"
              render={(props) => <Login {...props} />}
            />
            <Route
              exact
              path="/blogs/:id"
              render={(props) => (
                <BlogDetails {...props} deleteBlog={this.deleteBlog} />
              )}
            />
            <Route
              exact
              path="/blogs/:id/edit"
              render={(props) => (
                <EditBlog {...props} updateBlog={this.updateBlog} />
              )}
            />
            <Route
              exact
              path="/addblog"
              render={(props) => <AddBlog {...props} addBlog={this.addBlog} />}
            />
            <Route
              exact
              path="/userblog"
              render={(props) => <UserBlog {...props} />}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
