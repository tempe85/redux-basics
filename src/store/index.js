import { createStore } from "redux";

//create reducer
//value is an action payload
const counterReducer = (
  state = { counter: 0, isCounterVisibile: true },
  action
) => {
  switch (action.type) {
    case "increase":
      return {
        ...state,
        counter: state.counter + action.value,
      };
    case "decrease":
      return {
        ...state,
        counter: state.counter + action.value,
      };
    case "toggleCounter":
      return {
        ...state,
        isCounterVisibile: !state.isCounterVisibile,
      };
    default:
      return state;
  }
};

//create store
const store = createStore(counterReducer);

export default store;
