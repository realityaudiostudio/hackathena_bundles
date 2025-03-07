import React from 'react'
import TitleComponent from '../ui/Title'
import SponsorCard from '../ui/SponsorCard'

export default function Partners() {
    return <div className='w-full max-w-[1920px] mx-auto px-[5%] py-10'>
        <TitleComponent text="Partners" />
        <SponsorCard title={"Community Partners"}
            logos={[{ imgLink: "/images/logos/TinkerHubJECC.png", alt: "TinkerHub JECC" }, { imgLink: "/images/logos/W3Forge.png", alt: "W3 Forge" }, { imgLink: "/images/logos/CSI.png", alt: "CSI" }, { imgLink: "/images/logos/IEI.png", alt: "IEI" }, { imgLink: "/images/logos/IEDC.png", alt: "IEDC" }, { imgLink: "/images/logos/UnicornDev.png", alt: "UnicornDev" }, { imgLink: "/images/logos/FOSS.png", alt: "FOSS" }, { imgLink: "/images/logos/IEEE.png", alt: "IEEE" }, { imgLink: "/images/logos/GDSC.png", alt: "GDSC" },]}
            className={'pb-6'} />
        <SponsorCard title={"Ecosystem Partners"} logos={[{ imgLink: "/images/logos/EmergeX.png", webLink: "https://www.instagram.com/emergexofficial/", alt: "EmergeX" }, { imgLink: "/images/logos/MULearnJECC.png", webLink: "https://mulearn.org", alt: "MULearn JECC" }, { imgLink: "/images/logos/theDevArmy.png", webLink: "https://www.instagram.com/the.devarmy/", alt: "theDevArmy" }]}
            className={'pb-6'} />
        <SponsorCard title={"Education Partners"} logos={[{ imgLink: "/images/logos/LuminarTechnolab.png", webLink: "https://www.luminartechnolab.com/", alt: "Luminar Technolab" },{ imgLink: "/images/logos/arc.jpg", webLink: "#", alt: "Arc" }]}
            className={'pb-6'} />
    </div>
}
