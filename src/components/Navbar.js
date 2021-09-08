import {useEffect} from 'react'
import './css/main.css'
import stickiness from './js/stickiness'


const Navbar = () => {

    useEffect(() => stickiness())

    return ( 

       <div>
           <header className="header navbar-area">
           <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-12">
                    <div className="nav-inner">

                        <nav className="navbar navbar-expand-lg">
                            <a className="navbar-brand" href="index.html">
                                <img src="/images/logo/ttg_log_white.png" className="logo_top"/>
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
                                        <a href="index.html" className="active" aria-label="Toggle navigation" style={ {textDecoration:'none'}}>Home</a>
                                    </li>
                                    <li className="nav-item">
                                            <a href="about-us.html" aria-label="Toggle navigation" style={ {textDecoration:'none'}}>About</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="/" className="dd-menu collapsed"  data-bs-toggle="collapse"
                                            data-bs-target="#submenu-1-1" aria-controls="navbarSupportedContent"
                                            aria-expanded="false" aria-label="Toggle navigation" style={ {textDecoration:'none'}}>Events</a>
                                        <ul className="sub-menu collapse" id="submenu-1-1">
                                            <li className="nav-item"><a href="about-us.html" style={ {textDecoration:'none'}}>Annual Research Meet</a></li>
                                            <li className="nav-item"><a href="signin.html" style={ {textDecoration:'none'}}>IPR Workshop</a></li>
                                            <li className="nav-item"><a href="signup.html" style={ {textDecoration:'none'}}>TedXIITKharagpur</a></li>
                                            <li className="nav-item"><a href="reset-password.html" style={ {textDecoration:'none'}}>vsakhba namsk</a></li>
                                            <li className="nav-item"><a href="mail-success.html" style={ {textDecoration:'none'}}>jbjnknhv nbjkb</a></li>
                                            <li className="nav-item"><a href="404.html" style={ {textDecoration:'none'}}>bjnmhu jhho</a></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <a href="portfolio-masonry-photos.html" aria-label="Toggle navigation" style={ {textDecoration:'none'}}>Gallery</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="contact.html" aria-label="Toggle navigation" style={ {textDecoration:'none'}}>Contact</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="button">
                                <a href="signup.html" className="btn" style={ {textDecoration:'none'}}>Register</a>
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