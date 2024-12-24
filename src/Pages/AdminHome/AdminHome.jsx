import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../Navbar/Navbar';
import ByArtistName from '../ByArtistName/ByArtistName';
import Footer from '../Footer/Footer';
import AddSong from '../AddSong/AddSong';
import CreatePlaylist from '../CreatePlaylist/CreatePlaylist';
import ViewPlaylist from '../ViewPlaylist/ViewPlaylist';
import ViewSong from '../ViewSong/ViewSong';
import ByGenreName from '../ByGenreName/ByGenreName';
import './AdminHome.css';
import Play_button from "../../assets/play_button.svg";
import Card from "react-bootstrap/Card";

const AdminHome = () => {
  const navigate = useNavigate();
  const [playlists, setPlaylists] = useState([]);
  const [currentView, setCurrentView] = useState('home');

  useEffect(() => {
    fetchPlaylists();
  }, []);

  const fetchPlaylists = async () => {
    try {
      const response = await axios.get('http://localhost:8080/getplaylists');
      console.log('Playlists fetched:', response.data);
      if (Array.isArray(response.data)) {
        setPlaylists(response.data);
      } else {
        console.error('Unexpected response format:', response.data);
      }
    } catch (error) {
      console.error('Error fetching playlists:', error);
    }
  };

  const view = (name) => {
    window.location.href = `/view/${name}`;
  };

  const renderContent = () => {
    switch (currentView) {
      case 'addSong':
        return <AddSong />;
      case 'viewSongs':
        return <ViewSong />;
      case 'createPlaylist':
        return <CreatePlaylist />;
      case 'viewPlaylist':
        return <ViewPlaylist />;
      default:
        return (
          <>
            <h1 className='admin-first'>Admin Home</h1>
            <h2>Playlists</h2>
            <div className="main-adminhome">
              {playlists.length > 0 ? (
                playlists.map((playlist,idx) => {
                  const firstSongImgUrl =
                    playlist.songs && playlist.songs.length > 0
                      ? playlist.songs[0].imgUrl
                      : '';

                  return (
                    // <div key={playlist.id} className="playlist" onClick={() => view(playlist.name)}>
                    //   {firstSongImgUrl && (
                    //     <img
                    //       src={firstSongImgUrl}
                    //       alt={`Cover for ${playlist.name}`}
                    //       className="playlist-img"
                    //       onClick={() => view(playlist.name)}
                    //       style={{ cursor: 'pointer' }}
                    //     />
                    //   )}
                    //   <h3>{playlist.name}</h3>
                    //   {/* <button onClick={() => view(playlist.name)}>View</button> */}
                    // </div>
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
                    <img src={Play_button} alt="Play button" />
                  </div>
                </Card>
              </div>
                  );
                })
              ) : (
                <p>No playlists available</p>
              )}
            </div>
            <h2>Playlist By Artists</h2>
            <div className="byArtistName-wrapper">
              <ByArtistName />
            </div>
            <h2>Playlist By Genre</h2>
            <div className="byGenreName-wrapper">
              <ByGenreName />
            </div>
          </>
        );
    }
  };

  return (
    <div className="AdminHome">
      <Navbar userRole="admin" setCurrentView={setCurrentView} />
      <div className="buttons">
        {/* Additional buttons can be added here */}
      </div>
      <div className="playlist-holder">
        {renderContent()}
      </div>
      <Footer />
    </div>
  );
};

export default AdminHome;
