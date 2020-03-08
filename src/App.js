import React from "react";
import { BrowserRouter, Link, Route, Switch, Router } from "react-router-dom";
import Browse from "./components/Browse";
import About from "./components/About";
import Contact from "./components/Contact";
import Nav from "./components/Nav";
import Home from './components/Home'

import "./App.css";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Nav />
          <Route path="/" exact component={Home} />
          <Route path="/browse" component={Browse} />
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
