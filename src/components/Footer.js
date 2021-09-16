import { Link } from 'react-router-dom';
import './css/main.css'
import Shape1 from './images/video/shape1.svg';
import Shape2 from './images/video/shape2.svg';
import Map from './Map';

const Footer = () => {
    return (
        <section className="intro-video-area section">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="inner-content-head" style={{marginBottom:"10px", paddingBottom:"15px"}}>
                            <div className="inner-content" style={{marginBottom:"10px", paddingBottom:"15px"}}>
                                <img className="shape1" src={Shape1} alt="#" />
                                <img className="shape2" src={Shape2} alt="#" />
                                <div className="footer-cont">
                                    <div className="foot-left">
                                        <div className="foot-logo">
                                            <img src="/images/logo/ttg_logo.png" alt="log" />
                                        </div>
                                        <div className="foot-social">
                                            <div className="foot-social-head-one">
                                                Let's Connect
                                            </div>
                                            <div className="foot-social-msg">
                                                Follow Us On :
                                            </div>
                                            <div className="foot-social-icons">
                                                <a href=""><li className="fa fa-facebook"></li></a>
                                                <a href=""><li className="fa fa-instagram"></li></a>
                                                <a href=""><li className="fa fa-linkedin"></li></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="foot-center-i">
                                        <div><Link className="foot-center-i-page" to="/">Home</Link></div>
                                        <div><Link className="foot-center-i-page" to="/about">About</Link></div>
                                        <div><Link className="foot-center-i-page" to="/events">Events</Link></div>
                                        <div><Link className="foot-center-i-page" to="/gallery">Gallery</Link></div>
                                    </div>
                                    <div className="foot-center-ii">
                                        <div className="foot-center-ii-h">Links</div>
                                        <div><a href="/">SRIC</a></div>
                                        <div><a href="/">TED</a></div>
                                        <div><a href="/">TEDx</a></div>
                                    </div>
                                    <div className="footer-right">
                                        <Map />
                                    </div>
                                </div>
                                <div className="foot-cr">Copyright @2021 <a href="/">Technology Transfer Group</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Footer;