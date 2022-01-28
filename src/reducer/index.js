import { combineReducers } from 'redux';

const adminReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADMIN':
      return [action.payload];
    default:
      return state;
  }
};

export default combineReducers({
  adminReducer,
});



