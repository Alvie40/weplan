import React, { Component } from "react";
import { connect } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import Modal from "react-modal";
import { fetchExperiences, makePayment } from "../actions";
import TopicContainer from "./TopicContainer.component";

class Experience extends Component {
  state = {
    selectedExperience: null,
    amount: "",
    showModal: false
  };

  componentDidMount() {
    this.props.fetchExperiences();
  }

  onStripeToken = tokenRes => {
    const { amount, selectedExperience } = this.state;
    this.props.makePayment({
      token: tokenRes.id,
      amount,
      experienceId: selectedExperience._id
    });
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  closeModal = () =>
    this.setState(prevState => ({ showModal: !prevState.showModal }));

  handleAmount = e => {
    e.preventDefault();
  };

  handleExperienceSelected = (selectedExperience, index) => {
    this.setState({
      selectedExperience,
      showModal: true,
      amount: this.state[`amount${index}`] * 100
    });
  };

  render() {
    const { experiences } = this.props;
    const { amount, showModal } = this.state;
    const customStyles = {
      content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)"
      }
    };

    return (
      <TopicContainer class="experience">
        <Modal
          isOpen={showModal}
          onRequestClose={this.closeModal}
          style={customStyles}
        >
          <h1>Are you sure you want to pay ${amount}</h1>

          <button onClick={this.closeModal}>No</button>

          <StripeCheckout
            token={this.onStripeToken}
            stripeKey={process.env.REACT_APP_STRIPE_KEY}
            amount={amount}
          />
        </Modal>

        <h1>Experiences</h1>
        <p>Explanation</p>
        <div className="content-wrapper">
          {experiences.map((e, i) => (
            <div>
              <h2>{e.title}</h2>
              <img width="400" height="300" src={e.imageUrl} /> <br />
              Total Value: <p>${e.totalValue}</p>
              Amount Received: <p>${e.amountReceived}</p>
              Amount Needed: <p>${e.totalValue - e.amountReceived}</p>
              <span>Amount to Donate:</span>
              <input
                required
                type="number"
                name={`amount${i}`}
                value={this.state[`amount${i}`] || ""}
                onChange={this.handleInputChange}
              />
              <button onClick={() => this.handleExperienceSelected(e, i)}>
                Pay
              </button>
            </div>
          ))}
        </div>
      </TopicContainer>
    );
  }
}

const mapStateToProps = ({ experience }) => {
  return { experiences: experience.data };
};

export default connect(
  mapStateToProps,
  { fetchExperiences, makePayment }
)(Experience);
