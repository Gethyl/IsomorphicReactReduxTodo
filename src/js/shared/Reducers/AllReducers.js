import { combineReducers } from 'redux'
import todoReducer from './ToDoReducers'



const allReducers = combineReducers({
  todoReducer
})

export default allReducers