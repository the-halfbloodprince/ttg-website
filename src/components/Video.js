import './css/main.css';
import Shape1 from './images/video/shape1.svg';
import Shape2 from './images/video/shape2.svg';
import WOW from 'wowjs';
import GLightbox from 'glightbox';
import './css/gilghtbox.min.css';
import { useEffect } from "react";


const Video = () => {

    const wow = new WOW.WOW();
    wow.init();

    useEffect(() => GLightbox())
    const glightbox = GLightbox({
        'href': 'https://www.youtu.be/1uX6iXysFJo',
        'type': 'video',
        'source': 'youtube', //vimeo, youtube or local
        'width': 900,
        'autoplayVideos': true,
    });

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
                                <span className="wow zoomIn" data-wow-delay=".2s">Check this Out!</span>
                                <h2 className="wow fadeInUp" data-wow-delay=".4s">IIT Kharagpur Research Park</h2>
                                <p className="wow fadeInUp" data-wow-delay=".6s">Lorem ipsum, dolor sit amet consectetur
                                    adipisicing elit. Consectetur corporis rerum necessitatibus, minima rem inventore
                                    alias. Hic, quaerat eius aliquam ipsam asperiores, explicabo sit veritatis quis quae
                                    ullam porro quo.</p>
                            </div>
                            <div className="intro-video-play">
                                <div className="play-thumb wow zoomIn" data-wow-delay=".2s">
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