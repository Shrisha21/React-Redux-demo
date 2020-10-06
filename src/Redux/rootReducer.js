import { combineReducers } from 'redux'
import cakeReducer from './Cakes/cakeReducer';
import iceCreamReducer from './Icecreams/iceCreamReducer'

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
})

export default rootReducer