import React, { useEffect, useState } from 'react'
import { connect} from 'react-redux';
import { fetchMovies } from "../redux/actions/moviesActions"
import "./Search.css"
function Search(props) {

    const [inputValue, setInput] = useState('');

  const handleChange =(e)=>{
      setInput(e.target.value);
    //  console.log(inputValue)
      //console.log(props);
  }
  useEffect(()=>{
      if(inputValue){
      props.fetchMovies(inputValue)
      }
  },[inputValue])
  const handleSubmit =(e)=>{
      e.preventDefault();
      props.fetchMovies(inputValue)

  }


    return (
        <div className="search__container">
                <form onSubmit={handleSubmit} className="input__container">
             <input type="text"  value={inputValue} onChange={handleChange}/>
             <input type="submit"  value ="search"
             className="input__button"/>
             </form>

        </div>
    )
}
const mapDispatchToProps = dispatch =>{
    return {
        fetchMovies: (inputValue) => dispatch(fetchMovies(inputValue))
    }
}

export default connect(null, mapDispatchToProps)(Search);
