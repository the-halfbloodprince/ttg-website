import '../style/main.css'
import Aos from "aos"
import { useEffect } from "react";
import "aos/dist/aos.css";


const Team = () => {


    useEffect(()=>{
        Aos.init({duration:1500 });
        },[]);


    return ( 
        <section className="team section">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="section-title">
                        <h3 data-aos="zoom-in-up" data-aos-delay="100" >Heads</h3>
                        <h2 data-aos="zoom-in-up" data-aos-delay="200" >Meet the Heads</h2>
                        {/* <p data-aos="zoom-in-up" data-aos-delay="300" >Here's the wonderful team of heads xD</p> */}
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-3 col-md-6 col-12 " data-aos="zoom-in-up" data-aos-delay="150" >

                    <div className="single-team">
                        <div className="team-image">
                            <img src="/images/team/manish.jpg" alt="team" />
                        </div>
                        <div className="content">
                            <h4>Manish Kumar Das
                                <span>Web Team Head</span>
                            </h4>
                            <ul className="social" style={{textAlign:"center"}}>
                                <li><a href="https://www.facebook.com/iammkdmanish" target="_blank" rel="noreferrer"><i className="fa fa-facebook"></i></a></li>
                                <li><a href="ammanishkumardas@gmail.com" target="_blank" rel="noreferrer"><i className="fa fa-envelope"></i></a></li>
                                <li><a href="https://www.linkedin.com/in/manishkumardas3581321/" target="_blank" rel="noreferrer"><i className="fa fa-linkedin"></i></a></li>
                            </ul>
                        </div>
                    </div>

                </div>
                <div className="col-lg-3 col-md-6 col-12 " data-aos="zoom-in-up" data-aos-delay="300" >

                    <div className="single-team">
                        <div className="team-image">
                            <img src="/images/team/aditi.jpg" alt="team" />
                        </div>
                        <div className="content">
                            <h4>Aditi Mourya
                                <span>Core Team Head</span>
                            </h4>
                            <ul className="social">
                                <li><a href="https://www.facebook.com/messages/t/100056926354845/" target="_blank" rel="noreferrer"><i className="fa fa-facebook"></i></a></li>
                                <li><a href="aditi.2303.tanu@gmail.com" target="_blank" rel="noreferrer"><i className="fa fa-envelope"></i></a></li>
                                <li><a href="https://www.linkedin.com/in/aditi-maurya-a7a7a3196/" target="_blank" rel="noreferrer"><i className="fa fa-linkedin"></i></a></li>
                            </ul>
                        </div>
                    </div>

                </div>
                <div className="col-lg-3 col-md-6 col-12 " data-aos="zoom-in-up" data-aos-delay="450" >

                    <div className="single-team">
                        <div className="team-image">
                            <img src="/images/team/kk.png" alt="team" />
                        </div>
                        <div className="content">
                            <h4>Krishnakant Rawat
                                <span>Design and Media Team Head</span>
                            </h4>
                            <ul className="social">
                                <li><a href="https://www.facebook.com/krishnakant.rawat.587/" target="_blank" rel="noreferrer"><i className="fa fa-facebook"></i></a></li>
                                <li><a href="sagar18052002@gmail.com" target="_blank" rel="noreferrer"><i className="fa fa-envelope"></i></a></li>
                                <li><a href="https://www.linkedin.com/in/krishnakant-rawat/" target="_blank" rel="noreferrer"><i className="fa fa-linkedin"></i></a></li>
                            </ul>
                        </div>
                    </div>

                </div>
                <div className="col-lg-3 col-md-6 col-12 " data-aos="zoom-in-up" data-aos-delay="600" >

                    <div className="single-team">
                        <div className="team-image">
                            <img src="/images/team/sagar.jpg" alt="team" />
                        </div>
                        <div className="content">
                            <h4>Sagar Varade
                                <span>Core Team Head</span>
                            </h4>
                            <ul className="social">
                                <li><a href="https://www.facebook.com/sagar.varade.3720" target="_blank" rel="noreferrer"><i className="fa fa-facebook"></i></a></li>
                                <li><a href="sagar18052002@gmail.com" target="_blank" rel="noreferrer"><i className="fa fa-envelope"></i></a></li>
                                <li><a href="https://www.linkedin.com/in/sagar-varade-594aa1198/" target="_blank" rel="noreferrer"><i className="fa fa-linkedin"></i></a></li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>

            <div className="row">
                <div className="col-lg-3 col-md-6 col-12 w" data-aos="zoom-in-up" data-aos-delay="150" >

                    <div className="single-team">
                        <div className="team-image">
                            <img src="/images/team/aman.jpeg" alt="team" />
                        </div>
                        <div className="content">
                            <h4>Aman Mishra
                                <span>Core Team Head</span>
                            </h4>
                            <ul className="social">
                                <li><a href="https://www.facebook.com/profile.php?id=100026014789211" target="_blank" rel="noreferrer"><i className="fa fa-facebook"></i></a></li>
                                <li><a href="aman005mishra@gmail.com" target="_blank" rel="noreferrer"><i className="fa fa-envelope"></i></a></li>
                                <li><a href="https://www.linkedin.com/in/aman005/" target="_blank" rel="noreferrer"><i className="fa fa-linkedin"></i></a></li>
                            </ul>
                        </div>
                    </div>

                </div>
                <div className="col-lg-3 col-md-6 col-12 " data-aos="zoom-in-up" data-aos-delay="300" >

                    <div className="single-team">
                        <div className="team-image">
                            <img src="/images/team/shivani.jpg" alt="team" />
                        </div>
                        <div className="content">
                            <h4>Shivani Vasam
                                <span>Core Team Head</span>
                            </h4>
                            <ul className="social">
                                <li><a href="https://www.facebook.com/shivani.vasam.16" target="_blank" rel="noreferrer"><i className="fa fa-facebook"></i></a></li>
                                <li><a href="vasamshivani07@gmail.com" target="_blank" rel="noreferrer"><i className="fa fa-envelope"></i></a></li>
                                <li><a href="https://www.linkedin.com/in/shivani-vasam/" target="_blank" rel="noreferrer"><i className="fa fa-linkedin"></i></a></li>
                            </ul>
                        </div>
                    </div>

                </div>
                <div className="col-lg-3 col-md-6 col-12 " data-aos="zoom-in-up" data-aos-delay="450" >

                    <div className="single-team">
                        <div className="team-image">
                            <img src="/images/team/tulsi.jpg" alt="team" />
                        </div>
                        <div className="content">
                            <h4>Tulsi Bhimani
                                <span>Core Team Head</span>
                            </h4>
                            <ul className="social">
                                <li><a href="https://www.facebook.com/tulsi.bhimani.9" target="_blank" rel="noreferrer"><i className="fa fa-facebook"></i></a></li>
                                <li><a href="tnileshbhaibhimani@gmail.com" target="_blank" rel="noreferrer"><i className="fa fa-envelope"></i></a></li>
                                <li><a href="https://www.linkedin.com/in/tulsi-bhimani-b133b5195/" target="_blank" rel="noreferrer"><i className="fa fa-linkedin"></i></a></li>
                            </ul>
                        </div>
                    </div>

                </div>
                <div className="col-lg-3 col-md-6 col-12 " data-aos="zoom-in-up" data-aos-delay="600" >

                    <div className="single-team">
                        <div className="team-image">
                            <img src="/images/team/vedanti.jpg" alt="team" />
                        </div>
                        <div className="content">
                            <h4>Vedanti Bhongade
                                <span>Core Team Head</span>
                            </h4>
                            <ul className="social">
                                <li><a href="https://www.facebook.com/vedanti.bhongade.9" target="_blank" rel="noreferrer"><i className="fa fa-facebook"></i></a></li>
                                <li><a href="vedantibhongade@gmail.com" target="_blank" rel="noreferrer"><i className="fa fa-envelope"></i></a></li>
                                <li><a href="https://www.linkedin.com/in/vedanti-bhongade-44b2491b7/" target="_blank" rel="noreferrer"><i className="fa fa-linkedin"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
     );
}
 
export default Team;