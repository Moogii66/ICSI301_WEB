import React from 'react';
import {
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
}

from '@material-ui/core';
import { Link } from "react-router-dom";

/**
 * Define UserList, a React componment of CS142 project #5
 */
class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    }
  }

  componentDidMount() {
    axios.get("user/list")
      .then((res) => res.json())
      .then((data) => this.setState({ users: data }));
  }

  render() {
    return (
      <div>
        <List component="nav">
          {this.state.users.map(user => {
            return (
              <Link to = {`/users/${user._id}`} key = {user._id} color = "primary" style={{textDecoration: 'none' }}>
                <ListItem>
                  <ListItemText primary={`${user.first_name} ${user.last_name}`}/>
                </ListItem>
              </Link>
            )
          })}
        </List>
      </div>
    );
  }
}

export default UserList;
