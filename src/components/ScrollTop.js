import './css/main.css'
import './js/scrollToTop'

const ScrollTop = () => {
    return ( 
        <a href="/" className="scroll-top" style={{textDecoration:'none'}} >
        <i className="fa fa-chevron-up"></i>
    </a>
     );
}
 
export default ScrollTop;