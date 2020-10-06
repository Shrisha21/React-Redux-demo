import { BUY_ICECREAM } from "./iceCreamTypes";
const iceCreamState = {
  noOfIcecreams: 20,
};
const iceCreamReducer = (state = iceCreamState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        noOfIcecreams: state.noOfIcecreams - action.payload,
      };
    default:
      return state;
  }
};
export default iceCreamReducer;
