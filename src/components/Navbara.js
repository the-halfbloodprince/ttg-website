import {useEffect} from 'react'
import '../style/main.css'
import stickiness from '../utilitiesJS/stickiness'
import { Link } from 'react-router-dom';


const Navbara = () => {

    useEffect(() => stickiness())

    return ( 

       <div>
           <header className="header navbar-area">
           <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-12">
                    <div className="nav-inner">

                        <nav className="navbar navbar-expand-lg">
                            <Link className="navbar-brand" to="/">
                                <img src="/images/logo/ttg_log_white.png" className="logo_top" alt="logo"/>
                            </Link>
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
                                        <Link to="/" aria-label="Toggle navigation" style={ {textDecoration:'none'}}>Home</Link>
                                    </li>
                                    <li className="nav-item">
                                            <Link to="/about" className="active" aria-label="Toggle navigation" style={ {textDecoration:'none'}}>About</Link>
                                    </li>
                                    <li className="nav-item">
                                        <a href="/" className="dd-menu collapsed" data-bs-toggle="collapse"
                                            data-bs-target="#submenu-1-1" aria-controls="navbarSupportedContent"
                                            aria-expanded="false" aria-label="Toggle navigation" style={ {textDecoration:'none'}}>Events</a>
                                        <ul className="sub-menu collapse" id="submenu-1-1">
                                            <li className="nav-item"><Link to="/events/1" style={ {textDecoration:'none'}}>Annual Research Meet</Link></li>
                                            <li className="nav-item"><Link to="/events/2" style={ {textDecoration:'none'}}>IPR Workshop</Link></li>
                                            <li className="nav-item"><Link to="/events/3" style={ {textDecoration:'none'}}>TedXIITKharagpur</Link></li>
                                            <li className="nav-item"><Link to="/events/4" style={ {textDecoration:'none'}}>TechTalks</Link></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/gallery" aria-label="Toggle navigation" style={ {textDecoration:'none'}}>Gallery</Link>
                                    </li>
                                    <li className="nav-item">
                                        <a href="http://www.sric.iitkgp.ac.in/web/" target="_blank" rel="noreferrer" aria-label="Toggle navigation" style={ {textDecoration:'none'}}>SRIC</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="button">
                                <a href="http://www.sric.iitkgp.ac.in/web/" target="_blank" rel="noreferrer" className="btn" style={ {textDecoration:'none'}}>TTG-Blogs</a>
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
 
export default Navbara;