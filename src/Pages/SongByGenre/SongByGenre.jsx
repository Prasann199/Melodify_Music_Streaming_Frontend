import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import "./SongByGenre.css";
import Play_button from "../../assets/play_button.svg";
import Card from "react-bootstrap/Card";

const SongsByGenre = () => {
  const { genre } = useParams();
  const [songs, setSongs] = useState([]);
  const [currentAudio, setCurrentAudio] = useState(null); // Store the current audio element
  const [previousAudio, setPreviousAudio] = useState(null); // Store the previous audio element


  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/songs/genre/${genre}`);
        setSongs(response.data);
      } catch (error) {
        alert('Error fetching songs by genre');
        console.error(error);
      }
    };

    fetchSongs();
  }, [genre]);

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
    <div className="songs-by-genre-holder">
      <Navbar />
      <h1 className='genre-main'>Song By Genre {genre}</h1>
      <div className='SongsByGenre'>
        {songs.map((song, idx) => (
          // <div key={idx} className="song-item">
          //   <img src={song.imgUrl} alt={song.name} />
          //   <h3>{song.name}</h3>
          //   <p>{song.artist}</p>
          //   <audio controls src={song.audioUrl}></audio>
          // </div>
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
        ))}
      </div>
    </div>
  );
};

export default SongsByGenre;
