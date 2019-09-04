import { FETCH_EXPERIENCES } from "../actions/types";

const initialState = {
  data: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_EXPERIENCES:
      return { ...state, data: action.payload };
    default:
      return state;
  }
}
