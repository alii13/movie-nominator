import React from 'react';
import './App.css';
import Search from './components/Search';
import {connect} from 'react-redux';
import Result from './components/Result';

function App(props) {
  //console.log(props.movies)
  return (
    <div className="app">
    <Search/>
    <Result/>
    </div>
  );
}
// const MapStateToProps =(state)=>{
//   console.log(state)
//     return {
//         movies:state.moviesList.movies
//     }

// }

// export default connect(MapStateToProps)(App);
export default App;
