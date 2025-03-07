import React ,{ useRef } from 'react'
import "./Idcard.css"
import Header from '../../components/Header/Header'
import tag from "../../assets/idtag.svg"
import idh from "../../assets/idheader.svg"
import sqimg from "../../assets/idsqui.png"
import alan from "../../assets/aluuu.png"
import { useLocation, useNavigate } from "react-router-dom";
import back from "../../assets/backbtn.svg"
import html2canvas from "html2canvas";
import  ShareIcon from "../../assets/share-fill.svg";

function Idcard() {
  const location = useLocation();
  const navigate = useNavigate();
  const { content1, content2,content3 } = location.state || {};
  const captureRef = useRef(null);

  const captureAndShare = async () => {
    if (!captureRef.current) return;

    try {
      // Capture the entire fullidcard div
      const canvas = await html2canvas(captureRef.current, {
        useCORS: true,  // Ensures external images are loaded
        scale: 2,       // Increases resolution for better quality
        backgroundColor: null, // Transparent background if needed
      });

      const image = canvas.toDataURL("image/png");

      // Convert to a Blob
      const blob = await (await fetch(image)).blob();
      const file = new File([blob], "screenshot.png", { type: "image/png" });

      // Check if Web Share API is supported
      if (navigator.canShare && navigator.canShare({ files: [file] })) {
        await navigator.share({
          files: [file],
          title: "ID Card",
          text: "Check this out!",
        });
      } else {
        // If sharing is not supported, download the image
        const link = document.createElement("a");
        link.href = image;
        link.download = "idcard.png";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    } catch (error) {
      console.error("Error capturing and sharing:", error);
    }
  };


  return (
    <div className='id'>
     <div className='fullidcard' >
      <div className='icard' ref={captureRef}>
        <div className='maincard' >
              
            <img src={idh} alt="" className='idh' />
            <div className='ota'></div>
            <h1 className='idname'>{content1}</h1>
            <img src={sqimg} alt="" />
            <img src={content3} alt="" className='profilephoto'/>
            <h2 className='teamname'>{content2}</h2>
        </div>
        <div  className='idtag' >
            <img src={tag} alt="" />
        </div>
      </div>
    </div>
      <div onClick={() => navigate(-1)} style={{ cursor: "pointer" }}>
  <img src={back} alt="Go Back" className="backbtn" />
</div>
<button onClick={captureAndShare} className="sharebtn"  >
        Share Screenshot <img src={ShareIcon} alt="" className='shareicon'/>
      </button>
      
    </div>
  )
}

export default Idcard
