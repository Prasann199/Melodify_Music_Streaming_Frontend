import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../../services/axiosConfig';
import "./DisplayPlaylist.css";
import ByArtistName from '../ByArtistName/ByArtistName';
import Navbar from '../Navbar/Navbar';
import Play_button from "../../assets/play_button.svg";
import Card from "react-bootstrap/Card";
import Footer from '../Footer/Footer';

const DisplayPlaylist = () => {
    const { name } = useParams(); // Get the dynamic parameter
    const [playlist, setPlaylist] = useState(null);
    const [currentAudio, setCurrentAudio] = useState(null); // Store the current audio element
    const [previousAudio, setPreviousAudio] = useState(null); // Store the previous audio element
  

    useEffect(() => {
      
        const fetchSongs = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/views/${name}`);
                setPlaylist(response.data);
                
            } catch (error) {
                alert('Error fetching songs data');
                console.error(error);
            }
        };

        fetchSongs();
    }, [name]);

    if (!playlist) {
        return <p>Loading playlist...</p>;
    }

    const playMusic = (idx) => {
        const selectedAudio = document.querySelector(`.audio-${idx}`); // Get the clicked audio element
    
        if (selectedAudio === currentAudio) {
          // Toggle play/pause for the same song
          if (selectedAudio.paused) {
            selectedAudio.play();
          } else {
            selectedAudio.pause();
          }
        } else {
          // Pause and reset the previous audio
          if (previousAudio) {
            previousAudio.pause();
            previousAudio.currentTime = 0;
          }
    
          // Play the new audio and update states
          if (selectedAudio) {
            selectedAudio.play();
            setPreviousAudio(selectedAudio); // Set the current audio as the previous one
            setCurrentAudio(selectedAudio); // Set the selected audio as the current one
          }
        }
      };

    return (
        <>
        <Navbar />
        <div className='DisplayPlaylist'>
                <h1>{playlist.name}</h1>
            <div className="playlist-disp">
                {playlist.songs && playlist.songs.length > 0 ? (
                    playlist.songs.map((song,idx) => (
                        
                        <div className="col-3" key={idx}>
                        <Card
                          onClick={() => playMusic(idx)}
                          className="custom-card"
                        >
                          <div className="image-container1">
                            <Card.Img
                              variant="top"
                              src={song.imgUrl}
                              alt={`Cover for ${song.name}`}
                            />
                          </div>
                          <Card.Body>
                            <Card.Title className="responsive-text">
                              {song.name}
                            </Card.Title>
                            <Card.Title className="responsive-text">
                              {song.artist}
                            </Card.Title>
                            <audio
                              className={`audio audio-${idx}`}
                              src={song.audioUrl}
                              preload="auto"
                              loop
                            ></audio>
                          </Card.Body>
                          <div className="overlay">
                            <img src={Play_button} alt="Play button" />
                          </div>
                        </Card>
                      </div>
                    ))
                ) : (
                    <p>No songs available in this playlist.</p>
                )}
            </div>
            
        </div>
        <Footer />
        </>
    );
};

export default DisplayPlaylist;
