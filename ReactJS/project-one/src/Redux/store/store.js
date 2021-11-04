import { createStore } from "redux";
//! 1. creatinf a reducer function
const initData = {
  products: [],
  cart: [],
  total: 0,
};
const reducer = (state = initData, action) => {
  return state;
};

//! creating a store
const store = createStore(reducer);

export default store;
