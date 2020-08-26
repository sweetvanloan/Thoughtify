import React from 'react'
import {Link} from 'react-router-dom'
function NavBar(props) {

    return (
        <>
            <div>
                <strong>menu </strong>
                <button className="Navbar">
                    <a>Lorem ipsum</a>
                </button>
                <button className="Navbar">
                    <a>Ipsum schmipsum</a>
                </button>
                <button className="Navbar">
                    <a>About</a>
                </button>
                {/* below is the sign in/sign up button that we will need to add a tenerary to */}
                <Link className="Navbar" to='' onClick={props.handleLogout}>
                    sign out
                </Link>
            </div>
        </>
    )

}
export default NavBar;