import React, { Component } from 'react';
import { Router, Route, Switch } from "react-router-dom";
import history from "./history";
import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Social from "./pages/Social";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import './App.css';

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/" render={(props) => <Home  {...props} />} />
            <Route exact path="/about" render={(props) => <About  {...props} />} />
            <Route exact path="/menu" render={(props) => <Menu  {...props} />} />
            <Route exact path="/social" render={(props) => <Social  {...props} />} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
