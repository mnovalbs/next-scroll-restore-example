import { atom } from "recoil";

const defaultState = {
  page: 0,
  users: [],
};

const users = atom({
  key: "users",
  default: {
    default: defaultState,
  },
});

export default users;
