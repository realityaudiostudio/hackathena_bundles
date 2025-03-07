import React from 'react';
import TitleComponent from '../ui/Title';
import TeamNameCard from '../ui/TeamNameCard';

export default function Announcement() {
    const shortlistedTeams = [
        "AI ALCHEMISTS",
        "Anweshippin Code-ethum",
        "Asclepius",
        "Blank",
        "Bro Code",
        "Bugs Bounty",
        "CrewZ",
        "Cptc",
        "Dev's Code",
        "HACKX",
        "Helios",
        "Neurogenesis",
        "NEXUS",
        "StudioOne",
        "Techies",
        "The ideapad",
        "Vosnet"
    ];

    return (
        <div className="max-w-[1920px] mx-auto px-[5%] py-10">
            <TitleComponent text="Announcement" />
            <div className="flex justify-center gap-4">
                    <p className='text-[14px] sm:text-[16px] md:text-[18px] uppercase desc mx-4 text-center' style={{ color: 'gray'}}>
                    Shortlisted teams for on-site 48-hour hackathon at the Jyothi Engineering College are as follows
                    </p>
            </div>
            <div>
                <TeamNameCard
                    shortlistedTeams={shortlistedTeams}
                    className={'py-3 gap-4 flex flex-wrap justify-center'}
                />
            </div>
        </div>
    );
}

