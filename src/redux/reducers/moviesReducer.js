import { FETCH_MOVIES_REQUEST, FETCH_MOVIES_SUCCESS, FETCH_MOVIES_FAILURE } from '../actions/types';

const initialState = {
  loading:false,
  movies:[],
  error:''
};

export default function(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case FETCH_MOVIES_REQUEST:
      return {
        ...state,
        loading:true
      };
    case FETCH_MOVIES_SUCCESS:
     // console.log(action.payload);
      return {
        ...state,
        loading:false,
        users: action.payload
      };

      case FETCH_MOVIES_FAILURE:
        return {
          ...state,
          loading:false,
          error:action.payload
        }
    default:
      return state;
  }
}