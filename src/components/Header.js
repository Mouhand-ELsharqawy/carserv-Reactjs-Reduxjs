import { Link } from "react-router-dom/cjs/react-router-dom";
import { NavLink } from "react-router-dom/cjs/react-router-dom";
const Header = () => {
    return ( 
    
        <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
            <NavLink to="/" className="navbar-brand d-flex align-items-center px-4 px-lg-5">
                <h2 className="m-0 text-primary">
                    <i className="fa fa-car me-3"></i>CarServ</h2>
            </NavLink>
            <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav ms-auto p-4 p-lg-0">
                    <NavLink exact to="/"   className="nav-item nav-link">Home</NavLink>
                    <NavLink exact to="/about"    className="nav-item nav-link">About</NavLink>
                    <NavLink exact to="/service"   className="nav-item nav-link">Services</NavLink>
                    <div className="nav-item dropdown">
                        <NavLink exact to="/booking" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</NavLink>
                        <div className="dropdown-menu fade-up m-0">
                            <NavLink exact to="/booking"   className="dropdown-item">Booking</NavLink>
                            <NavLink exact to="/team"   className="dropdown-item">Technicians</NavLink>
                            <NavLink exact to="/testimonial"   className="dropdown-item">Testimonial</NavLink>
                        </div>
                    </div>
                    <NavLink exact to="/contact"   className="nav-item nav-link">Contact</NavLink>
                </div>
                <Link exact to="/booking"   className="btn btn-primary py-4 px-lg-5 d-none d-lg-block">Get A Quote<i className="fa fa-arrow-right ms-3"></i></Link>
            </div>
        </nav>
    
    
     );
}
 
export default Header;