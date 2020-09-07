import React from "react";
import "./Sidebar.css";
import { connect } from "react-redux";
import { setNomination } from "../redux/actions/moviesActions";
import { NOMINATE_LIMIT } from "../redux/constants";
import Loader from "./Loader";
function Sidebar(props) {
  const error = props.state.error.message;
  const movies = props.state.movies;
  const loading = props.state.loading;
  const nominate = props.state.nominate;
  const limit = props.state.limit;
  const countNominations = props.state.countNominations;

  const handleNomination = (e) => {
    limit - countNominations > 0
      ? props.setNomination(e.currentTarget.dataset.div_id)
      : alert(`You can nominate movies upto ${NOMINATE_LIMIT} !!`);
  };
  return (
    <div className="sidebar">
      <h2>Results from Search :</h2>
      <div className="sidebar__body">
        <ul className="sidebar__list">
          {loading ? (
            <h2 className="error">
              <Loader />
            </h2>
          ) : !error ? (
            movies &&
            movies.map((e, i) =>
              nominate && nominate.some((el) => el.movietitle === e.Title) ? (
                <div className="list__item" key={i}>
                  <li>{e.Title} </li>
                  <button
                    data-div_id={e.Title}
                    className="item__btn"
                    disabled={true}
                  >
                    Nominateed!
                  </button>
                </div>
              ) : (
                <div className="list__item" key={i}>
                  <li>{e.Title}</li>{" "}
                  <button
                    data-div_id={e.Title}
                    className="item__btn"
                    onClick={handleNomination}
                  >
                    Nominate
                  </button>
                </div>
              )
            )
          ) : (
            <h3 className="error">{error}</h3>
          )}
        </ul>
      </div>
    </div>
  );
}
function mapStateToProps(state) {
  return {
    state: state.moviesList,
    countNominations: state.moviesList.countNominations,
    limit: state.moviesList.limit,
  };
}
const mapDispatchToProps = (dispatch) => {
  return {
    setNomination: (title) => dispatch(setNomination(title)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
//   export default Sidebar;
