import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../Navbar/Navbar';
import "./ByGenreName.css";
import Play_button from "../../assets/play_button.svg";
import Card from "react-bootstrap/Card";

const ByGenreName = () => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const response = await axios.get('http://localhost:8080/getGenres');
        setGenres(response.data);
      } catch (error) {
        alert('Error fetching Genre data');
        console.error(error);
      }
    };

    fetchGenres();
  }, []);

  const handleGenre = (genre) => {
    window.location.href = `/songs/genre/${genre}`;
  }

  return (
    <div className="genre-playlist-holder">
      {/* <Navbar /> */}
      {/* <div className='ByGenreName'> */}
        {genres.map((genreData, idx) => (
          // <div key={idx} className="genre-names">
          //   <img src={genreData.imageUrl} alt={`${genreData.genre} song`} />
          //   <h3>{genreData.genre}</h3>
          //   <button onClick={() => handleGenre(genreData.genre)}>click me</button>
          // </div>
          <div className="col-3" key={idx}>
                <Card
                  onClick={() => handleGenre(genreData.genre)}
                  className="custom-card"
                >
                  <div className="image-container1">
                    <Card.Img
                      variant="top"
                      src={genreData.imageUrl}
                      alt={`Cover for ${genreData.genre}`}
                    />
                  </div>
                  <Card.Body>
                    <Card.Title className="responsive-text">
                    {genreData.genre}
                    </Card.Title>
                  </Card.Body>
                  <div className="overlay">
                    <img src={Play_button} alt="Play button" />
                  </div>
                </Card>
              </div>
        ))}
      {/* </div> */}
    </div>
  );
};

export default ByGenreName;
