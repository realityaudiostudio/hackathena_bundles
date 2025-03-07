import React from 'react'
import TitleComponent from '../ui/Title'
import SponsorCard from '../ui/SponsorCard'

export default function Sponsors() {
    return <div className='w-full max-w-[1920px] mx-auto px-[5%] py-10'>
        <div className="flex justify-center w-full h-[2px]" style={{
            background: 'linear-gradient(to right, rgba(255,255,255,0), rgba(255,255,255,1), rgba(255,255,255,1), rgba(255,255,255,0))'
        }}></div>
            {/* <div className='nico-moji w-full flex mt-6 md:mt-10 mb-3 text-xl md:text-2xl justify-center text-center'>Officially Recognised By</div>
            <SponsorCard logos={[{ imgLink: "/images/logos/MVD.png", webLink: "https://mvd.kerala.gov.in/", alt: "MVD" },]} className={'pb-6'} logoClass={'h-[75px] sm:h-[85px] md:h-[100px]'} /> */}
        <TitleComponent text="Sponsors" />
        {/* <SponsorCard title={"Platinum Tier"} logos={[]} className={'pb-6'} /> */}
        <SponsorCard title={"Gold Tier"} logos={[{ imgLink: "/images/logos/Devfolio.png", webLink: "https://devfolio.co/", alt: "Devfolio" }, { imgLink: "/images/logos/TheXtruder.png", webLink: "https://www.thextruder.com/", alt: "The Xtruder" },  {imgLink: "/images/logos/UIIC.png", webLink:"https://uiic.co.in/", alt: "UIIC" }]} className={'pb-6'} />
        <SponsorCard title={"Silver Tier"} logos={[{ imgLink: "/images/logos/Polygon.png", webLink: "https://polygon.technology/", alt: "Polygon" }, { imgLink: "/images/logos/ETHIndia.png", webLink: "https://ethindia.co/", alt: "ETHIndia" },
        { imgLink: "/images/logos/ESAF.png", webLink: "https://www.esafbank.com/", alt: "ESAF" }, { imgLink: "/images/logos/0x.Day.png", webLink: "https://0x.day/", alt: "0x.Day" }]} className={'pb-6'} />
    </div>
}
