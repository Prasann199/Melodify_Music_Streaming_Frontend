import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ByArtistName from "../ByArtistName/ByArtistName";
import Navbar from "../Navbar/Navbar";
import ViewSong from "../ViewSong/ViewSong";
import CreatePlaylist from "../CreatePlaylist/CreatePlaylist";
import ViewPlaylist from "../ViewPlaylist/ViewPlaylist";
import Footer from "../Footer/Footer";

import "./CustomerHome.css";

import Play_button from "../../assets/play_button.svg";
import Card from "react-bootstrap/Card";
import ByGenreName from "../ByGenreName/ByGenreName";

const CustomerHome = () => {
  const navigate = useNavigate();
  const [playlists, setPlaylists] = useState([]);
  const [currentView, setCurrentView] = useState("home");

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
    
    navigate(`/view/${name}`);
  };

  const renderContent = () => {
    switch (currentView) {
      case "viewSongs":
        return <ViewSong />;
      case "createPlaylist":
        return <CreatePlaylist />;
      case "viewPlaylist":
        return <ViewPlaylist />;
      default:
        return (
          <>
            <div className=" main-adminhome">
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
          </>
        );
    }
  };

  return (
    <>
      <Navbar userRole={"customer"} setCurrentView={setCurrentView} />
      <div className="CustomerHome">
        <h1>Customer Home</h1>
        <h2 className="px-3">Playlists</h2>
        {renderContent()}
        <h2 className="px-3">By Artists</h2>
        <ByArtistName />
        <h2 className="px-3">By Genere</h2>
        <div className="genere-wrapper">
        <ByGenreName />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CustomerHome;
