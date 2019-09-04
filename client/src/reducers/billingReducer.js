import { MAKE_PAYMENT } from "../actions/types";

const initialState = {
  data: {},
  error: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case MAKE_PAYMENT:
      return { ...state, data: action.payload };
    default:
      return state;
  }
}
