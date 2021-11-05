import loginReducer from "./loginReducer";
import productReducer from "./productReducer";
import { createStore, combineReducers } from "redux";

const rootReducer = combineReducers({
  pr: productReducer,
  lr: loginReducer,
});
const store = createStore(rootReducer);

export default store;
