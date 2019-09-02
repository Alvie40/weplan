import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSurveys } from '../../actions';
import TopicContainer from "../TopicContainer.component";

class SurveyList extends Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }

  renderSurveys() {
    return this.props.surveys.reverse().map(survey => {
      return (
        <div className="" key={survey._id}>
          <div className="">
            <h2>{survey.title}</h2>
            <p className="survey-body">
              {survey.body}
            </p>
            <p className="right survey-body">
              Sent On: {new Date(survey.dateSent).toLocaleDateString()}
            </p>
          </div>
          <div >
            <a>Yes: {survey.yes}</a>
            <a>No: {survey.no}</a>
          </div>
          <hr className="line"/>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="survey-cards">
        {this.renderSurveys()}
      </div>
    );
  }
}

function mapStateToProps({ surveys }) {
  return { surveys };
}

export default connect(mapStateToProps, { fetchSurveys })(SurveyList);
