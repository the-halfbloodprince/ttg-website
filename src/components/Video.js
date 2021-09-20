import './css/main.css';
import Shape1 from './images/video/shape1.svg';
import Shape2 from './images/video/shape2.svg';
import GLightbox from 'glightbox';
import './css/gilghtbox.min.css';
import { useEffect } from "react";
import "aos/dist/aos.css";

import Aos from "aos"


const Video = () => {

    

    useEffect(() => GLightbox())
    const glightbox = GLightbox({
        'href': 'https://www.youtu.be/1uX6iXysFJo',
        'type': 'video',
        'source': 'youtube', //vimeo, youtube or local
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
                            <img className="shape1" src={Shape1} alt="#" />
                            <img className="shape2" src={Shape2} alt="#" />
                            <div className="section-title">
                                <span data-aos="zoom-in-up"  data-aos-offset="140" data-aos-delay="100">Check this Out!</span>
                                <h2 data-aos="zoom-in-up" data-aos-offset="140" data-aos-delay="200">IIT Kharagpur Research Park</h2>
                                <p data-aos="zoom-in-up"  data-aos-offset="140" data-aos-delay="300">Lorem ipsum, dolor sit amet consectetur
                                    adipisicing elit. Consectetur corporis rerum necessitatibus, minima rem inventore
                                    alias. Hic, quaerat eius aliquam ipsam asperiores, explicabo sit veritatis quis quae
                                    ullam porro quo.</p>
                            </div>
                            <div className="intro-video-play">
                                <div className="play-thumb " data-aos="fade-up" data-aos-offset="2"  data-aos-delay="100">
                                    <a href="https://www.youtu.be/1uX6iXysFJo" className="glightbox video"><i
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