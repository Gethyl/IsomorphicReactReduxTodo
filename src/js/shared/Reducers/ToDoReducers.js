import update from 'immutability-helper';

//const initialState = { items:[]}
//const windowState = window.__REDUX_STATE__
let id = 0;

const todoReducer = (state={}, action) => { //(state=initialState, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        items: state.items.concat({id:id++,text:action.item,editItem:false,completed:false})
      }
  	case 'DELETE_ITEM':
      return {
        ...state,
        items:update(state.items, {$splice: [[action.itemId, 1]]})
      }
    case 'EDIT_ICON_CLICKED':
      return {
        ...state,
        items:update(state.items, {[action.itemId]: {editItem: {$set: true}}})
      }
  	case 'EDIT_ITEM':
	  return {
        ...state,
        items:update(state.items, {[action.itemId]: {editItem: {$set: false},text: {$set: action.item}}})
      }

    case 'COMPLETED_ITEM':
	  return {
        ...state,
        items:update(state.items, {[action.itemId]: {completed: {$set: action.completed}}})
      }
    default:
      return state
  }
}

export default todoReducer;