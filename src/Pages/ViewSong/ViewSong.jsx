import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../Navbar/Navbar';
import "./ViewSong.css"
import ByArtistName from '../ByArtistName/ByArtistName';
import ViewPlaylist from '../ViewPlaylist/ViewPlaylist';
import Play_button from "../../assets/play_button.svg";
import Card from "react-bootstrap/Card";

const ViewSong = () => {
  const [songs, setSongs] = useState([]);
  const [currentAudio, setCurrentAudio] = useState(null); // Store the current audio element
  const [previousAudio, setPreviousAudio] = useState(null); // Store the previous audio element

  const getData = async () => {
    try {
      const url = 'http://localhost:8080/getsongs';
      const response = await axios.get(url);
      console.log(response.data);
      setSongs(response.data);
    } catch (error) {
      console.log('Error:', error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

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
    <div className='ViewSong'>
      {/* <Navbar /> */}
      <h1 className='viewsong-first'>Songs</h1>
      <div className="songs-container">
      {songs.map((song, idx) => (
        // <div className='view-song-box' key={idx}>
          
        //   <img src={song.imgUrl} alt={song.name} />
        //   <h3>{song.name}</h3>
        //   <p>{song.artist}</p>
        //   <p>{song.genre}</p>
        //   <audio controls src={song.audioUrl}>
        //   </audio>
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
                    <Card.Title className="responsive-text d-flex justify-content-between">
                      {song.artist}
                    <p>{song.genre}</p>
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
      <h1 className='headings'>Playlists</h1>
      <div className="playlist-wrapper">
      <ViewPlaylist />
      </div>
      <h1 className='headings'>Playlist By Artists</h1>
      <div className="byArtistName-wrapper">
      <ByArtistName />
      </div>
    </div>
  );
};

export default ViewSong;
