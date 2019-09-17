import React, { Component } from "react";
import logo from "../images/logo.svg";
import { FaAlignRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import uuid from "uuid";
import navData from "./navData.json";
class Navbar extends Component {
  state = {
    isOpen: false
  };

  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    var { isOpen } = this.state;
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/">
              <img src={logo} alt="beach resort"></img>
            </Link>
            <button
              type="button"
              className="nav-btn"
              onClick={this.handleToggle}
            >
              <FaAlignRight className="nav-icon" />
            </button>
          </div>
          <ul className={isOpen ? "nav-links show-nav" : "nav-links"}>
            {navData.map(d => (
              <li key={uuid.v4()}>
                <Link to={d.route}>{d.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
