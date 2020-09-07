import React, { useEffect } from "react";
import { connect } from "react-redux";
import "./Nomination.css";
import { removeNominate } from "../redux/actions/moviesActions";
import ShareButton from "react-social-share-buttons";

function Nominations(props) {
    const { nominations } = props;
    let localStorgaeData, removeData;
    const soicalMedia = ["facebook", "twitter", "google-plus", "pinterest"];

    const handleRemove = (e) => {
        console.log(e.currentTarget.dataset.div_id);
        removeData = localStorage.getItem("Object");
        removeData = JSON.parse(removeData);
        console.log(removeData);
        removeData = removeData.filter(
            (z, i) => z.movietitle !== e.currentTarget.dataset.div_id
        );
        localStorage.setItem("Object", JSON.stringify(removeData));
        props.removeNominate(e.currentTarget.dataset.div_id);
    };
    let share, shareValue;

    useEffect(() => {
        if (nominations.length > 0) {
            localStorage.setItem("Object", JSON.stringify(nominations));
            localStorgaeData = localStorage.getItem("Object");
            localStorgaeData = JSON.parse(localStorgaeData);
            share = localStorgaeData.map((e, i) => e.movietitle);
            shareValue = share.join(",");
        } else {
            let localStorageData=[]
            localStorgaeData = localStorage.getItem("Object");
            localStorgaeData = JSON.parse(localStorgaeData);
            console.log(localStorgaeData);
            share = (localStorageData.length<1)?([]):localStorgaeData.map((e, i) => e.movietitle);
            shareValue = share.join(",");
        }
    }, [nominations]);
    return (
        <div className="nominations">
            <h2>Nominations: {nominations.length}</h2>
            <div className="nominations__body">
                <ul className="nominations__list">
                    {nominations.length > 0 ? (
                        nominations.map((e, i) => (
                            <div className="list__item" key={i}>
                                <li>{e.movietitle}</li>
                                <button
                                    className="nomination_item__btn"
                                    data-div_id={e.movietitle}
                                    onClick={handleRemove}
                                >
                                    Remove
                                </button>{" "}
                            </div>
                        ))
                    ) : (
                            <h4 className="nominations__title">You have no nominations</h4>
                        )}
                </ul>
                <div className="share__buttons">
                    {soicalMedia.map((e, i) => (
                        <ShareButton
                            compact
                            socialMedia={e}
                            key={i}
                            url={""}
                            media={"https://imgs.xkcd.com/comics/error_code.png"}
                            text={`Hey I have made this cool nomination of 5 movies - ${shareValue} using movie nominator`}
                            className="share__button"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
const mapStateToProps = (state) => {
    return {
        nominations: state.moviesList.nominate,
        countNominations: state.moviesList.countNominations,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        removeNominate: (title) => dispatch(removeNominate(title)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Nominations);
