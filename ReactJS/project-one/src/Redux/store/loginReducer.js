//! 1. creating a reducer function
const initData = {
  users: ["Admin", "Manager", "End-user"],
  loginDet: "None",
};
const loginReducer = (state = initData, action) => {
  console.log(action);
  if (action.type === "LOGIN") {
    return {
      ...state,
      loginDet: action.loginDet,
    };
  }
  return state;
};

export default loginReducer;
