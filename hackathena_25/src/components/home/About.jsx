import React from 'react';
import './../home/About.css'
import  TitleComponent from '../ui/Title'
export default function About() {
    return (
        <div>
        <div className="w-full max-w-[1920px] mx-auto px-[5%] py-10">
        <TitleComponent text="About" />
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <h2 className='nico-moji text-[1.8rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[4rem] leading-[100%] text-center mb-2'>
                    Hack<span className="text-accent">a</span>thena
                </h2>
                <div className="flex flex-col md:flex-row items-start">
                <p className='text-[14px] sm:text-[16px] md:text-[18px] desc' style={{ color: 'gray', maxWidth: '800px', marginBottom:'0'}}>
                WELCOME TO HACKATHENA'25, A 3-DAY NATIONAL-LEVEL FLAGSHIP HACKATHON ORGANIZED BY THE COMPUTER SCIENCE AND ENGINEERING DEPARTMENT AND COORDINATED
                 BY THE COMPUTER ENGINEERING STUDENTS ASSOCIATION (CESA) OF JYOTHI ENGINEERING COLLEGE, CHERUTHURUTHY. THIS HACKATHON IS THE IDEAL OPPORTUNITY 
                 TO HONE SKILLS, NETWORK, AND EXPLORE NEW TECHNOLOGIES,
                 WHETHER YOU'RE A SEASONED DEVELOPER OR A BEGINNER. JOIN US FOR AN UNFORGETTABLE JOURNEY TO COLLABORATE, INNOVATE, AND CREATE SOLUTIONS.
                </p>
                <img className="custom-gif" src="images/mahn.png" alt="Animated GIF" />
                </div>
                
                    <div className="flex flex-row w-3/4 box " style={{marginBottom:'20px'}}>
                        <div className="nico-moji w-1/2 bg-gray-400">
                                <div className="flex flex-col w-full padding20">
                                    <div>
                                        <span style={{fontSize: '3rem'}}>1200+</span><br/>
                                        <span className="text-accent">Registrations</span>
                                    </div>
                            </div>
                        </div>
                        <div className="nico-moji w-full bg-gray-400">
                            <div className="flex flex-col w-full padding200">
                                <div className="text-center">
                                    <span style={{fontSize: '3rem'}}>3+</span><br/>
                                    <span className="text-accent" >Partner Events</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col w-full items-center">
                        <div className="nico-moji w-1/2 bg-gray-400 items-center box padding10">
                                <div>
                                        <span style={{fontSize: '3rem'}}>90k+</span><br/>
                                        <span className="text-accent">Prize Pool</span>
                                </div>
                        </div>
                    </div>
            </div>
        </div>
    </div>
    );
}
