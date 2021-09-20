import './css/main.css';
import heroshape from './images/hero/hero-shape.svg';
import textshape from './images/hero/text-shape.svg';
import home2_bg from './images/hero/home2-bg.png';
import h2_bit1 from './images/hero/h2-bit-l.png';
import h2_bitm from './images/hero/h2-bit-m.png';
import h2_bit_s from './images/hero/h2-bit-s.png';
import { Link } from 'react-router-dom';
import Aos from "aos"
import { useEffect } from "react";
import "aos/dist/aos.css";


const Header = () => {

    useEffect(()=>{
        Aos.init({duration:1500 });
        },[]);
    
    return ( 
        <section className="hero-area">
        <img className="hero-shape" src={heroshape} alt="#" />
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-5 col-md-12 col-12">
                    <div className="hero-content">
                        <h4 data-aos="zoom-in-up" data-aos-delay="100">SRIC IIT Kharagpur</h4>
                        <h1  style={{fontFamily:'Raleway'}} data-aos="zoom-in-up" data-aos-delay="200">Technology
                            Transfer <br />Group 
                            <span>
                                <img className="text-shape" src={textshape} alt="#" />

                            </span>
                        </h1>
                        <p data-aos="zoom-in-up" data-aos-delay="300">A Patent a day keep the infringer away
                        </p>
                        <div className="button " data-aos="zoom-in-up" data-aos-delay="200">
                            <Link to="/about" className="btn " style={ {textDecoration:'none'} }>Know More</Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-7 col-12">
                    <div className="hero-image">
                        <img className="main-image" src={home2_bg} alt="#" />
                        <img className="h2-move-1" src={h2_bit1} alt="#" />
                        <img className="h2-move-2" src={h2_bitm} alt="#" />
                        <img className="h2-move-3" src={h2_bit_s} alt="#" />
                    </div>
                </div>
            </div>
        </div>
    </section>
     );
}
 
export default Header;