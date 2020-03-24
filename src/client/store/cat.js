import axios from "axios";

// ACTION TYPES
// YOU MAKE THEM!!


// INITIAL STATE
const initialState = {};

// ACTION CREATORS
export const loadCat = data => ({
  // what kinda stuff goes in here?
  type: 'LOAD_CAT', cat: data
})

// THUNK CREATORS
export const fetchCat = (id) => {
  // YOUR CODE HERE
  return async (dispatch) => {

  const cat = (await axios.get(`/api/cats/${id}/`)).data;
  //console.log('here', cat);
  return dispatch(loadCat(cat));
}
}
// REDUCER
// just modify inside the switch statement by adding cases.
// don't modify what the function takes
export default function (state = initialState, action) {
  switch (action.type) {
    case 'LOAD_CAT':
      return action.cat;
    default: return state;
  }
}
