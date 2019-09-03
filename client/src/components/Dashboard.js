import React, { Component } from "react";
import { Link } from "react-router-dom";
import SurveyList from "./surveys/SurveyList";

class Dashboard extends Component {
  componentDidMount() {
    const token = this.props.location.search;
    if (token === "?loggedIn=true") {
      localStorage.setItem("loggedIn", true);
      window.location.href = "/rsvp?loggedIn";
    } else if (!token) {
      return (window.location.href = "/");
    }
  }

  render() {
    return (
      <div>
        <div className="new-btn-wrap">
          <Link to="/surveys/new" className="newBtn">
            New Campaign
          </Link>
        </div>
        <SurveyList />
      </div>
    );
  }
}

export default Dashboard;
