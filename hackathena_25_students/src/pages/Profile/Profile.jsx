import React from 'react'
import './profile.css'
import Header from '../../components/Header/Header'
import Titles from '../../components/Titles/Titles'
import profileicon from '../../assets/profileicon.svg'
import profiledp from '../../assets/profile.png';
import { useUser } from '../../context/UserContext/UserContext';
import supabase from '../../../supabase_config';
import { useState,useRef } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { Button, message } from 'antd';
import axios from 'axios';

const TELEGRAM_BOT_TOKEN =  import.meta.env.VITE_TELE_TOKEN ;

function Profile() {

  const [prof,setProf] = useState([]);
  const [part,setPart] = useState([]);
  const [loading,setLoading] = useState(false);
  const {user,logout} = useUser();
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();
  const fetchingRef = useRef(false);
  const [table,setTable] = useState('');


  useEffect(() => {
    if (!user) {
      navigate('/login');
    } else {
      fetchProf();
    }
    // Removed `prof` from dependencies to prevent infinite re-renders
  }, [user]); 

  function handleMentor(){
    if(!table)
    {
      console.log("Table not foud");

    }
    else
    {
      sendTelegramMessage(table);
    }
  }
  
  const sendTelegramMessage = async(table_no) => {
    const message = `📌 Need a Mentor for table ${table_no}`;
    const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;


    const chatIds = [1521228209,7744476551,1208651303,2016410828,936256636,5032049068, 5093847108,1760842168,6279730905]; // Add your additional chat IDs here
    try {
      for (let chatId of chatIds) {
        await axios.post(url, {
          chat_id: chatId,
          text: message,
          parse_mode: "Markdown",
        });
        console.log(`Notification sent to chat ID: ${chatId}`);
      }
      messageApi.open({
        type: 'success',
        content: 'Called Mentor !',
      });
    }
    catch(error)
    {
      console.error("Failed tele",error);
      messageApi.open({
        type: 'error',
        content: 'Failed Calling mentor !',
      });
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  }

  const fetchProf = async () => {

    if (fetchingRef.current) return; // Prevent multiple calls
  fetchingRef.current = true;

    setLoading(true);

    const loaderOne = messageApi.open({
      type: 'loading',
      content: 'Fetching Profile',
      duration: 0,
    });

    console.log(user?.id)
    const {data : dataT,error : errorT} = await supabase.from('team_details').select('team_name,project_name ,leader_id,table_no,wifi_us,wifi_pass').eq('leader_id', user?.id).single();
    if (errorT){
      console.log("Failed brinigng data !",errorT);
    }
    else
    setProf(dataT);
    setTable(dataT.table_no);

    const {data : dataP,error : errorP} = await supabase.from('participant').select('name,bg_img').eq('leader_id',dataT.leader_id);

    if (errorP)
    {
      console.log("Participants fetching failed");
    }
    else{
      setPart(dataP);
    }
    loaderOne();
    setLoading(false);
    fetchingRef.current = false;
  // console.log(prof);
  }
  // if (loading)
  // {
  //   return(<div className="amme"><Header/>
  //     <Titles title="Profile" sub="It’s all about you !"/><div className="container"><div class="loader"></div></div></div>)
  // }
  return (
    <div>
      {contextHolder}
        <Header/>
        <Titles title="Profile" sub="It’s all about you !"/>
        <div className='profilesection'>
          <img src={profiledp} alt=""  />
          <h1>{prof.team_name}</h1>
          <h2>{prof.project_name}</h2>
          <h2>{prof.table_no}</h2>
          <button className='vannit' onClick={handleMentor} >Call Mentor</button>
          <button className='vannit' onClick={handleLogout} >logout</button>
        </div>
        <h1 className='member'>Members</h1>
        <div className="memberssection">
  
  <div className="sec1">
    {part.slice(0, 2).map((item, index) => (
      <div key={index} className="indmember" onClick={() => navigate("/id", { state: { content1: item.name,content2: prof.team_name,content3:item.bg_img } })}>
        <img src={profileicon} alt="" />
        <p>{item.name}</p>
      </div>
    ))}
  </div>
  {part.length > 2 && (
    <div className="sec2">
      {part.slice(2).map((item, index) => (
        <div key={index} className="indmember" onClick={() => navigate("/id", { state: { content1: item.name,content2: prof.team_name } })}>
          <img src={profileicon} alt="" />
          <p>{item.name}</p>
        </div>
      ))}
    </div>
  )}
</div>
<h1 className='member'>Wifi Credintials</h1>
<div className="creda">
  <p>Wifi SSID : WiFi-JECC</p>
  <p>Wifi Username : {prof.wifi_us}</p>
  <p>Wifi Password : {prof.wifi_pass}</p>
</div>
<h1 className='member'>Contact</h1>
<div className="creda">
  <a href='tel:+919188721804'>Shibin MS : +91 91887 21804</a><br></br>
  <a href='tel:+919495072672'>Josepaul Jenson : +91 94950 72672</a><br></br>
  <a href='tel:+918086350450'>Alan Jose Santo : +91 8086 350450</a>
</div>

    </div>
  )
}

export default Profile
