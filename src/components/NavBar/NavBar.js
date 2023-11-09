import CartWidget from "../CartWidget/CartWidget"
import "bulma/css/bulma.css";
import './NavBar.css'
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="hero is-link" id="navContainer" >
            <Link to={`/`}>
            <img id="title" src="https://www.redmutual.com.ar/wp-content/uploads/2019/03/logo.png" alt="Red Mutual" className="logorm"/>
            </Link>   
            <div className="linkContainer">
                <NavLink to={`/category/celulares`} className="linkOption">Celulares</NavLink>
                <NavLink to={`/category/accesorios`} className="linkOption">Accesorios</NavLink>
                <NavLink to={`/category/electros`} className="linkOption">Electros</NavLink>
                <NavLink to={`/category/viajes`} className="linkOption">Viajes</NavLink>
            </div>
                <CartWidget/>          
        </nav>

    )
}

export default NavBar