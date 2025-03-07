import React from 'react'

function SponsorCard({ title, logos, className, logoClass }) {
  return (
    <div className={'' + className}>
      <div className='nico-moji w-full flex text-xl md:text-2xl text-center justify-center'>{title}</div>
      <div className='w-full mt-6 flex flex-wrap items-center justify-center gap-10'>
        {
          logos && logos.map((logo, index) => {
            return <a key={index} href={logo.webLink} target='_blank' rel='noopener noreferrer'> <img key={index} src={logo.imgLink} alt={logo.alt} className={'h-8 sm:h-10 md:h-14 ' + logoClass} /></a>
          })
        }
      </div>
    </div>
  )
}

export default SponsorCard