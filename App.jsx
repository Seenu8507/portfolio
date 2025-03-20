import { useState } from 'react'
import './App.css'
import img from "./seenu_img.jpg";
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReactDOM from 'react-dom'
 

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='body'>
      <div className='div1'>
          <h1>PORTFOLIO</h1>
          <div className='nav'>
            
            <a href='https://www.youtube.com'>About</a>
             <a href=''>Project</a>
             <a href=''>Experience</a>
             <a href=''>Contact</a>
            
             
          </div>
       </div>
    <div className='div2'><h4>Motivated and dedicated web and software developer with
a strong foundation in programming principles.Skilled in React,
javascript and sql passionate about creating efficient and
reliable web applications.Strong problem solving and team work
abilities.Eager to contribute to web development projects.</h4>


    </div>
    <img src={img} alt='seenuimg' className='img'></img>
    

    
    
     
    </div> 
    <h1 style={{position:"absolute",color:"black",marginTop:"980px",marginLeft:"750px",}}>PROJECT</h1>

    <div className='project-slide'>
         
      
         <div className='slider1'><p style={{color:"black",marginTop:"100px"}}><b>LEAVE MANAGEMENT APPLICATION</b><br/><br/><br/>
         A Leave Management System developed using HTML, CSS, and JavaScript allows users to manage their leave applications. It includes a Login page for user authentication, where users can securely access their accounts. The Signup page enables new users to register with their credentials. The Leave Application page allows users to apply for various types of leave (e.g., sick, vacation). The system validates inputs, ensuring required fields are filled. Additionally, users can view and manage their leave requests, offering a complete, interactive experience.</p></div>
         <div className='slider2'><p style={{color:"black",marginTop:"100px"}}>
         <b> KEYLOGGER APPLICATION</b><br/><br/><br/>A keylogger application is a type of software designed to monitor and record keystrokes on a computer system without the user's knowledge. It can capture every key pressed on the keyboard, including sensitive data like passwords, messages, and personal information. Typically, keyloggers run in the background, recording data to a local file or transmitting it to a remote server. While keyloggers can be used for legitimate purposes, such as monitoring employees or children, they are often associated with malicious activities like cyber-espionage or identity theft.</p></div>
         <div className='slider3'><p style={{color:"black",marginTop:"100px"}}><b>SMART BULB CONTROL WITH APP</b><br/><br/><br/>Develop a Flutter-based mobile application to control a smart bulb using an Arduino board. The app communicates with Arduino via Bluetooth or WiFi, sending ON/OFF commands. Arduino processes the received signals and controls a relay module, which switches the bulb accordingly. This setup enables remote and wireless bulb operation, offering convenience, automation, and energy efficiency through mobile-based control.</p></div>
      
      


      
      
    </div> 
    <div className='internship-slide'>
        <div className='intern-slider1'><p style={{color:"black",marginTop:"100px"}}><b>
        VINTORIX PRIVATE LIMITED(EMAIL MARKETTING)<br/>July 2024 -Aug 2024 (4 Weeks)</b><br/><br/><br/>
        Collaborated with a team to design visually appealing and engaging email campaigns, enhancing user experience and brand consistency. Analyzed key email performance metrics such as open rates, click-through rates, and conversions. Implemented data-driven strategies to optimize content, segmentation, and timing, resulting in a significant increase in overall email conversion rates.</p></div>
         <div className='intern-slider2'><p style={{color:"black",marginTop:"100px"}}>
         <b>
         INTERNSHALA TRAININGS(WEB DEVELOPMENT)<br/>Aug 2023 -Sep 2023 (4 Weeks)</b><br/><br/><br/>During my web development internship, I designed and developed responsive websites using HTML, CSS, JavaScript, and PHP. I created user-friendly interfaces, ensuring cross-browser compatibility and mobile responsiveness. Additionally, I contributed to both front-end and back-end development, assisting in coding, debugging, and optimizing website performance for a seamless user experience.</p></div>
         

    </div>
    <h1 style={{position:"absolute",color:"black",marginTop:"1950px",marginLeft:"750px",}}>EXPERIENCE</h1>
    
    
    <div className='contact'>

    
          
             <div ><a href='https://www.instagram.com/cho_sweet_seenu/'><FontAwesomeIcon icon={faInstagram} className='insta-icon' /></a></div>
             <div><a href='https://wa.me/qr/I6E5BSCQCJKSP1'><FontAwesomeIcon icon={faWhatsapp}  className='whatsapp-icon'/></a></div>
            <div><a href='www.linkedin.com/in/seenu-a-574398293'><FontAwesomeIcon icon={faLinkedinIn} className='linkedin-icon' /></a></div>
            <div><a href='https://github.com/Seenu8507'><FontAwesomeIcon icon={faGithub} className='github-icon'/></a></div>
          
        
    
    </div>
    
    
    </>
  )
}

export default App
