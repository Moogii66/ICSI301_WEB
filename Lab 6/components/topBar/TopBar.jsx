import React from 'react';
import {
   AppBar, Toolbar, Typography
} from '@material-ui/core';
import './TopBar.css';
import { Link } from "react-router-dom";
import axios from 'axios';
/**
 * Define TopBar, a React componment of CS142 project #5
 */
class TopBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <AppBar className="cs142-topbar-appBar" position="absolute">
        <Toolbar>
          <Typography variant="h5" color="inherit">
              <Link to = {`/`} style={{ color: '#FFF', textDecoration: 'none' }}>
                  Agvaandanzan
              </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

export default TopBar;
