import {useEffect} from 'react'
import * as GSAP from "gsap/all"
import Events from "./Events"
import Faq from "./Faq"
import Header from "./Header"
import Navbar from "./Navbar"
import Timeline from "./Timeline"
import Video from "./Video"
import Footer from "./Footer"

const Homepage = () => {

    const openingTimeline = GSAP.gsap.timeline()

    useEffect(() => {
        // GSAP.gsap.fromTo('.main-doc',
        // //duration
        // 2,
        // //from
        // {
        //     y: '100vh',
        //     opacity: 1
        // },
        // //to
        // {
        //     y: 0,
        //     opacity: 1,
        //     ease: GSAP.Power4.easeIn
        // })

        openingTimeline.fromTo(
            '.main-doc',
            //duration
            1.5,
            //from
            {
                y: '100vh',
                opacity: 1
            },
            //to
            {
                y: 0,
                opacity: 1,
                ease: GSAP.Power2.easeInOut
            }
        )

    }, [])

    return (
        <div id="section10">
        
            <div  className="main-doc">
                <Navbar className="main-nav" />
                <Header />
                <Events />
                <Video />
                {/* to be implemented later */}
                {/* <Timeline /> */}    
                <Faq /> 
                <Footer />
            </div>
        </div>
    );
}

export default Homepage;