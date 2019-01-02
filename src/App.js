import React, { Component } from 'react';
import IndexPage from './pages/index';
import ParkDetailPage from './pages/parkDetail';
import {BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  state = {
    currentPark: null
  }
  render() {
    return (
      <div className="app">
        <Router>
          <div>
            <Route path="/" exact component={IndexPage}/>
            <Route path="/park-details/:id" component={ParkDetailPage}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
