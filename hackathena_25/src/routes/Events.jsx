import React from 'react';
import Footer from '../components/home/Footer';

const eventRegister = (registerLink) => {
  const newTab = window.open(registerLink, '_blank');
  if (newTab) {
    newTab.opener = null;
  }
};

const Card = ({ title, description, imageUrl, registerLink }) => (
  <div className="p-4">
    <div className="max-w-sm mx-auto h-[650px] md:h-[680px] relative flex flex-col justify-between border-[2px] border-[#838383] rounded-lg shadow hover:scale-[101%] transition delay-250 ease-in-out">
      <div>
        <a href="#">
          <img className="max-w-full max-h-full rounded-t-lg object-fill" src={imageUrl} alt="poster" />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#fffff]">{title}</h5>
          </a>
          <p className="mb-3 font-normal text-[#fffff] text-justify">{description}</p>
        </div>
      </div>
      <div className='absolute left-1/2 transform -translate-x-1/2 bottom-4 md:bottom-6'>
        {registerLink && (
          <button onClick={() => eventRegister(registerLink)}
            className='h-44px w-[120px] bg-[#ffffff] rounded-md p-2 text-lg text-[#27333f] font-normal transition delay-250 ease-in-out hover:text-[#ffffff] hover:-[#ba0403] hover:bg-[#ba0403]'>
            <div className='font-medium items-center justify-center'>Register</div>
          </button>
        )}
      </div>
    </div>
  </div>
);


export default function Events() {
  const cards = [
    {
      title: "Hack-A-Meme",
      description: "Do you have a knack for humor and an eye for the absurd? Join our Hack-A-Meme competition conducted as a part of HackAthena'24 and let your creativity run wild! Craft your funniest, most shareable memes on the topic Road Safety.",
      imageUrl: "/images/posters/HackAMeme.jpg",
      registerLink: 'https://forms.gle/K6ZWpDWbzrC8td6U9',
    },
    {
      title: "Capture The Flag",
      description: "Join our Capture The Flag competition to capture 15 flags across coding and non-coding challenges. Navigate diverse scenarios for an immersive and educational experience.",
      imageUrl: "/images/posters/CSI-CaptureTheFlag.jpg",
      registerLink: 'https://forms.gle/knpTVKKMYtjUjmgS6',
    },
    {
      title: "PyWars",
      description: "Join PyWars at Jyothi Engineering College on April 7th, hosted by the IEI Club! Code your way to victory in this thrilling Python quiz competition.",
      imageUrl: "/images/posters/IEI-PyWars.jpg",
      registerLink: 'https://forms.gle/73saujDS6oEfSsTSA',
    },
    {
      title: "GEN AI Workshop",
      description: "Join us for an interactive workshop exploring the transformative potential of Generative AI, where creativity meets technology to inspire innovation and problem-solving. Certificates will be provided.",
      imageUrl: "/images/posters/TinkerHub-GenAI.jpg",
      registerLink: 'https://tinyurl.com/bddwm8kn',
    },
    {
      title: "GEN AI by ICT Academy",
      description: "The Gen AI workshop is a free, immersive experience led by ICT Academy experts, exploring cutting-edge generative AI techniques and fostering collaboration in AI-driven creativity.",
      imageUrl: "/images/posters/CSI-GenAI.png",
      registerLink: 'https://forms.gle/AYwBDRtQpL5HLK647',
    },
    {
      title: "Quest for Riches",
      description: "Embark on 'Quest for Riches: Unleash the Explorer in You!' — a digital treasure hunt challenging your wit and skills in a thrilling quest. Decode mysteries, solve puzzles, and discover treasures in this adventure, blending hackathon excitement with the intrigue of exploration. Team up, strategize, and claim your victory!",
      imageUrl: "/images/posters/FOSS-TreasureHunt.jpg",
    },
    {
      title: "TEAM BUILDING - Ice Breaking Session",
      description: "An ice breaking session organised by IEEE SB JECC that aims to build teamwork and collaboration among people. With team building one learns to support and fall  back on one another when needed.",
      imageUrl: "/images/posters/IEEE-IceBrealingSession.jpg",
    },
    {
      title: "Web3 Expo & Lounge",
      description: "W3FORGE brings you a vibrant Expo showcasing modern Web3 Solutions, sessions by industry experts and Competitive Gaming. Cherish & Network with fellow Web3 entusiasts and discover more about Web3 and other related technologies.",
      imageUrl: "/images/posters/W3Forge-Expo.png",
    },
  ];

  return (
    <div>
      <div className="z-5 relative h-[1svh] max-h-[1080px]">
        <div className="absolute w-full flex items-end justify-between px-[8%] top-10 z-10">
          <a href="/"><img src="/images/logos/HackAthena.svg" alt="HackAthena" className="h-12" /></a>
          <img src="/images/logos/CESA.png" alt="CESA" className="h-8" />
        </div>
      </div>
      <div className="text-center mt-8">
        <h1 className="nico-moji text-4xl font-bold mt-24 mb-3">
          EV<span className="text-accent">E</span>NTS
        </h1>
        <div className="flex justify-around mx-auto flex-wrap">
          {cards.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              description={card.description}
              imageUrl={card.imageUrl}
              registerLink={card.registerLink}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>

  );
}
