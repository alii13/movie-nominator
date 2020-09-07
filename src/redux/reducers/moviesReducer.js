import {
  FETCH_MOVIES_REQUEST,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAILURE,
  SET_NOMINATE,
  REMOVE_NOMINATE,
} from "../actions/types";
import { NOMINATE_LIMIT } from "../constants";

const initialState = {
  loading: false,
  movies: [],
  nominate: !JSON.parse(localStorage.getItem("Object"))
    ? []
    : JSON.parse(localStorage.getItem("Object")),
  error: [],
  countNominations: 0,
  limit: NOMINATE_LIMIT,
};

export default function (state = initialState, action) {
  //console.log(action)
  switch (action.type) {
    case FETCH_MOVIES_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_MOVIES_SUCCESS:
      // console.log(action.payload);
      return {
        ...state,
        loading: false,
        error: [],
        movies: action.payload,
      };

    case FETCH_MOVIES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case SET_NOMINATE:
      return {
        ...state,
        countNominations: state.countNominations + 1,
        nominate: [...state.nominate, action.payload],
      };
    case REMOVE_NOMINATE:
      return {
        ...state,
        countNominations: state.countNominations - 1,
        nominate: state.nominate.filter(
          (obj) => obj.movietitle !== action.payload
        ),
      };
    default:
      return state;
  }
}
