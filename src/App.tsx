import React from 'react'
import { Provider } from 'react-redux'
import { store } from './Store/store'
import ToDo from './ToDo/ToDo'
import User from './User/User'


const App = () => {
  return (
    <div>
      <Provider store={store}>
        <User />
        <ToDo />
      </Provider>
    </div>
  )
}

export default App
