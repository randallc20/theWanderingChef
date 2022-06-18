import React from "react"

function NavBar() {
    return(
        <div id="nav-container">
            <button className="nav-btn">Home</button>
            <button className="nav-btn">Favorites</button>
            <button className="nav-btn">Create</button>
            <button className="nav-btn">Misc.</button>
        </div>
    )
}

export default NavBar