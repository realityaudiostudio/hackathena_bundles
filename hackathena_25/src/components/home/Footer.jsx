import { FaInstagram, FaDiscord,} from 'react-icons/fa';

import './Footer.css';


function Footer() {
  return (
    <div className='Footer'>
      <main>
        <div className='contact'>
          <h3>Get in Touch:</h3>
          <ul>
            <li>Email Support: <a href="mailto:helpdesk.hackathena25@gmail.com">helpdesk.hackathena25@gmail.com</a></li>
            {/* <li>Technical Assistance: <a href="mailto:assisstance.hackathena@gmail.com">assisstance.hackathena@gmail.com</a></li> */}
            <li>Phone Support: <a href="tel:9188721804">+91 91887 21804</a></li>
            <li>Phone Support: <a href="tel:9495072672">+91 94950 72672</a></li>
          </ul>
        </div>


        <div className='map'>
          <iframe
            title='map'
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3920.090335508201!2d76.28777251452807!3d10.727515692354697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7dcdc5d78c9a1%3A0x37f9c68d4eb72174!2sJyothi%20Engineering%20College%2C%20Cheruthuruthy%2C%20Thrissur!5e0!3m2!1sen!2sin!4v1676615950134!5m2!1sen!2sin"
            width="100%"
            height="200"
            style={{ border: "0", borderRadius: "10px", boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

      </main>
      <div className='links'>
        <a href='https://www.instagram.com/hackathena/'><FaInstagram /></a>
        <a href="https://discord.gg/AzyZ5F9fPv"><FaDiscord /></a>
        <a href="https://www.jecc.ac.in/"><img src={'/images/logos/JEC.png'} alt="JEC" className="custom-icon" /></a>
      </div>
    </div>
  );
}

export default Footer;
