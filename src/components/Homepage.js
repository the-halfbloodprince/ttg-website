import Events from "./Events"
import Faq from "./Faq"
import Header from "./Header"
import Navbar from "./Navbar"
import Timeline from "./Timeline"
import Testimonals from "./Testimonals"
import Video from "./Video"

const Homepage = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <Events />
            <Video />
            <Timeline />
            <Faq />
        </div>
    );
}

export default Homepage;