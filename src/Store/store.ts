import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { combineReducers } from 'redux'


const initialStateToDo = {
  toDo: []
}

function reducerToDo( state = initialStateToDo, action: any){
    switch(action.type){
      case 'GET_To_Do':
        return {
          toDo: action.payload
        }
      
      default:
        return state
    }
}

const initialStateUser = {
  user: []
}

function reducerUser( state = initialStateUser, action: any){
    switch(action.type){
      case 'GET_USER':
        return {
          user: action.payload
        }
      
      default:
        return state
    }
}

const createRootReducer = () => combineReducers({
  toDo: reducerToDo,
  user: reducerUser,
})


const store = createStore(createRootReducer(), composeWithDevTools())

export { store }