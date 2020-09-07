import React from 'react'
import Sidebar from './Sidebar'
import "./Result.css"
//import { connect } from 'react-redux'
import Nominations from './Nominations'
function Result(props) {
    console.log(props)
    return (
        <div className="results">
            <Sidebar/>
            <Nominations/>
        </div>
    )
}


export default Result
