import React from "react";
import { buyCake } from "../Redux";
import { connect } from "react-redux";
function Cakecontainer(props) {
  console.log(props);
  return (
    <div>
      <h2>Number of cakes - {props.noOfCakes}</h2>
      <button onClick={props.buyCake}>Buy cake</button>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    noOfCakes: state.cake.noOfCakes,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    buyCake : () => dispatch(buyCake()),
  };
};
export default connect(mapStateToProps ,mapDispatchToProps)(Cakecontainer);
