import '../style/main.css';
import GLightbox from 'glightbox';
import '../style/gilghtbox.min.css';
import { useEffect } from "react";
import "aos/dist/aos.css";

import Aos from "aos"


const Video = () => {

    

    useEffect(() => GLightbox())
    const glightbox = GLightbox({
        'href': '/images/features/video_intro.mp4',
        'type': 'video',
        'source': 'local', //vimeo, youtube or local
        'width': 900,
        'autoplayVideos': true,
    });
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
                                <span data-aos="zoom-in-up"  data-aos-offset="140" data-aos-delay="100">Check this Out!</span>
                                <h2 data-aos="zoom-in-up" data-aos-offset="140" data-aos-delay="200">TEDx IIT Kharagpur 2020</h2>
                                <p data-aos="zoom-in-up"  data-aos-offset="140" data-aos-delay="300">TEDx IITKharagpur independently organized TED events (subject to certain rules and regulations). TEDx is a program of local, self-organized events that bring people together to share a TED-like experience.</p>
                            </div>
                            <div className="intro-video-play">
                                <div className="play-thumb " data-aos="fade-up" data-aos-offset="2"  data-aos-delay="100">
                                    <a href="/images/features/video_intro.mp4" className="glightbox video"><i
                                            className="fa fa-play"></i></a>
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

 
export default Video;