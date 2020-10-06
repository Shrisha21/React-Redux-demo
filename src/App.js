import React from 'react';
import { Provider } from 'react-redux'
import store from './Redux/store'
import Cakecontainer from './Components/Cakecontainer'

function App() {
  return (
    <div>
      <Provider store={store}>
      <div align='center'>
        <Cakecontainer />
      </div>
      </Provider>
    </div>
  )
}

export default App


