import React from 'react'
import StarField from '../components/ui/StarField';
import { MdRocketLaunch } from "react-icons/md";

export default function Launch() {

    const launchWebsite = () => {
        const websiteUrl = '/';
        const newTab = window.open(websiteUrl);
        if (newTab) {
            newTab.opener = null;
        }
    };

    return (
        <div>
            <StarField />
            <div className="z-5 hero-page relative h-[100svh] max-h-[1080px]">
                <div className="absolute w-full flex items-end justify-between px-[8%] top-10 z-10">
                    <img src="/images/logos/hack_dark.png" alt="HackAthena" className="h-12" />
                    <img src="/images/logos/CESA.png" alt="CESA" className="h-8" />
                </div>

                <div className="relative w-full h-full items-center justify-center flex">
                    <div className="absolute -z-1 w-[400px] h-[400px] opacity-15 bg-accent rounded-full blur-3xl"></div>
                    <div className="z-20 p-4">
                        <p className="nico-moji text-[2.2rem] sm:text-[3rem] md:text-[4rem] lg:text-[6rem] leading-[100%] text-center">
                            Hack<span className="text-accent">a</span>thena'
                            <span className="text-accent">25</span>
                        </p>
                    </div>
                </div>
                <div className="absolute flex flex-col gap-4 items-center justify-center w-full bottom-[20%] z-10 sm:flex-row sm:gap-3">
                    <button onClick={launchWebsite} className='h-44px w-[200px] border bg-[#ffffff] rounded-md p-2 text-lg text-[#27333f] font-normal transition delay-250 ease-in-out hover:scale-[105%] hover:text-[#ffffff] hover:-[#ba0403]  hover:bg-[#ba0403]'>
                        <div className='flex font-medium items-center justify-center gap-2'><MdRocketLaunch />Get set go!</div>
                    </button>
                </div>
            </div>
        </div>
    )

}