import React, {useState, useEffect} from 'react'
import Hero from '../components/home/Hero'
import About from '../components/home/About'
import Tracks from '../components/home/Tracks'
import Timeline from '../components/home/Timeline'
import Prizes from '../components/home/Prizes'
import TrackPrizes from '../components/home/TrackPrizes'
import Sponsors from '../components/home/Sponsors'
import Partners from '../components/home/Partners'
import FAQ from '../components/home/FAQ'
import Footer from '../components/home/Footer'
import PartnerEvents from '../components/home/PartnerEvents'
import Announcement from '../components/home/Announcement'
import './home.css'

export default function Home() {
    const [loading, setLoading] = useState(true);
    
    useEffect( ()=> {
        document.fonts.load("12px 'Nico Moji'").then( () => { setLoading(false) } );
    }, [])

    if(loading) return <div id="my-loader">
        <div className="loader"></div>
    </div>;

    return (
        <div>
            <Hero />
            <About />
            {/* <PartnerEvents /> */}
            <Tracks />
            {/* <Announcement /> */}
            <Timeline />
            <Prizes />
            <TrackPrizes />
            {/* <Sponsors /> */}
            {/* <Partners /> */}
            <FAQ />
            <Footer />
        </div>
    )
}
