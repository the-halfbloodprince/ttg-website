import WOW from 'wowjs';
import './css/main.css';
import TinySlider from './TinySlider';


const Timeline = () => {

    const wow = new WOW.WOW();
    wow.init();

    // tns({
    //     container: '.road-map-slider',
    //     items: 1,
    //     slideBy: 'page',
    //     autoplay: false,
    //     mouseDrag: true,
    //     gutter: 0,
    //     nav: true,
    //     controls: false,
    //     responsive: {
    //         0: {
    //             items: 2,
    //         },
    //         540: { 
    //             items: 3,
    //         },
    //         768: {
    //             items: 4,
    //         },
    //         992: {
    //             items: 4,
    //         },
    //         1170: {
    //             items: 6,
    //         }
    //     }
    // });

    return (
        <section className="road-map section">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="section-title">
                            <h2 className="wow fadeInUp" data-wow-delay=".4s">Our Timeline</h2>
                            <p className="wow fadeInUp" data-wow-delay=".6s">Lorem ipsum dolor sit amet, consectetur adipisicing
                                elit. Magni, commodi ducimus? Repudiandae neque nam placeat quo facere quisquam, numquam
                                quia totam, beatae obcaecati tempora aut enim odio earum expedita sint.</p>
                        </div>
                    </div>
                </div>
                <div className="top-row wow fadeIn" data-wow-delay=".4s">
                    <div className="">
                        <TinySlider>
                            <div className="row road-map-slider">
                                <div className="col-lg-2 col-md-3 col-12 p-0">

                                    <div className="single-map down">
                                        <span className="arrow"></span>
                                        <h3>Sept 10,2021
                                            <span>Annual research Meet</span>
                                        </h3>
                                    </div>

                                </div>
                                <div className="col-lg-2 col-md-3 col-12 p-0">

                                    <div className="single-map">
                                        <span className="arrow"></span>
                                        <h3>Oct 15,2021
                                            <span>IPR Workshop</span>
                                        </h3>
                                    </div>

                                </div>
                                <div className="col-lg-2 col-md-3 col-12 p-0">

                                    <div className="single-map down">
                                        <span className="arrow"></span>
                                        <h3>Jan 05,2022
                                            <span>TedXIITKharagpur</span>
                                        </h3>
                                    </div>

                                </div>
                                <div className="col-lg-2 col-md-3 col-12 p-0">

                                    <div className="single-map">
                                        <span className="arrow"></span>
                                        <h3>Feb 10,2022
                                            <span>Lorem Ipsum</span>
                                        </h3>
                                    </div>

                                </div>
                                <div className="col-lg-2 col-md-3 col-12 p-0">

                                    <div className="single-map down">
                                        <span className="arrow"></span>
                                        <h3>Feb 25,2022
                                            <span>Lorem Ipsum</span>
                                        </h3>
                                    </div>

                                </div>
                                <div className="col-lg-2 col-md-3 col-12 p-0">

                                    <div className="single-map">
                                        <span className="arrow"></span>
                                        <h3>March,2022
                                            <span>Lorem Ipsum</span>
                                        </h3>
                                    </div>

                                </div>


                            </div>
                        </TinySlider>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Timeline;