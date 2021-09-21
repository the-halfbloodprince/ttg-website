import './css/main.css'
import sricimg from './images/about/about-image.png'
import Aos from "aos"
import { useEffect } from "react";
import "aos/dist/aos.css";
const Sric = () => {

    useEffect(()=>{
        Aos.init({duration:1500 });
        },[]);

    return ( 
        <section className="about section">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6 col-12">
                    <div className="img " data-aos="zoom-in-up" data-aos-delay="200">
                        <img src={sricimg} alt="sric" />
                    </div>
                </div>
                <div className="col-lg-6 col-12">
                    <div className="content " >
                        <h4 data-aos="zoom-in-up" data-aos-delay="200">SRIC</h4>
                        <h2 data-aos="zoom-in-up" data-aos-delay="300">Sponsored Research and Industrial Consultancy</h2>
                        <p data-aos="zoom-in-up" data-aos-delay="400" >The Sponsored Research and Industrial Consultancy (SRIC) Cell of IIT Kharagpur looks after all
                            the sponsored research activities of IIT Kharagpur starting from project submission, project
                            management including accounting, recruitment of research personnel, interactions with the
                            funding agency, protection of IPR and technology transfer. Additionally, SRIC plays a vital
                            role in the initiation of new research initiatives of the Institute and implementation of
                            various national initiatives.</p>
                        <div className="list">
                            <div className="single-list" data-aos="zoom-in-up" data-aos-delay="200">
                                <div className="list-icon" >
                                    <i className="fa fa-check"></i>
                                </div>
                                <h4>Projects</h4>
                                <p>Quis autem vel eum reprehenderit</p>
                            </div>
                            <div className="single-list" data-aos="zoom-in-up" data-aos-delay="300">
                                <div className="list-icon" >
                                    <i className="fa fa-check"></i>
                                </div>
                                <h4>Research</h4>
                                <p>Quis autem vel eum reprehenderit</p>
                            </div>
                            <div className="single-list" data-aos="zoom-in-up" data-aos-delay="400">
                                <div className="list-icon" >
                                    <i className="fa fa-check"></i>
                                </div>
                                <h4>Patents</h4>
                                <p>Quis autem vel eum reprehenderit</p>
                            </div>
                            <div  className="single-list" data-aos="zoom-in-up" data-aos-delay="600">
                                <div className="list-icon">
                                    <i className="fa fa-check"></i>
                                </div>
                                <h4>IPR</h4>
                                <p>Quis autem vel eum reprehenderit</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
     );
}
 
export default Sric;