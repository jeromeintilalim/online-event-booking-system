import { ACTION_TYPES } from './eventClient';

const initialState = {
  data: [],
  // error: null
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.FETCH_ALL:
      return {
        ...state,
        data: action.payload,
        // error: null
      };
    default:
      return state;
  }
};

export default dataReducer;