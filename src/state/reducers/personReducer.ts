import { ActionType, Person, Action } from "../action/index";

const initialState: Person = {
  name: "",
  phonNumber: "",
  password: "",
};

export const reducer = (state: Person = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.CREATE_PERSON:
      return action.payload;
  }
  return state;
};

export default reducer;
