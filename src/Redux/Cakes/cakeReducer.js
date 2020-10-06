import { BUY_CAKE } from "./cakeTypes";
const cakeState = {
  noOfCakes: 10,
};


const cakeReducer = (state = cakeState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        noOfCakes: state.noOfCakes - action.payload,
      };
    default:
      return state;
  }
};



export default cakeReducer;
