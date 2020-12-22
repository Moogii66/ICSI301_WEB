import React from 'react';
import {
  Typography,
  Grid,
  Card,
  CardHeader,
  CardMedia,
  CardContent
} from '@material-ui/core';
import './userPhotos.css';
import { Link } from "react-router-dom";
import axios from 'axios'
/**
 * Define UserPhotos, a React componment of CS142 project #5
 */
class UserPhotos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: [],
      photos : [],
    }
  }


  componentDidMount() {
    axios.get(`user/${this.props.params.match.userId}`)
    .then(res => res.json())
    .then(data => this.setState({user: data}));
    axios.get(`photos/${this.props.params.match.userId}`)
    .then(res => res.json())
    .then(data => this.setState({photos: data}));
  }
  componentDidUpdate(prevprops) {
    if (prevprops.match.params.userId !== this.props.match.params.userId) {
      axios.get(`user/${this.props.params.match.userId}`)
      .then(res => res.json())
      .then(data => this.setState({user: data}));
      axios.get(`photos/${this.props.params.match.userId}`)
      .then(res => res.json())
      .then(data => this.setState({photos: data}));
    }
  }

  render() {
  console.log(this.state.user);
  console.log(this.state.photos);
    return (
      <Grid container justify="space-evenly" alignItems="flex-start">
        <Grid item xs={12}>
          <Typography variant="h3">
            {this.state.user.first_name} {this.state.user.last_name}&apos;s photos
          </Typography>
        </Grid>
        {this.state.photos ? this.state.photos.map(photo => (
          <Grid item xs={6} key={photo._id}>
            <Card className="card">
              <CardHeader title={`${photo.date_time}`} />
              <CardMedia
                component="img"
                height="300"
                width="300"
                image={`images/${photo.file_name}`}
                title={this.state.user.first_name}
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary">
                  {photo.comments
                    ? photo.comments.map(comment => {
                        return (
                          <Grid container key={comment._id}>
                            <Grid item xs={2}>
                              {comment.date_time}
                            </Grid>
                            <Grid item xs={2}>
                              <Link to={`/users/${comment.user._id}`} style={{textDecoration: 'none' }}>
                                {`${comment.user.first_name} ${comment.user.last_name}`}
                              </Link>
                            </Grid>
                            <Grid item xs={8}>
                              {comment.comment}
                            </Grid>
                          </Grid>
                        );
                      })
                    : null}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        )) : <div/>}
      </Grid>
    );
  }
}

export default UserPhotos;
