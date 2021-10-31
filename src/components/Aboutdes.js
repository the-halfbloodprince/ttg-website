import '../style/main.css'
import Aos from "aos"
import { useEffect } from "react";
import "aos/dist/aos.css";


const Aboutdes = () => {

    
    useEffect(()=>{
        Aos.init({duration:1500 });
        },[]);


    return (
        <section className="intro-video-area section">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="inner-content-head">
                            <div className="inner-content">
                                <img className="shape1" src="/images/shapes/shape1.svg" alt="#" />
                                <img className="shape2" src="/images/shapes/shape2.svg" alt="#" />
                                <div className="section-title">
                                    <span data-aos="zoom-in-up" data-aos-delay="100">About Us</span>
                                    <h2 data-aos="zoom-in-up" data-aos-delay="200">Technology Transfer Group</h2>
                                    <p data-aos="zoom-in-up" data-aos-delay="300">Technology Transfer Group(TTG) is a students’ initiative under
                                        the aegis of Sponsored Research And Industrial Consultancy, IIT Kharagpur</p>
                                </div>
                                <div className="section start-process "  style={{paddingTop:'0'}}>
                                    <div class="row">
                                        <div class="col-lg-4 col-md-4 col-12" data-aos="fade-up" data-aos-delay="100">
                                            <div class="single-process">
                                                {/* <span class="serial" >01</span> */}
                                                <h3>Linking</h3>
                                                <p>We act as a link between the industry and the academia to facilitate transfer of industry ready technologies and presenting IIT Kharagpur as a research consultant</p>
                                            </div>
                                        </div>
                                        <div class="col-lg-4 col-md-4 col-12" data-aos="fade-up" data-aos-delay="300">
                                            <div class="single-process">
                                                {/* <span class="serial">02</span> */}
                                                <h3>Workshops</h3>
                                                <p>We organize events that are aimed at educating and promoting research among the students of the institute.</p>
                                            </div>
                                        </div>
                                        <div class="col-lg-4 col-md-4 col-12" data-aos="fade-up" data-aos-delay="500">
                                            <div class="single-process">
                                                {/* <span class="serial">03</span> */}
                                                <h3>TEDx IITKharagpur</h3>
                                                <p>TTG organizes TEDX IIT Kharagpur as a platform to share and discover ideas every year.</p>
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