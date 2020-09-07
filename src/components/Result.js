import React from 'react'
import Sidebar from './Sidebar'
import "./Result.css"
import Nominations from './Nominations'


function Result(props) {
    return (
        <div className="results">
            <Sidebar/>
            <Nominations/>
        </div>
    )
}


export default Result
