import React from 'react';
import {Link} from 'react-router-dom'
import {
  Button,
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
}
from '@material-ui/core';
import axios from 'axios';

/**
 * Define UserList, a React componment of CS142 project #5
 */
class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user : [],
    }
  }
  componentDidMount(){
    axios.get(`user/${this.props.params.match.userId}`)
    .then(res => res.json())
    .then(data => this.setState({user: data}));
  }
  componentDidUpdate(prevProps){
    if(prevProps.match.params.userId !== this.props.match.params.userId){
      axios.get(`user/${this.props.params.match.userId}`)
      .then(res => res.json())
      .then(data => this.setState({user: data}));
    }
  }
  
  render() {
    console.log(this.state.user._id)
    return (
      <div className = "div">
        <Typography variant="body1">
          Close Friend
        </Typography>
        <List component="nav">
              <Link to={`/users/${this.state.user._id}`}  style={{  textDecoration: 'none' }}>
                <ListItem>
                  <ListItemText key={this.state.user._id}  primary={`${this.state.user.first_name} ${this.state.user.last_name}`} />
                </ListItem>
                <Divider/>
              </Link>
        </List>
        <Typography variant="body1" >
          {`LOCATION: ${this.state.user.location}`}
        </Typography>
        <br/>
        <Typography variant="body1" >
          {`DESCRIPTION: ${this.state.user.description}`}
        </Typography>
        <br/>
        <Typography variant="body1" >
          {`OCCUPATION: ${this.state.user.occupation}`}
        </Typography>
        <Divider/>
        <Button variant="contained" color="primary">
          <Link to={`/photos/${this.state.user._id}`} style={{  textDecoration: 'none' }}>
            Photos
          </Link>
        </Button>
      </div>
    );
  }
}


export default UserList;