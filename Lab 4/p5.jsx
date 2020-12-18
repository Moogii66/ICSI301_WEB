import React from 'react';
import ReactDOM from 'react-dom';
import State from './components/states/States'
import Example from './components/example/Example'
import { HashRouter, Route, Link } from "react-router-dom";

class Routerr extends React.Component {
    render() {
      return (
      <div>
        <HashRouter>
          <div>
            <button className = "p5css"><Link to="/components/states" className="links">States</Link> </button>
            <button className = "p5css"><Link to="/components/example" className="links">Example</Link> </button>
            <Route path="/components/states" component={State}  />
            <Route path="/components/example" component={Example}  />
          </div>
        </HashRouter>
      </div>
      );
    }
  }
  ReactDOM.render(
    <Routerr/>,
    document.getElementById('reactapp'),
  );
