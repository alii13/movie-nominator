import { FETCH_MOVIES_REQUEST, FETCH_MOVIES_SUCCESS, FETCH_MOVIES_FAILURE } from './types';
import {API_KEY, NUMBER_OF_PAGE} from '../constants'
import axios from 'axios'


export const fetchMovies = (inputValue)=> {
    console.log(inputValue)

 return (dispatch)  => {
     dispatch({
         type:FETCH_MOVIES_REQUEST
     });
     axios.get(`http://www.omdbapi.com/?i=tt3896198&apikey=1c46dc6c&s=${inputValue}&page=1`)
     .then(res =>{
         const movies=res.data
         dispatch({
             type:FETCH_MOVIES_SUCCESS,
             payload:movies
         })
     })
     .catch(err =>{
         console.log(err);
         dispatch({
             type:FETCH_MOVIES_FAILURE,
             payload:err
         })
     })
     
 }
};

// export const createPost = postData => dispatch => {
//   fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'POST',
//     headers: {
//       'content-type': 'application/json'
//     },
//     body: JSON.stringify(postData)
//   })
//     .then(res => res.json())
//     .then(post =>
//       dispatch({
//         type: NEW_POST,
//         payload: post
//       })
//     );
// };