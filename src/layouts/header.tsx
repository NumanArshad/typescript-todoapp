import React from "react"
import { useHistory } from "react-router-dom"
import { getAuthUser, logoutUser } from '../services/authService';

const Header: React.SFC = () => {

    const { name, profile } = getAuthUser()
    const history = useHistory()
    return (<nav className="navbar navbar-expand-lg navbar-dark text-white bg-dark">
        <a className="navbar-brand" href="/" onClick={(e) => e.preventDefault()}>TYPESCRIPT</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="dropdown ml-auto">
            <button className="btn btn-secondary dropbtn" type="button"><img src={profile} style={{ height: 40 }} alt="profile_pic" />{name}</button>
            <div className="dropdown-content">
                <a href="/" onClick={(e) => { logoutUser(history); e.preventDefault() }}>Logout</a>
            </div>
        </div>
    </nav>
    )
}
export default Header