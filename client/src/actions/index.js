import axios from "axios";
import {
  FETCH_USER,
  FETCH_SURVEYS,
  FETCH_EXPERIENCES,
  MAKE_PAYMENT
} from "./types";

export const fetchUser = () => async dispatch => {
  const res = await axios.get("/api/current_user");

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const handleToken = token => async dispatch => {
  const res = await axios.post("/api/stripe", token);

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const submitSurvey = (values, history) => async dispatch => {
  const res = await axios.post("/api/surveys", values);

  history.push("/surveys");
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchSurveys = () => async dispatch => {
  const res = await axios.get("/api/surveys");

  dispatch({ type: FETCH_SURVEYS, payload: res.data });
};

export const fetchExperiences = () => async dispatch => {
  const res = await axios.get("/api/experiences");
  dispatch({ type: FETCH_EXPERIENCES, payload: res.data });
};

export const updateExperiences = (experienceId, amountReceived) => async dispatch => {
  const res = await axios.post(`/api/experiences/${experienceId}`,
  {amountReceived});
  dispatch(fetchExperiences());
};

export const makePayment = params => async dispatch => {
  const res = await axios.post("/api/stripe", params);
  dispatch({ type: MAKE_PAYMENT, payload: res.data });
};
