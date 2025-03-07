import React from 'react';
import { useNavigate } from 'react-router-dom';
import './../home/About.css';
import './PartnerEvents.css';
import TitleComponent from '../ui/Title';
import { FaArrowRightLong } from "react-icons/fa6";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';

export default function PartneringEvents() {
    const navigate = useNavigate();

    const handleNavigate = () => {
        window.scrollTo(0, 0);
        navigate('/events');
    };

    return (
        <div className="partnering-events-container w-full max-w-[1920px] mx-auto px-6 sm:px-[5%] py-10">
            <TitleComponent text="Partner Events" />
            {/* <h2 className='explore-events-heading nico-moji text-[1.8rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[4rem] leading-tight mb-1'>
                Ev<span>e</span>nts
            </h2> */}
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                <div className="lg:w-1/2 flex flex-col justify-center gap-4">
                    <p className='text-[14px] sm:text-[16px] md:text-[18px] desc' style={{ color: 'gray', maxWidth: '800px', marginBottom: '0' }}>
                        DISCOVER A WIDE RANGE OF PARTNERING EVENTS AT HACKATHENA'24, FROM TECH TALKS AND WORKSHOPS TO COMPETITIONS. THESE EVENTS ARE DESIGNED TO INSPIRE, EDUCATE, AND CHALLENGE PARTICIPANTS, PROVIDING A PLATFORM FOR INNOVATION AND COLLABORATION. JOIN US TO EXPAND YOUR KNOWLEDGE, NETWORK WITH INDUSTRY LEADERS, AND TAKE YOUR SKILLS TO THE NEXT LEVEL.
                    </p>
                    <div className="text-center lg:text-left">
                        <button
                            className="view-all-events-btn"
                            onClick={handleNavigate}
                        >
                            View All Events <FaArrowRightLong className='text-white' />
                        </button>
                    </div>
                </div>
                <div className="lg:w-1/2 mt-8 lg:mt-0 flex justify-center">
                    <Swiper
                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={'auto'}
                        coverflowEffect={{
                            rotate: 0,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                            slideShadows: true,
                        }}
                        loop={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        modules={[EffectCoverflow, Autoplay]}
                        className="events-swiper"
                    >
                        <SwiperSlide className='event-slide'><img src="/images/posters/HackAMeme.jpg"></img></SwiperSlide>
                        <SwiperSlide className='event-slide'><img src="/images/posters/CSI-CaptureTheFlag.jpg"></img></SwiperSlide>
                        <SwiperSlide className='event-slide'><img src="/images/posters/IEI-PyWars.jpg"></img></SwiperSlide>
                        <SwiperSlide className='event-slide'><img src="/images/posters/TinkerHub-GenAI.jpg"></img></SwiperSlide>
                        <SwiperSlide className='event-slide'><img src="/images/posters/CSI-GenAI.png"></img></SwiperSlide>
                        <SwiperSlide className='event-slide'><img src="/images/posters/FOSS-TreasureHunt.jpg"></img></SwiperSlide>
                        <SwiperSlide className='event-slide'><img src="/images/posters/IEEE-IceBrealingSession.jpg"></img></SwiperSlide>
                        <SwiperSlide className='event-slide'><img src="/images/posters/W3Forge-Expo.png"></img></SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    );
}
