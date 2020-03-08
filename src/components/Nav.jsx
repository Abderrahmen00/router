import React from "react";
import { BrowserRouter, Link, Route, Switch, Router } from "react-router-dom";
export default class Nav extends React.Component {
  render() {
    return (
      <div>
        <div className="nav">
          <Link className="back" to="/">Back</Link>
          <div className="nav-links">
            <Link className="nav-link" to="/browse">
              Browse
            </Link>
            <Link className="nav-link" to="/contact">
              Contact
            </Link>
            <Link className="nav-link" to="/about">
              About
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
