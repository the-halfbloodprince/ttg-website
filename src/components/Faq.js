import '../style/main.css';
import 'bootstrap';
import "aos/dist/aos.css";
import {useEffect} from "react";
import Aos from "aos"
const Faq = () => {


  useEffect(()=>{
        Aos.init({duration:1500});
        },[]);


    return ( 
        <section className="faq section">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="section-title">
                        <h3 data-aos="zoom-in-up" data-aos-delay="100" data-aos-offset="180">Faq</h3>
                        <h2 data-aos="zoom-in-up" data-aos-delay="200" data-aos-offset="180">frequently asked questions</h2>
                        
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6 col-md-12 col-12">
                    <div className="accordion" id="accordionExample">
                        <div className="accordion-item" data-aos="fade-up" data-aos-delay="100" data-aos-offset="100">
                            <h2 className="accordion-header" id="heading1">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapse1" aria-expanded="false" aria-controls="collapse1" >
                                    <span className="title">What is IPR?</span><i className="fa fa-plus"></i>
                                </button>
                            </h2>
                            <div id="collapse1" className="accordion-collapse collapse" aria-labelledby="heading1"
                                data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <p>IPR Workshop is an annual workshop held by TTG where professionals and experienced individuals involved in research provide educational sessions for students starting their academic and research journey.</p>
                                </div>
                            </div>
                        </div>
                        {/* <div className="accordion-item" data-aos="fade-up" data-aos-delay="100" data-aos-offset="100">
                            <h2 className="accordion-header" id="heading2">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                                    <span className="title">What is a Patent?</span><i className="fa fa-plus"></i>
                                </button>
                            </h2>
                            <div id="collapse2" className="accordion-collapse collapse" aria-labelledby="heading2"
                                data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                                        richardson ad squid. 3 wolf moon officia aute. non cupidatat skateboard dolor
                                        brunch. Foosd truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                                        sunt alqua put a bird on it squid single-origin coffee nulla assumenda
                                        shoreditch et. Nihil anim ke ffiyeh helvetica, craft beer labore wes anderson
                                        cred nesciunt sapiente ea proident.</p>
                                </div>
                            </div>
                        </div> */}
                        <div className="accordion-item" data-aos="fade-up" data-aos-delay="100" data-aos-offset="100">
                            <h2 className="accordion-header" id="heading3">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
                                    <span className="title">What is TEDx IIT Kharagpur?</span><i className="fa fa-plus"></i>
                                </button>
                            </h2>
                            <div id="collapse3" className="accordion-collapse collapse" aria-labelledby="heading3"
                                data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <p>TEDx IIT Kharagpur is an annual series of talks at IIT Kharagpur where renouned and insipiring individuals deliver talks on their inspiring stories and ideas.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12 col-12 xs-margin">
                    <div className="accordion" id="accordionExample2">
                        {/* <div className="accordion-item" data-aos="fade-up" data-aos-delay="100" data-aos-offset="100">
                            <h2 className="accordion-header" id="heading11">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapse11" aria-expanded="false" aria-controls="collapse11">
                                    <span className="title">What is the TTG Research Blog?</span><i className="fa fa-plus"></i>
                                </button>
                            </h2>
                            <div id="collapse11" className="accordion-collapse collapse" aria-labelledby="heading11"
                                data-bs-parent="#accordionExample2">
                                <div className="accordion-body">
                                    <p>TTG Research Blog is a project we are working on </p>
                                </div>
                            </div>
                        </div> */}
                        <div className="accordion-item" data-aos="fade-up" data-aos-delay="100" data-aos-offset="100">
                            <h2 className="accordion-header" id="heading22">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapse22" aria-expanded="false" aria-controls="collapse22">
                                    <span className="title">What is SRIC?</span><i className="fa fa-plus"></i>
                                </button>
                            </h2>
                            <div id="collapse22" className="accordion-collapse collapse" aria-labelledby="heading22"
                                data-bs-parent="#accordionExample2">
                                <div className="accordion-body">
                                    <p>SRIC is an official body of IIT Kharagpur which acts as a bridge connecting the academia with the industry.</p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item" data-aos="fade-up" data-aos-delay="100" data-aos-offset="100">
                            <h2 className="accordion-header" id="heading33">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapse33" aria-expanded="false" aria-controls="collapse33">
                                    <span className="title">Where to the dates for TEDx 2021?</span><i
                                        className="fa fa-plus"></i>
                                </button>
                            </h2>
                            <div id="collapse33" className="accordion-collapse collapse" aria-labelledby="heading33"
                                data-bs-parent="#accordionExample2">
                                <div className="accordion-body">
                                    <p>You can find the dates along with all the other information on <a href="https://tedxiitkharagpur.com">TEDx IIT Kharagpur's official page</a>. </p>
                                    <p>You can also contact any Core Team Member at TTG to know more.</p>
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
 
export default Faq;