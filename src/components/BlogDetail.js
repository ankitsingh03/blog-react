import React, { Component } from "react";
import api from "../api/Blog";
import { Link } from "react-router-dom";
// Material-ui
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
// import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

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
    if (window.confirm("Do you really want to delete")) {
      await this.props.deleteBlog(id);
      this.props.history.push("/");
    }
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
            <Button variant="contained" color="primary" disableElevation>
              Edit
            </Button>
          </Link>
          <Button
            onClick={() => this.deleteBlog(this.state.id)}
            className="m-2"
            variant="contained"
            color="secondary"
          >
            Delete
          </Button>
        </div>
      );
    }
    return (
      <Card className={`${useStyles.root} container my-4`}>
        <CardActionArea>
          <CardMedia
            className={useStyles.media}
            image="/static/images/cards/contemplative-reptile.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {this.state.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {this.state.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>{button}</CardActions>
      </Card>
    );
  }
}
