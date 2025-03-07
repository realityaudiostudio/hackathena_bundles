import React from 'react'
import RewardCard from '../ui/RewardCard'
import TitleComponent from '../ui/Title'

export default function Prizes() {
    return (
        <div className='w-full max-w-[1920px] mx-auto py-10 px-[5%]'>
            <TitleComponent text="Prizes" />
            <div className="flex flex-col md:flex-row gap-10 md:gap-6 lg:gap-8 items-center">
                <RewardCard
                    className="grow flex-1 max-md:order-2"
                    imgLink={'/images/icosahedron.svg'}
                    title={'Second Prize'}
                    value={'20,000'}
                    skewValue={1}
                /> 
                <RewardCard
                    className="grow flex-1 max-md:order-1"
                    imgLink={'/images/dodecahedron.svg'}
                    title={'First Prize'}
                    value={'30,000'}
                    skewValue={0}
                />
                <RewardCard
                    className="grow flex-1 max-md:order-3"
                    imgLink={'/images/cone.svg'}
                    title={'Track Prize*'}
                    value={'10,000'}
                    skewValue={-1}
                />
            </div>
            <p className='w-full flex justify-center items-center break-words sm:text-base md:text-lg text-justify pt-14'>*Each for best project in Ai in Health Tech , Blockchain & Cybersecurity.</p>
        </div>
    )
}
