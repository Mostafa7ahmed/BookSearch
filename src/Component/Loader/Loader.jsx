import React from 'react'
import loader from "../../images/loader.svg"
import "./Loader.css"
function Loader() {
    return (
        <div className='loader flex flex-c'>
            <img src={loader} alt="loader loader" />


        </div>
    )
}

export default Loader