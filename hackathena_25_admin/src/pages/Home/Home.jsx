import React from 'react';
import { useState } from "react";
import "./Home.css"
import Header from '../../components/Header/Header'
import Titles from '../../components/Titles/Titles'
import Panel from '../../components/Panel/Panel';
import Navbar from '../../components/Navbar/Navbar';
import supabase from '../../../supabase_config';
import { useEffect } from 'react';

function Home() {
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [panels, setPanels] = useState([]);

  useEffect(()=>
  {
    bringDb();
    // console.log(panels);
    
  },)
  const handleAddPanel = () => {
    if (!title || !description) return; // Ensure all fields are filled
    // const currentDate = new Date();
    // const formattedDate = currentDate.toLocaleDateString(); // Formats the date
    // const formattedTime = currentDate.toLocaleTimeString(); // Formats the time
    // const dateTime = `${formattedDate} ${formattedTime}`;
    // const newPanel = { head: title, para: description, time: dateTime};
    // setPanels([...panels, newPanel]); // Add new panel to the list
    handleDb();
    // Reset form
    setTitle("");
    setDescription("");
    setShowForm(false); // Hide form after adding
  };

  const handleDb = async()=>
  {
    const {data,error} = await supabase.from("announcment").insert({
      title : title,
      desc : description,
    })
    if (error)
    {
      console.log("eror");
      
    }
     
  }

  const bringDb = async ()=> {
    const {data,error} = await supabase.from('announcment').select('*');
    if (error)
    {
      console.log("Data fetching failed !");
    }
    else{
      setPanels(data);
      
    }
  }

  const handleCancel = () => {
    setShowForm(false); // Collapse form
    setTitle(""); // Reset inputs
    setDescription("");
  };
  return (
    <div >
      <Header/>
      <Titles title={'Announcements'} sub={'Add Announcements'} />
      <div className='adddiv'>
        <button onClick={() => setShowForm(!showForm)} className='Addbtn'>Add Announcements</button>
        {showForm && (
<div className={`form ${showForm ? "show" : ""}`}>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <div className='btngrp'>
             <button onClick={handleAddPanel}>Add</button>
              <button onClick={handleCancel}>Cancel</button>
          </div>
         
        </div>
      )}
      </div>
      
      <div className="panels">
        {panels.map((panel, index) => (
          <Panel key={index} head={panel.title} para={panel.desc} time={panel.times} />
        ))}        
      </div>
      <Navbar/>
    </div>
  )
}

export default Home
