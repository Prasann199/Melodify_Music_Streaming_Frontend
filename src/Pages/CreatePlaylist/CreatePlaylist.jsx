import React, { useState, useEffect } from 'react';
import axios from '../../services/axiosConfig';
import Navbar from '../Navbar/Navbar';
import "./CreatePlaylist.css";

const CreatePlaylist = () => {
  const [songs, setSongs] = useState([]);
  const [selectedSongs, setSelectedSongs] = useState([]);
  const [playlistName, setPlaylistName] = useState('');

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const response = await axios.get('http://localhost:8080/getsongs');
        setSongs(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching songs:', error);
      }
    };

    fetchSongs();
  }, []);

  const handleSongSelection = (songId) => {
    setSelectedSongs(prevSelected => {
      if (prevSelected.includes(songId)) {
        return prevSelected.filter(id => id !== songId);
      } else {
        return [...prevSelected, songId];
      }
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const playlistData = {
      name: playlistName,
      songs: selectedSongs.map(id => ({ id }))
    };

    try {
      await axios.post('http://localhost:8080/addplaylist', playlistData);
      alert('Playlist added successfully!');
    } catch (error) {
      console.error('Error adding playlist:', error);
    }
  };

  return (
    <div className='create-playlist'>
      <center>
        <h2>Create Playlist</h2>
      </center>
      <form  onSubmit={handleSubmit}>
      <div className='txtinput'>
          
          <input 
            type="text" 
            value={playlistName} 
            onChange={(e) => setPlaylistName(e.target.value)} 
            placeholder='Playlist Name'
            required 
          />
        </div>
        <div className='create-scroll'>

        
        <div className='checkbox1'>
          {songs.map(song => (
            <div key={song.id} className='checkbox2'>
              <label>
                <input 
                  type="checkbox" 
                  value={song.id} 
                  onChange={() => handleSongSelection(song.id)} 
                />
                {song.name} by {song.artist}
              </label>
            </div>
          ))}
        </div>
        </div>
        <button type="submit" className='create-playlist-btn'>Create Playlist</button>
      </form>
    </div>
  );
};

export default CreatePlaylist;
