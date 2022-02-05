import { combineReducers, createStore } from 'redux'


const initialState = {
  sidebarShow: true,
  foldable: true
}

const sideBarShow = (state = initialState, { type, ...rest }) => {
  switch (type) {
    case 'set':
      return { ...state, ...rest }
    default:
      return state
  }
}




const adminReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADMIN':
      return [action.payload]
    default:
      return state
  }
}

export default combineReducers({ adminReducer, sideBarShow }) 