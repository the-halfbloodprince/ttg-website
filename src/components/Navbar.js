import './css/main.css';
import ttg_logo from './images/logo/ttg_logo.png';

const Navbar = () => {
    return ( 
       <div>
           <header className="header navbar-area">
           <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-12">
                    <div className="nav-inner">

                        <nav className="navbar navbar-expand-lg">
                            <a className="navbar-brand" href="index.html">
                                <img src={ttg_logo} alt="Logo"/>
                            </a>
                            <button className="navbar-toggler mobile-menu-btn" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                                <span className="toggler-icon"></span>
                                <span className="toggler-icon"></span>
                                <span className="toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse sub-menu-bar" id="navbarSupportedContent">
                                <ul id="nav" className="navbar-nav ms-auto">
                                    <li className="nav-item">
                                        <a href="index.html" class="active" aria-label="Toggle navigation">Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="about-us.html" aria-label="Toggle navigation">About</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="dd-menu collapsed"  data-bs-toggle="collapse"
                                            data-bs-target="#submenu-1-1" aria-controls="navbarSupportedContent"
                                            aria-expanded="false" aria-label="Toggle navigation">Events</a>
                                        <ul className="sub-menu collapse" id="submenu-1-1">
                                            <li className="nav-item"><a href="about-us.html">Annual Research Meet</a></li>
                                            <li className="nav-item"><a href="signin.html">IPR Workshop</a></li>
                                            <li className="nav-item"><a href="signup.html">TedXIITKharagpur</a></li>
                                            <li className="nav-item"><a href="reset-password.html">vsakhba namsk</a></li>
                                            <li className="nav-item"><a href="mail-success.html">jbjnknhv nbjkb</a></li>
                                            <li className="nav-item"><a href="404.html">bjnmhu jhho</a></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <a href="portfolio-masonry-photos.html" aria-label="Toggle navigation">Gallery</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="contact.html" aria-label="Toggle navigation">Contact</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="button">
                                <a href="signup.html" className="btn">Register</a>
                            </div>
                        </nav>

                    </div>
                </div>
            </div>
        </div>
           </header>
       </div>
     );
}
 
export default Navbar;