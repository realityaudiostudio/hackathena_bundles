import React from 'react'

const TrackPrizeCard = ({ imgLink, imgAlt, description, value, className }) => {
    const cardStyle =
        'w-full min-w-[220px] min-h-[280px] md:min-w-[200px] lg:min-w-[280px] lg:min-h-[320px] max-w-[397px] max-h-[387px]'

    return (
        <div
            className={
                'relative flex justify-center items-center margin-auto mx-4 ' +
                className
            }
        >
            <div
                className={`bg-[#101010] relative z-1 ${cardStyle} border-2 rounded-[8px] border-[#838383] p-3 sm:p-7 lg:p-4 flex flex-col justify-center items-center gap-3 hover:scale-[99%] hover:border-[#ba0403] transition transition-all duration-500`}
                style={{ transformStyle: 'preserve-3d' }}
            >
                {/* <div>
                    <img
                        src={imgLink}
                        alt={imgAlt}
                        className="w-20 md:w-22 lg:w-24 mb-[22%] md:mb-[15%] lg:mb-[20%] place-items-start"
                    />
                </div> */}
                <div className="nico-moji text-[25px] md:text-[25px] lg:text-[35px] text-[#BA0403]">
                    {value}
                </div>
                <div className="text-[12px] sm:text-[16px] text-justify text-[#ffffff]">
                    {description}
                </div>
            </div>
        </div>
    )
}

export default TrackPrizeCard