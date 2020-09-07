import {
  FETCH_MOVIES_REQUEST,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAILURE,
  SET_NOMINATE,
  REMOVE_NOMINATE,
} from "./types";
import { API_KEY } from "../constants";
import axios from "axios";

export const fetchMovies = (inputValue) => {
  //  console.log(inputValue)

  return (dispatch) => {
    dispatch({
      type: FETCH_MOVIES_REQUEST,
    });
    axios
      .get(
        `http://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&s=${inputValue}&page=1`
      )
      .then((res) => {
        const movies = res.data;
        dispatch({
          type: FETCH_MOVIES_SUCCESS,
          payload: movies.Search,
        });
      })
      .catch((err) => {
        dispatch({
          type: FETCH_MOVIES_FAILURE,
          payload: err,
        });
      });
  };
};

export const setNomination = (title) => {
  const titleData = {
    movietitle: title,
  };
  return {
    type: SET_NOMINATE,
    payload: titleData,
  };
};

export const removeNominate = (title) => {
  console.log("fired");
  return {
    type: REMOVE_NOMINATE,
    payload: title,
  };
};
