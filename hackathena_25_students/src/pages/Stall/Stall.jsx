import React from 'react'
import Header from '../../components/Header/Header'
import Titles from '../../components/Titles/Titles';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
import './stall.css';
import Frutty from '../../../public/images/packet-jiuce.png';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from "react";
import { useUser } from '../../context/UserContext/UserContext';
import supabase from '../../../supabase_config';
import { useEffect } from 'react';
import axios from 'axios';
import { Button, message, Space ,Popconfirm } from 'antd';

const TELEGRAM_BOT_TOKEN =  import.meta.env.VITE_TELE_TOKEN ;


// const TELEGRAM_CHAT_ID = import.meta.env.VITE_TELE_IDS;

function Stall() {
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();
  const [sanam,setSanam]  = useState([]);
  const {user} = useUser();
  const [messageApi, contextHolder] = message.useMessage();

  useEffect(()=>
  {
    if (!user)
    {
      navigate('/login');


    }
    fetchSanam();
  });

  const cancel = (e) => {
    console.log(e);
    messageApi.open({
      type: 'error',
      content: 'Ordering Cancelled',
    });
  };

  const orderItem = async () => {
    if(!user)
    {
      navigate('/login');
      return;
    }

    const order = {
      user_id : user?.id,
      item_name : sanam[activeIndex]?.item_name,
      item_price :sanam[activeIndex]?.item_price*quantity,
      quantity:quantity
    }

    const {data,error}  = await supabase.from('orders').insert([order]);
    if (error)
    {
      console.log("Ordering failed !");
    }
    else{
      messageApi.open({
        type: 'success',
        content: 'Order Placed ! We will reach Shortly!',
      });
      sendTelegramMessage(order);
    }
  };

  const sendTelegramMessage = async(order) => {
    const message = `🛒 New Order Received!\n\n📌 Item: ${order.item_name}\n👤💰 Price: Rs.${order.item_price}\n💰 Quantity: ${order.quantity}\n Ordered by: ${user?.email || "Unknown User"}`;
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
    }
    catch(error)
    {
      console.error("Failed tele",error);
    }
  };

  const fetchSanam = async () => {
    const {data,error} = await supabase.from('stall').select('*');

    if (error)
    {
      console.log("Failed loading shop !");
    }
    else{
      setSanam(data);
    }
  }
  const slideData = [
    { name: "Frutty",price:"Rs.52", img: Frutty },
    { name: "Maza",price:"Rs.10", img: Frutty },
    { name: "shake",price:"Rs.80", img: Frutty },
    { name: "boost",price:"Rs.82", img: Frutty },
   
  ];
  
  const [activeIndex, setActiveIndex] = useState(0);

  
  return (
    
   
    <div>
      {contextHolder}
      <Header/>
      <Titles title="The Shop" sub="Need a break ! Call us we will be here !"/>
      <div className='kada'>
        <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
      >
        {sanam.map((slide, index) => (
          <SwiperSlide key={index}>
            {/* <Link to={slide.link}> */}
              <img className='paaadam' src={slide.padam} alt={slide.item_name} />
            {/* </Link> */}
          </SwiperSlide>
        ))}
      </Swiper>
      {sanam.length > 0 && (
  <>
    <p className='stallitemname'>{sanam[activeIndex]?.item_name}</p>
    <p className="stallitemprice">Rs.{sanam[activeIndex]?.item_price*quantity}</p>
    <div className="counter-container">
      <button 
        onClick={() => setQuantity(quantity - 1)} 
        disabled={quantity === 1}
      >
        -
      </button>
      <p>{quantity}</p>
      <button onClick={() => setQuantity(quantity + 1)}>+</button>
    </div>
  </>
)}
      <Popconfirm
    title="Confirm Order"
    description="Are you sure to order this item?"
    onConfirm={orderItem}
    onCancel={cancel}
    okText="Yes"
    cancelText="No"
  >
    <button className='stallbtn'>Order Now</button>
  </Popconfirm>
      
      </div>
      
    </div>
  )
}

export default Stall