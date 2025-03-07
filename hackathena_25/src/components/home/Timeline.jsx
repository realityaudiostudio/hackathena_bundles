import React, {useRef} from 'react';
import TitleComponent from '../ui/Title';
import './Timeline.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Timeline() {

  const main = useRef();

  useGSAP(
    () => {
      const odds = gsap.utils.toArray('.timeline-item:nth-child(odd) .timeline-main-block');
      const evens = gsap.utils.toArray('.timeline-item:nth-child(even) .timeline-main-block');
      odds.forEach((box) => {
        gsap.from(box, {
          x: "-150%",
          scrollTrigger: {
            trigger: box,
            start: 'bottom bottom',
            end: 'top 50%',
          },
        });
      });
      evens.forEach((box) => {
        gsap.from(box, {
          x: "150%",
          scrollTrigger: {
            trigger: box,
            start: 'bottom bottom',
            end: 'top 50%',
          },
        });
      });
    },
    { scope: main }
  );

  const timelineEvents = [
    {
      id: 1,
      date: '16-02-2024',
      title: 'Registration begins',
      heading: 'Phase 1',
      description: 'Teams eager to participate can register via Devfolio by submitting a pitch deck (PPT converted to PDF) to provide an overview of their ideas; it is the criteria for selection to Phase 2.',
      style: 'style1'
    },
    {
      id: 2,
      date: '24-03-2024',
      title: 'Registration closes',
      heading: 'Deadline for registration',
      description: 'All teams intending to participate must complete their registration by March 16th',
      style: 'style2'
    },
    {
      id: 3,
      date: '25-03-2024',
      title: 'Announce shortlisted teams',
      heading: 'Team selection',
      description: 'The shortlisted teams may be called for an online meeting for further evaluation.',
      style: 'style1'
    },
    {
      id: 4,
      date: '30-03-2024',
      title: 'RSVP and waitlist integration',
      heading: 'Team confirmation',
      description: 'Selected teams have two days to RSVP; upon failure waitlisted teams will be selected',
      style: 'style2'
    },
    {
        id: 5,
        date: '06-04-2024',
        title: 'Hackathena’24 begins',
        heading: 'Phase 2',
        description: 'On-site 48-hour hackathon at the Jyothi Engineering College auditorium.',
        style: 'style1'
        
    },
    {
        id: 5,
        date: '08-04-2024',
        title: 'Hackathena’24 ends',
        heading: 'Closing Ceremony',
        description: 'The winners will be announced, and prizes will be distributed in the evening. Participants are advised to make travel arrangements accordingly.',
        style: 'style2'
        
    },

  ];

  return (
    <div className='timeline-container'>
      <TitleComponent text="Timeline" />
      <div className='timeline' ref={main}>
        <img src='images/timelines.png'></img>
        {/* {timelineEvents.map(event => (
          <div className={`timeline-item ${event.style}`} key={event.id}>
            <div className='item-content gap-[100px]'>
              <div className='content-block timeline-main-block'>
                <div className='event-date'>
                    <h2>{event.date}</h2>
                    <div className="heading-decorative-poly-container">
                    <span className="heading-decorative-poly"></span>
                    <span className="heading-decorative-poly"></span>
                    <span className="heading-decorative-poly"></span>
                    <span className="heading-decorative-poly"></span>
                    </div>
                </div>
                <div className='event-title'>
                <h3>{event.title}</h3>
                </div>
                
              </div>
              <div className='item-indicator'></div>
              <div className='item-indicator-g'></div>
              <div className='content-block detail-box'>
                <div className='event-heading'>
                <h2 >{event.heading}</h2>
                </div>
                <div className='event-description'>
                <p >{event.description}</p>
                </div>
                
                
              </div>
            </div>
          </div>
        ))} */}
      </div>
    </div>
  );
}
