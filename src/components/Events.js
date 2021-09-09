import Arm from './images/features/student-guy-studying-internet-watching-online-lecture-computer-talking-math-tutor-through-video-call-cartoon-illustration_74855-14524.webp';
import Ted from './images/features/tedx-logo-FE7A5DACA7-seeklogo.com.png';
import Ipr from './images/features/intellectual-property-concept-with-hand-holding-lightbulb_23-2148695694.webp';
import WOW from 'wowjs';



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
                          <p className="wow fadeInUp" data-wow-delay=".6s">Technology Transfer Group (TTG) is a students'
                              initiative under the aegis of Sponsored Research and Industrial Consultancy, IIT Kharagpur,
                              which believes in the potential of the Institute as a premier Research and Development centre.
                              We act as a link between the industry and the academia to facilitate transfer of industry
                              ready technologies and presenting IIT Kharagpur as a research consultant. </p>
                      </div>
                  </div>
              </div>
              <div className="row">
                  <div className="col-lg-4 col-md-6 col-12 wow fadeInUp" data-wow-delay=".2s">
                      <div className="feature-box">
                          <div className="tumb">
                              <img src={Arm} className="event_cover" alt="" />
                          </div>
                          <h4 className="text-title">Annual Research Meet</h4>
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ipsa a consequuntur
                              iste magni deserunt eveniet eos beatae soluta libero. Beatae, repudiandae. Accusamus earum
                              delectus aut ad at similique quam.</p>
                      </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-12 wow fadeInUp" data-wow-delay=".4s">
                      <div className="feature-box">
                          <div className="tumb">
                              <img src={Ted} className="event_cover" alt="" />
                          </div>
                          <h4 className="text-title">TedXIITKharagpur</h4>
                          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit ipsum quae nostrum architecto
                              ea? Eveniet, earum inventore unde repellat vitae, corrupti quis provident quod quibusdam
                              ullam, iste alias reprehenderit placeat.</p>
                      </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-12 wow fadeInUp" data-wow-delay=".6s">
                      <div className="feature-box">
                          <div className="tumb">
                              <img src={Ipr} className="event_cover" alt="" />
                          </div>
                          <h4 className="text-title">IPR Workshop</h4>
                          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime error reprehenderit pariatur
                              natus nihil maiores illum voluptatum aliquam molestias cumque! Cupiditate, est magnam ut
                              consequatur laboriosam repellat nisi nihil nemo.</p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
     );
}
 
export default Events;
