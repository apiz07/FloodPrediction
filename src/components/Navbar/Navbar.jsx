import React from 'react'
import "../../components/Navbar/Navbar.css"
import {Link} from "react-router-dom"

function Navbar() {
  return (
    <ul>
        <li><Link to="/"><div>Weather Summary</div></Link></li>
        <li><Link to="/victim"><div>Search Victim</div></Link></li>
        <li><Link to="/report"><div>Evacuation Center Report</div></Link></li>
    </ul>
  )
}

export default Navbar