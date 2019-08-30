import { createReducer } from "redux-act";
import { incrementCounter, decrementCounter } from "../actions";

const initialState = {
  count: 0
};

export default createReducer(
  {
    [incrementCounter]: state => ({
      ...state,
      count: state.count + 1
    }),
    [decrementCounter]: (state, payload) => ({
      ...state,
      count: state.count - 1
    })
  },
  initialState
);
