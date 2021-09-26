import '../style/main.css'
import '../utilitiesJS/stickiness'
import { Link } from 'react-router-dom'
import Aos from 'aos'
import { useEffect } from "react";


const Eventhead = () => {
    
    useEffect(()=>{
        Aos.init({duration:1500 });
        },[]);
    
    return (
        <div className="breadcrumbs" style={{backgroundImage:"url(" + "/images/bread-bg/banner-bg.svg" + ")"}}>
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6 offset-lg-3 col-md-12 col-12">
                    <div className="breadcrumbs-content mt-5" data-aos="fade-up">
                        <h1 className="page-title">Events</h1>
                        <ul className="breadcrumb-nav mt-5">
                            <li><Link to="/">HOME</Link></li>
                            <li className="fa fa-chevron-right"></li>
                            <li>EVENTS</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
     );
}
 
export default Eventhead;