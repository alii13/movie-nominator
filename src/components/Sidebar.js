import React from 'react'
import "./Sidebar.css"
import { connect } from 'react-redux'
function Sidebar(props) {
    console.log(props);
    return (
        <div className="sidebar">
            <h3>Results from Search :</h3>
            <div className="sidebar__body">
                <ul className="sidebar__list">
                    <div className="list__item"><li>Dummy1</li> <button className="item__btn" >Nominate</button></div>
                </ul>
            </div>
            
        </div>
    )
}
// const mapStateToProps =(state)=>{
//     return {
//         movies: state.moviesList.movies
//     }

// }

// export default connect(mapStateToProps)(Sidebar)
export default Sidebar;
