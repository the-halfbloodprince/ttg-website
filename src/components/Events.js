import Arm from './images/features/Group 2.svg'
import Ted from './images/features/Rectangle 1.svg'
import Ipr from './images/features/bro.svg'
import WOW from 'wowjs'



const Events = () => {

    const wow = new WOW.WOW();
    wow.init();

    return (
        <div className="feature section">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="section-title">
                            <h3 className="wow zoomIn" data-wow-delay=".2s">What We Do</h3>
                            <h2 className="wow fadeInUp" data-wow-delay=".4s">Our Events</h2>
                            <p className="wow fadeInUp" data-wow-delay=".6s">Our Events are to Enhance Research Activities in KGP by</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-12 wow bounceInLeft" data-wow-delay=".2s">
                        <div className="feature-box">
                            <div className="tumb">
                                <img src={Arm} className="event_cover" alt="" />
                            </div>
                            <h4 className="text-title">Annual Research Meet</h4>
                            <p>Technology Transfer Group (TTG) act as a link between the industry and the academia to facilitate transfer of industry ready technologies and presenting IIT Kharagpur as a research consultant.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 wow fadeInUp" data-wow-delay=".2s">
                        <div className="feature-box">
                            <div className="tumb">
                                <img src={Ted} className="event_cover" alt="" />
                            </div>
                            <h4 className="text-title">TedXIITKharagpur</h4>
                            <p>Our event is called TEDxIITKharagpur, where x = independently organized TED event. At our TEDxIITKharagpur event, TED Talks video and live speakers will combine to spark deep discussion and connection in a small group.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 wow bounceInRight" data-wow-delay=".2s">
                        <div className="feature-box">
                            <div className="tumb">
                                <img src={Ipr} className="event_cover" alt="" />
                            </div>
                            <h4 className="text-title">IPR Workshop</h4>
                            <p>IPR Workshop is anually conducted by Technology Transfer Group(TTG).his event saw a very enthusiastic participation from the students of
                                IIT Kharagpur.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Events;
