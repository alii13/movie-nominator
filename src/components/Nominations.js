import React from 'react'
import  "./Nomination.css"
function Nominations() {
    return (
        <div className="nominations">
            <h2>Nominations:</h2>
            <div className="nominations__body">
                <ul className="nominations__list">
                    <div className="list__item"><li>Dummy1</li> <button className="item__btn" >Nominate</button></div>
                </ul>
            </div>

            
        </div>
    )
}

export default Nominations
