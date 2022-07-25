import { combineReducers } from "redux";
import personReducer from "./personReducer";

const reducers = combineReducers({
  personReducer: personReducer,
});

export default reducers;

export type State = ReturnType<typeof reducers>;
