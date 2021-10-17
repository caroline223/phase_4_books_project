import React from 'react'
import { Link } from 'react-router-dom'


function NavBar() {

    const layout = {
        nav: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            height: "30px",
            padding: "35px",
            marginBottom: "30px",
        }
    };

    return (
        <nav style={layout.nav} >
             <Link to="/books" className="navTitle">Books</Link>
             <Link to="/authors" className="navTitle">Authors</Link>
        </nav>
    )


}
export default NavBar;