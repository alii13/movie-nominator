import React from 'react'
import {connect} from 'react-redux'
import  "./Nomination.css"
import {removeNominate} from '../redux/actions/moviesActions'

function Nominations(props) {
     console.log(props)
    const {nominations,countNominations,limit}=props;
    console.log(props);
    const handleRemove = (e) =>{
      //  console.log(e.currentTarget.dataset.div_id)
      props.removeNominate(e.currentTarget.dataset.div_id)

    }
    console.log(nominations)
    return (
        <div className="nominations">
            <h2>Nominations:</h2>
            <div className="nominations__body">
                <ul className="nominations__list">
                    {nominations&& nominations.map((e,i)=>(
                     <div className="list__item" key={i}><li>{e.movietitle}<button className="item__btn" data-div_id={e.movietitle} onClick={handleRemove} >Remove</button></li> </div>
                    ))}
                   
                </ul>
            </div>

            
        </div>
    )
}
const mapStateToProps =(state) =>{
    return {
        nominations:state.moviesList.nominate,
    }

}
const mapDispatchToProps =(dispatch) =>{
    return {
        removeNominate: (title) => dispatch(removeNominate(title))

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Nominations)
