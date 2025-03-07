import React from 'react'
import './Tracks.css'
import TitleComponent from '../ui/Title'


export default function Tracks() {
    return (
        <div className="tracks-container w-full max-w-[1920px] mx-auto px-[7%] py-10">

            <TitleComponent text="Tracks" />

            <div className="track">
                <div className="track-number-container-0">
                    <div className="track-number">01</div>
                </div>
                <div className="track-content">
                    <div className="track-title-container">
                        <h2 className="track-title">open hack</h2>
                        <div className="track-title-decoration">
                            <span className="track-title-decorative-line"></span>
                            <span className="track-title-decorative-poly"></span>
                            <span className="track-title-decorative-poly"></span>
                            <span className="track-title-decorative-poly"></span>
                            <span className="track-title-decorative-poly"></span>
                        </div>
                    </div>
                    <p className="track-description uppercase">
                        Participants have the freedom to choose their own problem statement based on their interests and expertise.
                    </p>
                </div>
            </div>
            <div className="track">
                <div className="track-content">
                    <div className="track-title-container">
                        <h2 className="track-title">ai in health</h2>
                        <div className="track-title-decoration">
                            <span className="track-title-decorative-line"></span>
                            <span className="track-title-decorative-poly"></span>
                            <span className="track-title-decorative-poly"></span>
                            <span className="track-title-decorative-poly"></span>
                            <span className="track-title-decorative-poly"></span>
                        </div>
                    </div>
                    <p className="track-description uppercase">
                        Participants are tasked with identifying AI-driven solutions to tackle the current challenges confronting the medical industry.
                        Their collaboration is essential in crafting innovative products or systems that elevate the healthcare landscape.
                    </p>
                </div>
                <div className="track-number-container">
                    <div className="track-number">02</div>
                </div>
            </div>
            <div className="track">
                <div className="track-number-container">
                    <div className="track-number">03</div>
                </div>
                <div class="track-content">
                    <div className="track-title-container">
                        <h2 className="track-title">BlockChain</h2>
                        <div className="track-title-decoration">
                            <span className="track-title-decorative-line"></span>
                            <span className="track-title-decorative-poly"></span>
                            <span className="track-title-decorative-poly"></span>
                            <span className="track-title-decorative-poly"></span>
                            <span className="track-title-decorative-poly"></span>
                        </div>
                    </div>
                    <p className="track-description uppercase">
                    Participants joining this track must be dedicated to addressing critical challenges using blockchain technology. Projects can focus on enhancing transparency, improving the quality of operations in various sectors, driving secure data management, and fostering decentralized coordination for impactful solutions.
                    </p>
                </div>
            </div>
            <div className="track">
                <div className="track-content">
                    <div className="track-title-container">
                        <h2 className="track-title">Cybersecurity</h2>
                        <div className="track-title-decoration">
                            <span className="track-title-decorative-line"></span>
                            <span className="track-title-decorative-poly"></span>
                            <span className="track-title-decorative-poly"></span>
                            <span className="track-title-decorative-poly"></span>
                            <span className="track-title-decorative-poly"></span>
                        </div>
                    </div>
                    <p className="track-description uppercase">
                    Participants are tasked with identifying solutions to address current challenges in cybersecurity. Their collaboration is essential in developing innovative strategies and systems that enhance security measures and protect digital assets from emerging threats.
                    </p>
                </div>
                <div className="track-number-container">
                    <div className="track-number">04</div>
                </div>
            </div>
        </div>
    )
}
