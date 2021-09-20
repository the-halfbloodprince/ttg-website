import { Link } from 'react-router-dom';
import './css/main.css'
import Shape2 from './images/video/shape2.svg';
import Map from './Map';
import WOW from 'wowjs'

const Footer = () => {

    const wow = new WOW.WOW();
    wow.init();

    return (
        <section className="intro-video-area section">
            <div className="container" data-aos="zoom-in-up" data-aos-offset="140">
                <div className="row">
                    <div className="col-12">
                        <div className="inner-content-head wow fadeInUp" data-wow-delay=".4s" style={{ marginBottom: "10px", paddingBottom: "15px" }}>
                            <div className="inner-content" style={{ marginBottom: "10px", paddingBottom: "15px" }}>
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
                                                <a href="https://www.facebook.com/TTG.SRIC" target="_blank"><li className="ta-fb fa fa-facebook"></li></a>
                                                <a href="ttgiitkharagpur@gmail.com" target="_blank"><li className="ta-ma fa fa-envelope"></li></a>
                                                <a href="https://www.linkedin.com/company/technology-transfer-group" target="_blank"><li className="ta-li fa fa-linkedin"></li></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="foot-center-i">
                                        <Link className="foot-center-i-page" to="/">Home</Link>
                                        <Link className="foot-center-i-page" to="/about">About</Link>
                                        <Link className="foot-center-i-page" to="/events">Events</Link>
                                        <Link className="foot-center-i-page" to="/gallery">Gallery</Link>
                                    </div>
                                    <div className="foot-center-ii">
                                        <div className="foot-center-ii-h">Links</div>
                                        <a href="http://www.sric.iitkgp.ac.in/web/" target="_blank" className="foot-center-ii-page">SRIC</a>
                                        <a href="https://www.ted.com/" target="_blank" className="foot-center-ii-page">TED</a>
                                        <a href="http://tedxiitkharagpur.com/" target="_blank" className="foot-center-ii-page">TEDx</a>
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