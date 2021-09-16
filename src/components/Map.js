import './css/main.css'

const Map = () => {
    return ( <div class="map-section">
    <div className="container">
        <div className="row">
            <div className="col-12">
                <div className="mapouter">
                    <div className="gmap_canvas"><iframe width="100%" height="500" id="gmap_canvas"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14764.12728482044!2d87.30113983655147!3d22.314636265898436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1d44031d91072d%3A0x750e832f90176385!2sIIT%20Kharagpur%2C%20Kharagpur%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1631813726467!5m2!1sen!2sin"
                            frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div> );
}
 
export default Map;