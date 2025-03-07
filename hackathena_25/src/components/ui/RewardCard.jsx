import React from 'react'

const RewardCard = ({ imgLink, title, value, skewValue, className }) => {
    const cardStyle =
        "w-full min-w-[240px] min-h-[280px] md:min-w-[200px] lg:min-w-[280px] lg:min-h-[320px] max-w-[397px] max-h-[387px]"
    const cardAfterStyle =
        "after:content-[''] after:absolute after:w-full after:min-w-[240px] after:min-h-[280px] after:md:min-w-[200px] after:lg:min-w-[280px] after:lg:min-h-[320px] after:max-w-[397px] after:max-h-[387px] after:top-8 after:left-1 after:md:top-6 after:md:left-3 after:lg:top-10 after:lg:left-4 after:rounded-sm after:bg-gradient-to-b from-[#BA0403] after:transform after:-translate-z-1"
    const skewClass =
        skewValue === 1
            ? 'lg:skew-x-1 lg:skew-y-1'
            : skewValue === -1
              ? 'lg:-skew-x-1 lg:-skew-y-1'
              : skewValue === 0
              ''

    return (
        <div
            className={
                'relative flex justify-center items-center margin-auto ' +
                className
            }
        >
            <div
                className={`relative z-1 ${cardStyle} bg-[#ffffff] ${skewClass} rounded-md border-2 sm:border-4 border-[#838383] p-3 sm:p-7 lg:p-4 flex flex-col justify-center items-center hover:scale-[102%] transition-all duration-300 ${cardAfterStyle} after:hover:top-0 after:hover:left-0 after:transition-all after:duration-300`}
                style={{ transformStyle: 'preserve-3d' }}
            >
                <div>
                    <img
                        src={imgLink}
                        alt="Platonic Solid"
                        className="w-20 md:w-22 lg:w-24 mb-[22%] md:mb-[15%] lg:mb-[20%]"
                    />
                </div>
                <div className="nico-moji text-[20px] md:text-[18px] lg:text-[28px] text-white">
                    {title}
                </div>
                <div className="nico-moji text-[35px] md:text-[35px] lg:text-[45px] text-[#BA0403]">
                    {value}  
                </div>
            </div>
        </div>
    )
}

export default RewardCard
