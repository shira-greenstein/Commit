import { Dispatch } from "redux";
import { Action, ActionType, Person } from "./index";

export const createPerson = (person: Person) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.CREATE_PERSON,
      payload: person,
    });
  };
};
