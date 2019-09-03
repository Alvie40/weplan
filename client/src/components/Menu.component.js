/**
 * Implements a menu. Accepts the following properties:
 *
 * id (string): Identifier for the element
 * items: [ { label: string,            // The text to show on the menu
 *            href: string, }, ... ]    // Href to use for the entry
 */

"use strict";

import React from "react";
import { Link } from "react-router-dom";
//import Scroll from "react-scroll";

//const Link = Scroll.Link;

class Menu extends React.Component {
  handleLogout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  render() {
    var key = 0;

    return (
      <nav id={this.props.id} className="menu">
        <ul>
          {this.props.items.map(function(element) {
            key++;
            return (
              <li key={key}>
                <Link
                  to={element.href}
                  //style={{ cursor: "pointer" }}
                  //spy={true}
                  //smooth={true}
                  //duration={500}
                >
                  {element.label}
                </Link>
              </li>
            );
          })}
          {localStorage.getItem("loggedIn") ? (
            <li>
              <a href="/rsvp?loggedIn">RSVP</a>
            </li>
          ) : (
            <li>
              <a href="/rsvp">RSVP</a>
            </li>
          )}

          <li>
            {localStorage.getItem("loggedIn") ? (
              <Link
                to="#"
                onClick={this.handleLogout}
                style={{ cursor: "pointer" }}
              >
                LOGOUT
              </Link>
            ) : (
              <a href="/auth/google" style={{ cursor: "pointer" }}>
                LOGIN
              </a>
            )}
          </li>
        </ul>
      </nav>
    );
  }
}

export default Menu;
