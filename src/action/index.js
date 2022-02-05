// import api from '../Api';

export const admin = data => {
  return {
    type: 'ADMIN',
    payload: data,
  };
};


export const actionSideBar = data => {
  return {
    type: 'SHOW',
    payload: data,
  };
};

// export const actionFetch = () => async (dispatch) => {
//   const response = await api.get(`url`);
//   dispatch({
//     type: 'ACTION_TYPE_FECT',
//     payload: response.data,
//   });
// };
