import React, { useState, useEffect } from "react";
import axios from "../../services/axiosConfig";
import "./ViewPlaylist.css";
import ByArtistName from "../ByArtistName/ByArtistName";
import Play_button from "../../assets/play_button.svg";
import Card from "react-bootstrap/Card";

const ViewPlaylist = () => {
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    fetchPlaylists();
  }, []);

  const fetchPlaylists = async () => {
    try {
      const response = await axios.get("http://localhost:8080/getplaylists");
      console.log("Playlists fetched:", response.data);
      if (Array.isArray(response.data)) {
        setPlaylists(response.data);
      } else {
        console.error("Unexpected response format:", response.data);
      }
    } catch (error) {
      console.error("Error fetching playlists:", error);
    }
  };

  const view = (name) => {
    window.location.href = `/view/${name}`;
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/deleteplaylist/${id}`);
      setPlaylists(playlists.filter((playlist) => playlist.id !== id));
      alert("Playlist deleted successfully!");
    } catch (error) {
      console.error("Error deleting playlist:", error);
    }
  };

  return (
    <div>
      <div className="row">
        {playlists.length > 0 ? (
          playlists.map((playlist, idx) => {
            const firstSongImgUrl =
              playlist.songs && playlist.songs.length > 0
                ? playlist.songs[0].imgUrl
                : "";

            return (
              <div className="col-3" key={idx}>
                <Card
                  onClick={() => view(playlist.name)}
                  className="custom-card"
                >
                  <div className="image-container1">
                    <Card.Img
                      variant="top"
                      src={firstSongImgUrl}
                      alt={`Cover for ${playlist.name}`}
                    />
                  </div>
                  <Card.Body>
                    <Card.Title className="responsive-text">
                      {playlist.name}
                    </Card.Title>
                  </Card.Body>
                  <div className="overlay">
                    <img
                      src={Play_button}
                      alt="Play button"
                      onClick={() => view(playlist.name)}
                    />
                  </div>
                  
                </Card>
              </div>
            );
          })
        ) : (
          <p>No playlists available.</p>
        )}
      </div>
      <ByArtistName />
    </div>
  );
};

export default ViewPlaylist;
