import React, { Component } from "react";
import api from "../api/Blog";
import {Link} from 'react-router-dom'

export default class BlogDetail extends Component {
  state = {id:"", title: "", description: "" };

  getPost = async () => {
    let id = this.props.match.params.id;
    const response = await api.get(`/blogs/${id}`);
    this.setState({
      id: response.data.id,
      title: response.data.title,
      description: response.data.description,
    });
  };

  componentDidMount() {
    this.getPost();
  }

  deleteBlog = async(id) => {
    await this.props.deleteBlog(id)
    this.props.history.push('/')
  }

  render() {
    return (
      <div className='container'>
        <h3>{this.state.title}</h3>
        <p>{this.state.description}</p>
        <Link to={{ pathname:`/blogs/${this.state.id}/edit`, state:this.state}}>
          <button>Edit</button>
        </Link>
        <button onClick={()=> this.deleteBlog(this.state.id) } >Delete</button>
      </div>
    );
  }
}
