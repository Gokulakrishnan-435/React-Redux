// import { combineReducers } from "redux";
// import CounterReducer from "./CounterReducer";
// let Reducers = combineReducers({CounterReducer}, {});
// export default Reducers;

import { combineReducers } from "redux";
import tutorials from "./tutorials";

export default combineReducers({
  tutorials,
});