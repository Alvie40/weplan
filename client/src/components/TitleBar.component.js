
"use strict";

import React from "react";

class TitleBar extends React.Component {
  render() {
    return (
      <div className="titlebar-wrapper">
      <header id={this.props.id} className="titlebar">
        <span className="bride-name">Jacqueline</span>
        <span className="groom-name">
          &nbsp;
          <span className="andSign">&amp;</span> Andrew
        </span>
        <div className="wedding-date">
          15<sup>th</sup> AUGUST, 2020
        </div>
      </header>
      </div>
    );
  }
}

export default TitleBar;
