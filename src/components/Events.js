import "aos/dist/aos.css";
import { useEffect } from "react";
import Aos from "aos"

const Events = () => {
    useEffect(() => {
        Aos.init({ duration: 1500 });
    }, []);


    return (
        <div className="feature section" >
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="section-title">
                            <h3 data-aos="zoom-in-up" data-aos-delay="100" data-aos-offset="100" >What We Do</h3>
                            <h2 data-aos="zoom-in-up" data-aos-delay="200" data-aos-offset="100" >Our Events</h2>
                            <p data-aos="zoom-in-up" data-aos-delay="300" data-aos-offset="100">Our Events are to Enhance Research Activities in KGP by</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-12 " data-aos="fade-up" data-aos-delay="100" data-aos-offset="140">
                        <div className="feature-box">
                            <div className="tumb">
                                <img src="images/features/Group 2.svg" className="event_cover" alt="" />
                            </div>
                            <h4 className="text-title">Annual Research Meet</h4>
                            <p>Annual Research Meet is the initiative by TTG to explain research and development going on in IIT Kharagpur. We discuss new technologies and research culture in college.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 " data-aos="fade-up" data-aos-delay="100" data-aos-offset="140">
                        <div className="feature-box">
                            <div className="tumb">
                                <img src="images/features/Rectangle 1.svg" className="event_cover" alt="" />
                            </div>
                            <h4 className="text-title">TedXIITKharagpur</h4>
                            <p>TEDxIITKharagpur independently organized TED events (subject to certain rules and regulations). TEDx is a program of local, self-organized events that bring people together to share a TED-like experience.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 " data-aos="fade-up" data-aos-delay="100" data-aos-offset="140">
                        <div className="feature-box">
                            <div className="tumb">
                                <img src="images/features/bro.svg" className="event_cover" alt="" />
                            </div>
                            <h4 className="text-title">IPR Workshop</h4>
                            <p>IPR Workshop is anually conducted by Technology Transfer Group(TTG). This event saw a very enthusiastic participation from the students of IIT Kharagpur.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Events;
