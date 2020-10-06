import React from 'react'
import { connect } from 'react-redux'
import { buyIcecream } from '../Redux'

function IceCreamContainer (props) {
  return (
    <div>
      <h2>Number of ice creams - {props.noOfIcecreams} </h2>
      <button onClick={props.buyIceCream}>Buy Ice Cream</button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    noOfIcecreams: state.iceCream.noOfIcecreams
  }
}

const mapDispatchToProps = dispatch => {
  return {
    buyIceCream: () => dispatch(buyIcecream())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IceCreamContainer)