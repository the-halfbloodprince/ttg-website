import WOW from 'wowjs';
import './css/main.css';
import TinySlider from './TinySlider';

const Testimonals = () => {


    const wow = new WOW.WOW();
    wow.init();



    return (
        <section className="testimonials style2 section">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="section-title">
                            <h3 className="wow zoomIn" data-wow-delay=".2s">What Proffesors Say</h3>
                            <h2 className="wow fadeInUp" data-wow-delay=".4s">Our Testimonials</h2>
                            <p className="wow fadeInUp" data-wow-delay=".6s">Lorem ipsum dolor sit, amet consectetur adipisicing
                                elit. Dolorem atque et beatae soluta, amet ratione exercitationem. Numquam omnis maiores
                                nisi earum saepe ipsum ducimus, reprehenderit corrupti, architecto cumque odio a?</p>
                        </div>
                    </div>
                </div>
                <TinySlider>
                <div className="row testimonial-slider">
                    <div className="col-lg-6 col-12 ">

                        <div className="single-testimonial">
                            <div className="inner-content">
                                <div className="quote-icon">
                                    <i className="fa fa-quote-right"></i>
                                </div>
                                <div className="text">
                                    <p>“Lorem ipsum dolor sit, amet consectetur adipisicing
                                        elit. Dolorem atque et beatae soluta, amet ratione exercitationem. Numquam omnis
                                        maiores
                                        nisi earum saepe ipsum ducimus, reprehenderit corrupti, architecto cumque odio a?”
                                    </p>
                                </div>
                                <div className="author">
                                    <img src="assets/images/testimonial/testi-1.png" alt="#" />
                                    <h4 className="name">Prof. Arghya Deb
                                        <span className="deg">Department of Civil Engineering</span>
                                    </h4>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div clasName="col-lg-6 col-12 ">

                        <div className="single-testimonial">
                            <div className="inner-content">
                                <div className="quote-icon">
                                    <i className="fa fa-quote-right"></i>
                                </div>
                                <div className="text">
                                    <p>“Lorem ipsum dolor sit, amet consectetur adipisicing
                                        elit. Dolorem atque et beatae soluta, amet ratione exercitationem. Numquam omnis
                                        maiores
                                        nisi earum saepe ipsum ducimus, reprehenderit corrupti, architecto cumque odio a?”
                                    </p>
                                </div>
                                <div className="author">
                                    <img src="assets/images/testimonial/testi-2.png" alt="#" />
                                    <h4 className="name">Prof. H N Mishra
                                        <span className="deg">Department of Agriculture and Food Engineering</span>
                                    </h4>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-6 col-12 ">

                        <div className="single-testimonial">
                            <div className="inner-content">
                                <div className="quote-icon">
                                    <i className="fa fa-quote-right"></i>
                                </div>
                                <div className="text">
                                    <p>“Lorem ipsum dolor sit, amet consectetur adipisicing
                                        elit. Dolorem atque et beatae soluta, amet ratione exercitationem. Numquam omnis
                                        maiores
                                        nisi earum saepe ipsum ducimus, reprehenderit corrupti, architecto cumque odio a?”
                                    </p>
                                </div>
                                <div className="author">
                                    <img src="assets/images/testimonial/testi-3.png" alt="#" />
                                    <h4 className="name">Prof. Hari V Warrior
                                        <span className="deg">Department of Ocean Engineering and Naval Architecture</span>
                                    </h4>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-6 col-12 ">

                        <div className="single-testimonial">
                            <div className="inner-content">
                                <div className="quote-icon">
                                    <i className="fa fa-quote-right"></i>
                                </div>
                                <div className="text">
                                    <p>“Lorem ipsum dolor sit, amet consectetur adipisicing
                                        elit. Dolorem atque et beatae soluta, amet ratione exercitationem. Numquam omnis
                                        maiores
                                        nisi earum saepe ipsum ducimus, reprehenderit corrupti, architecto cumque odio a?”
                                    </p>
                                </div>
                                <div className="author">
                                    <img src="assets/images/testimonial/testi-2.png" alt="#" />
                                    <h4 className="name">Prof. Amlan Dutta
                                        <span className="deg">Department of Metallurgical and Materials Engineering</span>
                                    </h4>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-6 col-12 ">

                        <div className="single-testimonial">
                            <div className="inner-content">
                                <div className="quote-icon">
                                    <i className="fa fa-quote-right"></i>
                                </div>
                                <div className="text">
                                    <p>“Lorem ipsum dolor sit, amet consectetur adipisicing
                                        elit. Dolorem atque et beatae soluta, amet ratione exercitationem. Numquam omnis
                                        maiores
                                        nisi earum saepe ipsum ducimus, reprehenderit corrupti, architecto cumque odio a?”
                                    </p>
                                </div>
                                <div className="author">
                                    <img src="assets/images/testimonial/testi-3.png" alt="#" />
                                    <h4 className="name">Prof. Suman Chakraborty
                                        <span className="deg">Dean, SRIC, IIT Kharagpur</span>
                                    </h4>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                </TinySlider>
            </div>
        </section>
    );
}

export default Testimonals;