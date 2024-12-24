import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../Navbar/Navbar';
import "./ByArtistName.css";
import Play_button from "../../assets/play_button.svg";
import Card from "react-bootstrap/Card";

const ByArtistName = () => {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    const fetchArtists = async () => {
      try {
        const response = await axios.get('http://localhost:8080/getArtists');
        setArtists(response.data);
        // console.log(response.data);
      } catch (error) {
        alert('Error fetching Artist data');
        console.error(error);
      }
    };

    fetchArtists();
  }, []);

  const handleArtist = (artist) => {
    window.location.href = `songs/${artist}`;
  }

  return (
    <div className="artist-playlist-holder">
      {/* <Navbar/> */}
      {/* <div className='ByArtistName'> */}
        {artists.map((artistData, idx) => (
          // <div key={idx} className="artist-names">
          //   <img src={artistData.imageUrl} alt={`${artistData.artist} song`} />
          //   <h3>{artistData.artist}</h3>
          //   <button onClick={() => handleArtist(artistData.artist)}>click me</button>
          // </div>
          <div className="col-3" key={idx}>
                <Card
                  onClick={() => handleArtist(artistData.artist)}
                  className="custom-card"
                >
                  <div className="image-container1">
                    <Card.Img
                      variant="top"
                      src={artistData.imageUrl}
                      alt={`Cover for ${artistData.artist}`}
                    />
                  </div>
                  <Card.Body>
                    <Card.Title className="responsive-text">
                    {artistData.artist}
                    </Card.Title>
                  </Card.Body>
                  <div className="overlay">
                    <img src={Play_button} alt="Play button" />
                  </div>
                </Card>
              </div>
        ))}
      </div>
    // </div>
  );
};

export default ByArtistName;
