  import React, { useEffect } from 'react'
  import './Project.css'
  import Header from '../../components/Header/Header'
  import Titles from '../../components/Titles/Titles'
import { useState } from 'react'
import supabase from '../../../supabase_config'
import { useUser } from '../../context/UserContext/UserContext'
import { Button, message,Input,Select } from 'antd';
import { useNavigate } from 'react-router-dom';
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
  // import Section from '../../components/Section/Section'

  const firebaseConfig = {
    apiKey: import.meta.env.VITE_F_API_KEY,
    authDomain: import.meta.env.VITE_F_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_F_PROJECT_ID,
    storageBucket: import.meta.env.VITE_F_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_F_MESSAGE,
    appId: import.meta.env.VITE_F_APP_ID,
    measurementId: import.meta.env.VITE_F_MEASURE
  };

  const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

  function Project() {
    const[workSpace,setWorkSpace] = useState([]);
    const [driveL,setDriveL] = useState("");
    const [partDet,setPartDet] = useState([]);
    const [edit,setEdit] = useState(false);
    const [p_name,setP_name] = useState('');
    const [w_title,setW_title] = useState('');
    const [w_desc,setW_desc] = useState('');
    const [poster,setPoster] = useState(null);
    const [posterURL, setPosterURL] = useState("");
    const [uploading, setUploading] = useState(false);
    const {user} = useUser();
  const [messageApi, contextHolder] = message.useMessage();
  const navigate = useNavigate();
  const handleChange = (value) => {
    console.log(`selected ${value}`);
    setP_name(value)
  };

    useEffect(()=> {
      console.log(user);
      
      if(!user)
      {
        navigate('/login')

      }
      fetchWorkspace();
    },[user])

    const fetchWorkspace = async ()=>{
      if (!user?.id) {
        console.error("User ID is undefined. Cannot fetch workspace.");
        return;
      }
      const{data,error} = await supabase.from('workspace').select('*').eq('leader_id',user?.id)
      if (error)
      {
        console.log(error)
      }
      else
      {
        setWorkSpace(data);
        // console.log('sucess')
      }
    }
    
    // const sectionData = [
    //   {
    //     stage: "01",
    //     text: "Updated the first connection to the database of programs",
    //     time: "08.36 am"
    //   },
    //   {
    //     stage: "02",
    //     text: "Fixed the login issue for users",
    //     time: "09.15 am"
    //   },
    //   {
    //     stage: "03",
    //     text: "Added new feature for data visualization",
    //     time: "10.45 am"
    //   },
    //   {
    //     stage: "04",
    //     text: "Optimized backend services for faster performance",
    //     time: "12.30 pm"
    //   },
    //   {
    //     stage: "05",
    //     text: "Optimized backend services for faster performance",
    //     time: "12.30 pm"
    //   }
    // ];
    // function handlePart(e){
    //   setP_name(e.target.value)
    // }
    function handleWtit(e)
    {
      setW_title(e.target.value)
    }
    function handleWdesc(e){
      setW_desc(e.target.value)
    }

    const handleFileChange = async(e) => {
      const file = e.target.files[0];
      if(!file){
        console.log("Please select a file !");
        return;
      }
      if(file.size>2*1024*1024){
        console.log("File size must be less than 1 MB");
        return;
      }
      const img = new Image();
      img.src=URL.createObjectURL(file);
      img.onload = async() => {
        setPoster(file)
        setUploading(true);
        const storageRef = ref(storage,`utils/${file.name}`);
        try{
          await uploadBytes(storageRef,file);
          const downloadUrl=await getDownloadURL(storageRef);
          setPosterURL(downloadUrl)
          setW_desc(downloadUrl)
          setUploading(false);

        }
        catch(uploadError){
              console.log("upload error");
              setUploading(false);
        }
      };
      img.onerror = () => {
        setError("Invalid image file.");
      };
    }
      const addInfo = () =>
      {
        setEdit(true)
        fetchParticipants()
        console.log(partDet)
        
      }
      const storeData = async () => {
          const {error} = await supabase.from('workspace').insert({
            part_name : p_name,
            w_title : w_title,
            w_desc: w_desc,
            leader_id : user?.id
          })
          if (error)
          {
            console.log("error",error)
          }
          else{
            setP_name('')
            setW_title('')
            setW_desc('')
          }
          fetchWorkspace();
          setEdit(false)
      }
      function editInfoCancel()
      {
        setEdit(false)
      }
      const fetchParticipants = async () => {
        console.log("User ID:", user?.id);
        const{data,error} = await supabase.from('participant').select('name').eq('leader_id',user?.id)
        if (error){
          console.log(error)
        }
        else{
          setPartDet(data);
          console.log(data)
        }
      }
    return (
      <div>
          <Header/>
          <Titles title={"Workspace"} sub={"Where all your ideas begin. Store whatever you want"}></Titles>
          {!edit ? <div className="allwork">
          <div className='buttondiv'>
            <button onClick={addInfo} className='addbtn'>Add Content</button>
          </div>
          <p className='driver'>Get Your Drive Here</p>
          {workSpace.length==0 && <div><p className='nef'>No elements Found!</p></div>}
          {workSpace.map((item,index) =>(<div key={index} className="workable">
            <div  className="wk1">
              <div className="usnb">
              <p className='usp'>{item.part_name}</p></div>
              <h3 className='wkt'>{item.w_title}</h3>
              {(item.w_desc.startsWith("http://") || item.w_desc.startsWith("https://")) ?<a href={item.w_desc}>{item.w_desc}</a> :<p className='muthey'>{item.w_desc}</p>}
              {/*   <a href='https://www.google.com'>https://www.google.com</a> */}
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="78" height="70" viewBox="0 0 78 70" fill="none">
    <path d="M10.3835 8.75H67.9289C69.6946 8.75 71.1259 10.0559 71.1259 11.6667V58.3333C71.1259 59.9442 69.6946 61.25 67.9289 61.25H10.3835C8.61787 61.25 7.18652 59.9442 7.18652 58.3333V11.6667C7.18652 10.0559 8.61787 8.75 10.3835 8.75ZM39.1562 43.75V49.5833H58.338V43.75H39.1562ZM27.6926 35L18.6502 43.2495L23.1714 47.3742L36.7348 35L23.1714 22.6256L18.6502 26.7504L27.6926 35Z" fill="#BA0403" fill-opacity="0.77"/>
  </svg>
          </div>))}
          {/* <div className="workable">
            <div className="wk1">
              <div className="usnb">
              <p className='usp'>Chandran</p></div>
              <h3 className='wkt'>Website API</h3>
              <a href='https://www.google.com'>https://www.google.com</a>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="78" height="70" viewBox="0 0 78 70" fill="none">
    <path d="M10.3835 8.75H67.9289C69.6946 8.75 71.1259 10.0559 71.1259 11.6667V58.3333C71.1259 59.9442 69.6946 61.25 67.9289 61.25H10.3835C8.61787 61.25 7.18652 59.9442 7.18652 58.3333V11.6667C7.18652 10.0559 8.61787 8.75 10.3835 8.75ZM39.1562 43.75V49.5833H58.338V43.75H39.1562ZM27.6926 35L18.6502 43.2495L23.1714 47.3742L36.7348 35L23.1714 22.6256L18.6502 26.7504L27.6926 35Z" fill="#BA0403" fill-opacity="0.77"/>
  </svg>
          </div> */}
        </div>
          :<div className="editable">
            {/* <Input className='ed_in' value={p_name} placeholder="Participant Name" /> */}
            
            <Select
            defaultValue="select"
            style={{ width: 120 }}
            onChange={handleChange}
            options={partDet.map((item) => ({
              value: item.name,
              label: item.name,
            }))}
          />
            
            <Input onChange={handleWtit} className='ed_in' value={w_title} placeholder="Title" />
            <Input onChange={handleWdesc} className='ed_in' value={w_desc} placeholder="Description" />
            {/* <Button onClick={handleFileChange}>Upload File</Button> */}
            <Input type='file' accept='image/*' onChange={handleFileChange}/>
            <Button onClick={editInfoCancel}>Back</Button>
            <Button className='b1' onClick={storeData}>Submit</Button>
        </div>}
          

          
        

          {/*The workspace div*/}
          
          {/* <div className='sections'>
            {sectionData.map((item, index) => (
          <Section key={index} stage={item.stage} text={item.text} time={item.time} />
        ))}
          </div> */}

        
          
      </div>
    )
  }

  export default Project
