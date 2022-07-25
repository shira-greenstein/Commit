export enum ActionType {
  CREATE_PERSON = "createPerson",
}

export interface Person {
  name: string;
  phonNumber: string;
  password: string;
}

export type Action = {
  type: string;
  payload: Person;
};
