import React from 'react'
import "./Sidebar.css"
import { connect } from 'react-redux'
import {setNomination} from '../redux/actions/moviesActions'
import {NOMINATE_LIMIT} from "../redux/constants";
function Sidebar(props) {
    
   // const {movies,message}=props;
   console.log(props);
   const error =props.state.error.message;
   const movies =props.state.movies;
   const loading =props.state.loading;
   const nominate = props.state.nominate
   const limit = props.state.limit;
   const countNominations =props.state.countNominations;
   console.log(nominate)
  // console.log(props.state.error)
    //console.log(error)
    const handleNomination =( e) =>{
       
       // console.log(e.currentTarget.dataset.div_id)
       (limit-countNominations>0)?( props.setNomination(e.currentTarget.dataset.div_id)):(alert(`You can nominate movies upto ${NOMINATE_LIMIT} !!`))


    }
    return (
        <div className="sidebar">
            <h3>Results from Search :</h3>
            <div className="sidebar__body">
                <ul className="sidebar__list">

                         {movies&&movies.map((e,i)=>(
                             (nominate.some(el =>el.movietitle===e.Title)?(
                                <div className="list__item" key={i}><li>{e.Title} <button  data-div_id={e.Title} className="item__btn" disabled={true}>Nominate</button></li></div>

                             ):(
                        <div className="list__item" key={i}><li>{e.Title} <button  data-div_id={e.Title} className="item__btn" onClick={handleNomination}>Nominate</button></li></div>))))}
                    
                </ul>
            </div>
            
        </div>
    )
}
function mapStateToProps (state){
    return {
       state:state.moviesList,
       countNominations:state.moviesList.countNominations,
       limit:state.moviesList.limit
    }

}
const mapDispatchToProps = ( dispatch) =>{
    return {
        setNomination: (title)=> dispatch(setNomination(title))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Sidebar)
//   export default Sidebar;
