import './css/main.css'
import './js/stickiness'
import { Link } from 'react-router-dom';


const Abouthead = () => {
    return ( 
        <div className="breadcrumbs">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6 offset-lg-3 col-md-12 col-12">
                    <div className="breadcrumbs-content mt-5">
                        <h1 className="page-title">About Us</h1>
                        <ul className="breadcrumb-nav mt-5">
                            <li><Link to="/">Home</Link></li>
                            <li className="fa fa-chevron-right"></li>
                            <li>About Us</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
     );
}
 
export default Abouthead;