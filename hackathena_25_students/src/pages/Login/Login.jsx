import React,{useState,useEffect} from 'react'
import logo from '../../assets/logo.svg'
import squid from '../../assets/squidlogo.svg'
import squidgame from '../../assets/squidgame.svg'
import "./Login.css";
import supabase from '../../../supabase_config';
import { useUser } from '../../context/UserContext/UserContext';
import { useNavigate } from 'react-router-dom';
import { Button, message } from 'antd';

function Login() {
  const {user,login} = useUser();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
   const [messageApi, contextHolder] = message.useMessage();

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  useEffect(() => {
    if (user) {
      navigate('/', { replace: true });
    }
  }, [user, navigate]);

  const handleLogin = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      console.error('Login attempt failed!', error);
      messageApi.open({
        type: 'error',
        content: 'Failed Login Attempt !',
      });
      
    }
    else
    {
      console.log(data);
      login(data.user.email,data.user.id);
      navigate('/');
    }
  };

  return (
    
    <div className='loginPage'>
      {contextHolder}
      <div className='logintop'>
        <img src={logo} alt="" className='logo' />
        <img src={squid} alt="" className='squid' />
        <div className='ltitle'>
          <h1 className='loginHead'>HELLO DEV 👋</h1>
          <p className='loginP'>Welcome to the HackAthena official  app</p>
        </div>
       
        <div className='inputSection'>
            <input onChange={handleEmail} type="email" placeholder="Enter Team mail"/>
            <input onChange={handlePassword} type="password" placeholder="Enter Password" ty/>
        </div>
        
        <div className='loginButtons'>
            <button onClick={handleLogin} className='loginButton1'>Login</button>
            <button className='loginButton2'>Contact</button>
        </div>
      </div>
        <img src={squidgame} alt="" className='squidgame' />
    </div>
  )
}

export default Login
