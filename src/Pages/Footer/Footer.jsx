import React from 'react'
// import { Link } from 'react-router-dom'
import "./Footer.css"
import instagram from "../../assets/instagram.svg"
import linkedin from "../../assets/linkedin.svg"
import whatsapp from "../../assets/whatsapp.svg"
import twitter from "../../assets/twitter.svg"

const Footer = () => {
  return (
    <div className='Footer'>
        <div className="fotter-main">
            <div className="footer-top">
                <div className="footer-top-left">
                    <a href='#'>Home</a> 
                    <a href='#'>About</a>
                    <a href='#'>Artist</a>
                    <a href='#'>Product</a>
                    <a href='#'>contact</a>
                </div>
                <div className="footer-top-right">
                        <h1>Melodify</h1>
                        <h2>Music Mood Masti</h2>
                        
                </div>
            </div>
            <div className="footer-bottom">
            <div className="footer-top-right-bottom">
            <img className='img-fluide' src={instagram} alt="" />
                            <img className='img-fluide' src={twitter} alt="" />
                            <img className='img-fluide' src={whatsapp} alt="" />
                            <img className='img-fluide' src={linkedin} alt="" />          
                            </div>
            
                <p>Copyright &copy;2024 Prasann Mk. All rights reserved</p>
            </div>
        </div>
    </div>
  )
}

export default Footer