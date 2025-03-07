import { color } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { FaDiscord } from "react-icons/fa"
import register from '../../../src/images/register.svg'

export default function Hero() {
    let [mask, setMask] = useState({ x: 50, y: 50 })

    useEffect(() => {
        let handleMouseMove = (e) => {
            setMask({
                x: (e.clientX / window.innerWidth) * 100,
                y: (e.clientY / window.innerHeight) * 100,
            })
        }
        document.getElementsByClassName('hero-page')[0].addEventListener('mousemove', handleMouseMove)
        // return () => document.getElementsByClassName('hero-page')[0].removeEventListener('mousemove', handleMouseMove)
    }, [])

    

    const joinDiscord = () => {
        const discordUrl = 'https://unstop.com/p/hackathena25-jyothi-engineering-college-1360979?utm_campaign=site-emails&utm_medium=d2c-automated&utm_source=oh-registration-deleted-for-hackathena25';
        const newTab = window.open(discordUrl, '_blank');
        if (newTab) {
            newTab.opener = null;
        }
    };


    return (
        <div className="z-5 hero-page relative h-[100svh] max-h-[1080px] bg-hero-pattern bg-repeat">
            <div className="absolute w-full flex items-end justify-between px-[8%] top-10 z-10">
                <img src="/images/logos/hack_dark.png" alt="HackAthena" className="h-12" />
                <img src="/images/logos/cesaa.png" alt="CESA" className="h-8" />
            </div>
            <div
                style={{
                    maskImage: `radial-gradient(circle at ${mask.x}% ${mask.y}%, transparent 0%, #000000 35%)`,
                }}
                className="-z-1 absolute w-full h-full top-0 left-0 bg-background hover:bg-transparent"
            ></div>
            <div className="relative w-full h-full items-center justify-center flex">
                <div className="absolute -z-1 w-[400px] h-[400px] opacity-15 bg-accent rounded-full blur-3xl"></div>
                <div className="absolute p-4 w-[60vw] max-w-[250px]">
                    {/* <img
                        src="/images/logos/HackAthena.svg"
                        alt="HackAthena"
                        className="z-20 brightness-[0.3]"
                    /> */}
                </div>
                <div className="z-20 p-4">
                    <p className="nico-moji text-[2.2rem] sm:text-[3rem] md:text-[4rem] lg:text-[6rem] leading-[100%] text-center">
                        Hack<span className="text-accent">a</span>thena'
                        <span className="text-accent">25</span>
                    </p>
                    <p className="max-w-[80%] mx-auto mt-2 text-[14px] sm:text-[16px] md:text-[18px] lg:text-base uppercase text-center">
                    Hack the Difference!
                    </p>
                </div>
            </div>
            <div className="absolute flex flex-col gap-4 items-center justify-center w-full bottom-[20%] z-10 sm:flex-row sm:gap-3">
                {/* <div
                    className="apply-button"
                    class="apply-button"
                    data-hackathon-slug="hackathena-2"
                    data-button-theme="dark-inverted"
                    style={{ height: '44px', width: '312px' }}
                ></div> */}
                
                <button onClick={joinDiscord} className='rounded-md px-3 text-lg text-[#27333f] font-normal transition delay-150 ease-in-out hover:text-[#101010]' style={{ height: '44px', width: 'auto', backgroundColor: '#FFFFFF' }}>
                    <div className='flex items-center justify-center gap-2'><img src={register} alt="" /></div>
                </button>
            </div>
        </div>
    )
}
