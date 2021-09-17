import './css/main.css'
import WOW from 'wowjs'
import team1 from './images/team/team1.jpg'
import team2 from './images/team/team2.jpg'
import team3 from './images/team/team3.jpg'
import team4 from './images/team/team4.jpg'

const Team = () => {

    const wow = new WOW.WOW();
    wow.init();

    return ( 
        <section className="team section">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="section-title">
                        <h3 className="wow zoomIn" data-wow-delay=".2s">Heads</h3>
                        <h2 className="wow fadeInUp" data-wow-delay=".4s">Meet Our Team</h2>
                        <p className="wow fadeInUp" data-wow-delay=".6s">Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Amet quae exercitationem in doloribus repellendus eius odio maxime quis totam magni
                            debitis pariatur quod, expedita illo voluptas et enim qui officiis.</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-3 col-md-6 col-12 wow fadeInUp" data-wow-delay=".3s">

                    <div className="single-team">
                        <div className="team-image">
                            <img src={team4} alt="team" />
                        </div>
                        <div className="content">
                            <h4>Manish Kumar Das
                                <span>Web</span>
                            </h4>
                            <ul className="social" style={{textAlign:"center"}}>
                                <li><a href="javascript:void(0)"><i className="fa fa-facebook"></i></a></li>
                                <li><a href="javascript:void(0)"><i className="fa fa-instagram"></i></a></li>
                                <li><a href="javascript:void(0)"><i className="fa fa-twitter"></i></a></li>
                                <li><a href="javascript:void(0)"><i className="fa fa-linkedin"></i></a></li>
                            </ul>
                        </div>
                    </div>

                </div>
                <div className="col-lg-3 col-md-6 col-12 wow fadeInUp" data-wow-delay=".5s">

                    <div className="single-team">
                        <div className="team-image">
                            <img src={team1} alt="team" />
                        </div>
                        <div className="content">
                            <h4>Aditi Mourya
                                <span>Core</span>
                            </h4>
                            <ul className="social">
                                <li><a href="javascript:void(0)"><i className="fa fa-facebook"></i></a></li>
                                <li><a href="javascript:void(0)"><i className="fa fa-instagram"></i></a></li>
                                <li><a href="javascript:void(0)"><i className="fa fa-twitter"></i></a></li>
                                <li><a href="javascript:void(0)"><i className="fa fa-linkedin"></i></a></li>
                            </ul>
                        </div>
                    </div>

                </div>
                <div className="col-lg-3 col-md-6 col-12 wow fadeInUp" data-wow-delay=".7s">

                    <div className="single-team">
                        <div className="team-image">
                            <img src={team2} alt="team" />
                        </div>
                        <div className="content">
                            <h4>Krishnakant Rawat
                                <span>Design</span>
                            </h4>
                            <ul className="social">
                                <li><a href="javascript:void(0)"><i className="fa fa-facebook"></i></a></li>
                                <li><a href="javascript:void(0)"><i className="fa fa-instagram"></i></a></li>
                                <li><a href="javascript:void(0)"><i className="fa fa-twitter"></i></a></li>
                                <li><a href="javascript:void(0)"><i className="fa fa-linkedin"></i></a></li>
                            </ul>
                        </div>
                    </div>

                </div>
                <div className="col-lg-3 col-md-6 col-12 wow fadeInUp" data-wow-delay=".9s">

                    <div className="single-team">
                        <div className="team-image">
                            <img src={team3} alt="team" />
                        </div>
                        <div className="content">
                            <h4>Sagar Varade
                                <span>Core</span>
                            </h4>
                            <ul className="social">
                                <li><a href="javascript:void(0)"><i className="fa fa-facebook"></i></a></li>
                                <li><a href="javascript:void(0)"><i className="fa fa-instagram"></i></a></li>
                                <li><a href="javascript:void(0)"><i className="fa fa-twitter"></i></a></li>
                                <li><a href="javascript:void(0)"><i className="fa fa-linkedin"></i></a></li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>

            <div className="row">
                <div className="col-lg-3 col-md-6 col-12 wow fadeInUp" data-wow-delay=".3s">

                    <div className="single-team">
                        <div className="team-image">
                            <img src={team4} alt="team" />
                        </div>
                        <div className="content">
                            <h4>Aman Mishra
                                <span>Core</span>
                            </h4>
                            <ul className="social">
                                <li><a href="javascript:void(0)"><i className="fa fa-facebook"></i></a></li>
                                <li><a href="javascript:void(0)"><i className="fa fa-instagram"></i></a></li>
                                <li><a href="javascript:void(0)"><i className="fa fa-twitter"></i></a></li>
                                <li><a href="javascript:void(0)"><i className="fa fa-linkedin"></i></a></li>
                            </ul>
                        </div>
                    </div>

                </div>
                <div className="col-lg-3 col-md-6 col-12 wow fadeInUp" data-wow-delay=".5s">

                    <div className="single-team">
                        <div className="team-image">
                            <img src={team1} alt="team" />
                        </div>
                        <div className="content">
                            <h4>Shivani Vasam
                                <span>Core</span>
                            </h4>
                            <ul className="social">
                                <li><a href="javascript:void(0)"><i className="fa fa-facebook"></i></a></li>
                                <li><a href="javascript:void(0)"><i className="fa fa-instagram"></i></a></li>
                                <li><a href="javascript:void(0)"><i className="fa fa-twitter"></i></a></li>
                                <li><a href="javascript:void(0)"><i className="fa fa-linkedin"></i></a></li>
                            </ul>
                        </div>
                    </div>

                </div>
                <div className="col-lg-3 col-md-6 col-12 wow fadeInUp" data-wow-delay=".7s">

                    <div className="single-team">
                        <div className="team-image">
                            <img src={team1} alt="team" />
                        </div>
                        <div className="content">
                            <h4>Tulsi Bhimani
                                <span>Core</span>
                            </h4>
                            <ul className="social">
                                <li><a href="javascript:void(0)"><i className="fa fa-facebook"></i></a></li>
                                <li><a href="javascript:void(0)"><i className="fa fa-instagram"></i></a></li>
                                <li><a href="javascript:void(0)"><i className="fa fa-twitter"></i></a></li>
                                <li><a href="javascript:void(0)"><i className="fa fa-linkedin"></i></a></li>
                            </ul>
                        </div>
                    </div>

                </div>
                <div className="col-lg-3 col-md-6 col-12 wow fadeInUp" data-wow-delay=".9s">

                    <div className="single-team">
                        <div className="team-image">
                            <img src={team1} alt="team" />
                        </div>
                        <div className="content">
                            <h4>Vedanti Bhongade
                                <span>Core</span>
                            </h4>
                            <ul className="social">
                                <li><a href="javascript:void(0)"><i className="fa fa-facebook"></i></a></li>
                                <li><a href="javascript:void(0)"><i className="fa fa-instagram"></i></a></li>
                                <li><a href="javascript:void(0)"><i className="fa fa-twitter"></i></a></li>
                                <li><a href="javascript:void(0)"><i className="fa fa-linkedin"></i></a></li>
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