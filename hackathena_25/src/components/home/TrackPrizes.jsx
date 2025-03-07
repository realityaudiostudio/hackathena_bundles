import React from 'react'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick";
import TrackPrizeCard from '../ui/TrackPrizeCard';

function TrackPrizes() {
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className='w-full max-w-[1920px] mx-auto px-[9%] py-[3%]'>
        <div className="slider-container">
            <Slider {...settings}>
            <TrackPrizeCard
                    className="grow flex-1"
                    imgLink={'/images/logos/ETHIndia.png'}
                    imgAlt={'ETHIndia'}
                    description={'For best project in each Track'}
                    value={'Rs.10k'}
                />
                <TrackPrizeCard
                    className="grow flex-1"
                    imgLink={'/images/logos/ETHIndia.png'}
                    imgAlt={'ETHIndia'}
                    description={'For best project in each Track'}
                    value={'Rs.10k'}
                />
            </Slider>
        </div>
        </div>
    );
}

export default TrackPrizes