import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./SongByArtists.css";
import Navbar from "../Navbar/Navbar";
import Play_button from "../../assets/play_button.svg";
import Card from "react-bootstrap/Card";

const SongByArtists = () => {
  const { artist } = useParams();
  const [songs, setSongs] = useState([]);
  const [currentAudio, setCurrentAudio] = useState(null); // Store the current audio element
  const [previousAudio, setPreviousAudio] = useState(null); // Store the previous audio element

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/songs/${artist}`
        );
        setSongs(response.data);
      } catch (error) {
        alert("Error fetching songs data");
        console.error(error);
      }
    };

    fetchSongs();
  }, [artist]);

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
      <div className="SongsByArtist-wrapper">
        <h1>Songs by {artist}</h1>
        <div className="SongByArtists">
          {songs.length === 0 ? (
            <p>No songs available for this artist.</p>
          ) : (
            songs.map((song, idx) => (
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
          )}
        </div>
      </div>
    </>
  );
};

export default SongByArtists;
