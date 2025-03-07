import React from 'react';

export const TeamNameCard = ({ shortlistedTeams, className }) => {
    return (
        <div className={className}>
            {shortlistedTeams.map((shortlistedTeam, index) => {
                let cardStyle;
                if (index === 0) {
                    cardStyle = 'tn-card-0';
                } else if (index === shortlistedTeams.length - 1) {
                    cardStyle = 'tn-card-1';
                } else {
                    cardStyle = 'tn-card';
                }

                return (
                    <div
                        key={index}
                        className={`${cardStyle} flex justify-center items-center uppercase break-words text-[14px] sm:text-[16px] md:text-[18px] text-white`}
                    >
                        
                            {shortlistedTeam}
                       
                    </div>
                );
            })}
        </div>
    );
};

export default TeamNameCard;
