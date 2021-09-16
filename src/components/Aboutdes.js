import './css/main.css';
import Shape1 from './images/video/shape1.svg';
import Shape2 from './images/video/shape2.svg';
import WOW from 'wowjs';

const Aboutdes = () => {

    const wow = new WOW.WOW();
    wow.init();


    return (
        <section className="intro-video-area section">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="inner-content-head">
                            <div className="inner-content">
                                <img className="shape1" src={Shape1} alt="#" />
                                <img className="shape2" src={Shape2} alt="#" />
                                <div className="section-title">
                                    <span className="wow zoomIn" data-wow-delay=".2s">About Us</span>
                                    <h2 className="wow fadeInUp" data-wow-delay=".4s">Technology Transfer Group</h2>
                                    <p className="wow fadeInUp" data-wow-delay=".6s">Technology Transfer Group(TTG) is a students’ initiative under
                                        the aegis of Sponsored Research And Industrial Consultancy, IIT Kharagpur</p>
                                </div>
                                <div className="section start-process wow fadeInUp" data-wow-delay=".4s" style={{paddingTop:'0'}}>
                                    <div class="row">
                                        <div class="col-lg-4 col-md-4 col-12">
                                            <div class="single-process">
                                                <span class="serial">01</span>
                                                <h3>Linking</h3>
                                                <p>We act as a link between the industry and the academia to facilitate transfer of industry ready technologies and presenting IIT Kharagpur as a research consultant</p>
                                            </div>
                                        </div>
                                        <div class="col-lg-4 col-md-4 col-12">
                                            <div class="single-process">
                                                <span class="serial">02</span>
                                                <h3>Patents</h3>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos consectetur tidio.</p>
                                            </div>
                                        </div>
                                        <div class="col-lg-4 col-md-4 col-12">
                                            <div class="single-process">
                                                <span class="serial">03</span>
                                                <h3>TedXIITKharagpur</h3>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos consectetur tidio.</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Aboutdes;