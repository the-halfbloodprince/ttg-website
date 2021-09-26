import './style/main.css'
import './utilitiesJS/stickiness'
import { Link } from 'react-router-dom';
import Aos from 'aos'
import { useEffect } from 'react'


const Galleryhead = () => {

    useEffect(()=>{
        Aos.init({duration:1500 });
        },[]);
    
    return ( 
        <div className="breadcrumbs" style={{backgroundImage:"url(" + "/images/bread-bg/banner-bg.svg" + ")"}}>
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6 offset-lg-3 col-md-12 col-12">
                    <div className="breadcrumbs-content mt-5" data-aos="fade-up" data-aos-delay="100">
                        <h1 className="page-title">Gallery</h1>
                        <ul className="breadcrumb-nav mt-5">
                            <li><Link to="/">HOME</Link></li>
                            <li className="fa fa-chevron-right"></li>
                            <li>GALLERY</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
     );
}
 
export default Galleryhead;