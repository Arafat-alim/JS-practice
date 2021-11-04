import { createStore } from "redux";
//! 1. creating a reducer function
const initData = {
  products: [
    { id: 1, pName: "Apple", cost: 20 },
    { id: 2, pName: "Mango", cost: 30 },
    { id: 3, pName: "Banana", cost: 40 },
    { id: 4, pName: "Grapes", cost: 50 },
  ],
  cart: [],
  total: 0,
};
const reducer = (state = initData, action) => {
  console.log(action);
  if (action.type === "PURCHASED") {
    return {
      //   products: state.products,
      ...state,
      cart: [...state.cart, action.payLoad],
      total: state.total + parseInt(action.payLoad.cost),
    };
  }
  return state;
};

//! creating a store
const store = createStore(reducer);

export default store;
