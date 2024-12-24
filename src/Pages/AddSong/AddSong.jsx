import React, { useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import "./AddSong.css";


const AddSong = () => {

    const [name,setName]=useState("");
    const [artist,setArtist]=useState("");
    const [genre,setGenre]=useState("");
    const [imgUrl,setImgUrl]=useState("");
    const [audio,setAudio]=useState("");

    const navigate=useNavigate();

    const handleSubmit=async(event)=>{
        event.preventDefault();
        try {
            const url="http://localhost:8080/addsong"
            let songdata={
                name:name,
                artist:artist,
                genre:genre,
                imgUrl:imgUrl,
                audioUrl:audio
            }
            let response=await axios.post(url,songdata)
            console.log(response.data);
            if(response.data==="Song added Successfully"){
                alert("song added!")
                navigate("/admin")
            }else{
                alert("Failed to add song!")
            }
        } catch (error) {
            console.log("Error",error)
            alert("Error in adding the song")
        }
    }


  return (
    <div className='addsong' >
        <center>
        <h2>Add Song</h2>
        </center>
        <form onSubmit={handleSubmit}>
        
        <input type="text" value={name} placeholder='Name' onChange={(e)=>{setName(e.target.value)}}/>
        
        <input type="text" value={artist} placeholder='Artist Name' onChange={(e)=>{setArtist(e.target.value)}}/>
        
        <input type="text" value={genre} placeholder='Genere' onChange={(e)=>{setGenre(e.target.value)}}/>
        
        <input type="text" value={imgUrl} placeholder='Image Url' onChange={(e)=>{setImgUrl(e.target.value)}}/>
        {/* <input type="file" name="" id="" value={imgUrl} placeholder='Image Url' onChange={(e)=>{setImgUrl(e.target.value)}}/> */}
        <input type="text" value={audio} placeholder='Audio Url' onChange={(e)=>{setAudio(e.target.value)}}/>
        <button type='submit' className='addsong-btn'>Add Song</button>
        </form>
    </div>
  )
}

export default AddSong