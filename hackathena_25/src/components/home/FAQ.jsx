import React from 'react'
import { FAQCard } from '../ui/FAQCard'
import TitleComponent from '../ui/Title'

export default function FAQ() {
    return (
        <div className="w-full max-w-[1920px] mx-auto px-[5%] py-10 bg-white">
            <TitleComponent text="FAQ" />
            <FAQCard
                question={
                    "Who can participate in Hackathena'25?"
                }
                answer={
                    'Participant should be a school or college student and not a working professional.'}
                level={0}
                className={'py-1'}
            />
            <FAQCard
                question={
                    'Is participation exclusive to teams? If so, what is the maximum team size?'
                }
                answer={
                    'Yes, a team can have a maximum of 2 to 4 members.'
                }
                level={2}
                className={'py-1'}
            />
            <FAQCard
                question={'Is there a registration fee?'}
                answer={
                    'No, participation is free.'
                }
                level={2}
                className={'py-2'}
            />
            <FAQCard
                question={
                    'What are the hackathon prizes?'
                }
                answer={
                    'The champions will receive Rs. 30,000, and runners-up will receive Rs. 20,000. An additional prize of Rs. 10,000 each will be awarded for the best project in Ai in health,Blockchain and Cyber Security. Track prizes will be announced soon.'
                }
                level={2}
                className={'py-2'} />
            <FAQCard
                question={
                    'What happens in Phase One of Hackathena\'25?'
                }
                answer={
                    'In Phase One, teams have to submit a pitch deck PPT via Unstop to provide an overview of their ideas; it\'s the criteria for selection to Phase Two.'
                }
                level={2}
                className={'py-2'} />
            <FAQCard
                question={
                    'How are ideas evaluated in Phase One of Hackathena?'
                }
                answer={
                    'Ideas in Phase One undergo evaluation based on several criteria including impact, practicality, scalability, future potential, innovation, creativity and usability.'
                }
                level={2}
                className={'py-2'}
            />
            <FAQCard
                question={
                    'What happens after being shortlisted?'
                }
                answer={
                    'Shortlisted teams should RSVP through Unstop within 2 days to confirm, upon failure waitlisted teams will be selected.'
                }
                level={2}
                className={'py-2'}
            />
            <FAQCard
                question={
                    "What happens in Phase Two of Hackathena'25?"
                }
                answer={
                    'In Phase Two, selected participants have to develop solutions offline at the college within 48 hours. There will be mentor checkpoints during the hackathon which will be evaluated.'
                }
                level={2}
                className={'py-2'}
            />
            <FAQCard
                question={
                    'Where will the offline phase be hosted, and how can I reach the venue?'
                }
                answer={
                    'It will be hosted at Jyothi Engineering College, Cheruthuruthy. The nearest railway station and private bus stand is at Shornur.'
                }
                level={2}
                className={'py-2'}
            />
            <FAQCard
                question={
                    'Is building on old project or submitting past projects allowed?'
                }
                answer={
                    'We encourage you to submit projects only prepared in the duration of the hackathon.'
                }
                level={2}
                className={'py-2'}
            />
            <FAQCard
                question={
                    'Are both software and hardware projects allowed?'
                }
                answer={
                    'Only software projects are allowed.'
                }
                level={2}
                className={'py-2'}
            />
            <FAQCard
                question={
                    'Will there be participation certificates/swags?'
                }
                answer={
                    'Yes, the participants will be awarded with certificates. T-shirts and other swags are awaiting all the participants who check in to the event.'
                }
                level={2}
                className={'py-2'}
            />
            <FAQCard
                question={
                    'When will the winners be announced?'
                }
                answer={
                    'Prize distribution will take place during the closing ceremony in the evening of the final day. Participants are advised to make travel arrangements accordingly.'
                }
                level={2}
                className={'py-2'}
            />
            <FAQCard
                question={
                    'As a newbie, is there any point in registering?'
                }
                answer={
                    "Hackathons are a great way to learn new technologies and network. Everyone is welcome to learn and collaborate on projects of their choice. We believe there's something here for everyone."
                }
                level={1}
                className={'py-2'}
            />
        </div>
    )
}