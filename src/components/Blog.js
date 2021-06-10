import React, { Component } from "react";
import { Link } from "react-router-dom";
// Material-ui
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

class Blog extends Component {
  render() {
    const blogs = this.props.blogs.map((blog) => {
      return (
        <Card key={blog.id} className={`${useStyles.root} container my-4`}>
          <CardActionArea>
            <CardMedia
              className={useStyles.media}
              image="/static/images/cards/contemplative-reptile.jpg"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {blog.title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {blog.description}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Link to={`blogs/${blog.id}`}>
              <Button size="small" color="primary">
                View
              </Button>
            </Link>
          </CardActions>
        </Card>
      );
    });
    return <div>{blogs}</div>;
  }
}

export default Blog;
