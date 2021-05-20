import { atom } from "recoil";

const defaultState = {
  page: 0,
  items: [],
};

const items = atom({
  key: "items",
  default: {
    default: defaultState,
  },
});

export default items;
