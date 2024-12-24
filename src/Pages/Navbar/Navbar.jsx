import React, { useRef ,useEffect} from 'react';
import Menu from "../../assets/menu.svg";
import "./Navbar.css";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Navbar = ({ userRole ,setCurrentView}) => {

    const menuref = useRef();
    const cls = useRef();
    const navigate=useNavigate();
   
    useEffect(() => {
        // Add the 'visible' class to trigger the fade-in effect
        menuref.current.style.width="0%";
        cls.current.style.display = "none";
    }, []);
   
    const hideMenu=()=> {
        menuref.current.style.width = "0%";
        cls.current.style.display = "none";
    }
    
 
    function showMenu() {
        menuref.current.style.width = "40vw";
        cls.current.style.display = "block";
    }
    const logout=async()=>{
        let response=await axios.get("http://localhost:8080/logout");
        console.log(response.data);
        if(response.data=="login"){
            navigate("/login") ;
        }else{
            alert("Logout Failed!");
        }
    }
    

    const customerButtons = (
        <>
          <button class="responsive-text" onClick={() => setCurrentView('viewSongs')}>View Songs</button>
          <button class="responsive-text" onClick={() => setCurrentView('createPlaylist')}>Create Playlist</button>
          <button class="responsive-text" onClick={() => setCurrentView('viewPlaylist')}>View Playlists</button>
          <button class="responsive-text" onClick={() => {setCurrentView('logout');logout()}}>Logout</button>
        </>
      );
    
      const adminButtons = (
        <>
          <button class="resp-btn" onClick={() => setCurrentView('addSong')}>Add Song</button>
          <button class="resp-btn" onClick={() => setCurrentView('viewSongs')}>View Songs</button>
          <button class="resp-btn" onClick={() => setCurrentView('createPlaylist')}>Create Playlist</button>
          <button class="resp-btn" onClick={() => setCurrentView('viewPlaylists')}>View Playlists</button>
          <button class="resp-btn" onClick={() => {setCurrentView('logout');logout()}}>Logout</button>
        </>
      );

    const nonLoggedInButtons = (
        <>
            <button class="resp-btn" onClick={() => { navigate("/login") }}>Login</button>
            <button class="resp-btn" onClick={() => { navigate("/registeration") }}>Register</button>
        </>
    );

    const renderButtons = () => {
        switch(userRole) {
            case 'admin':
                return adminButtons;
            case 'customer':
                return customerButtons;
            default:
                return nonLoggedInButtons;
        }
    };

    return (
        <div className='Navbar'>
            
            <div ref={menuref} className="menu-options">
                <div className="close-butn">
                    <button ref={cls} onClick={hideMenu}>x</button>
                </div>
                <div className="nav-buttons">
                    {renderButtons()}
                </div>
            </div>
            <div className="header">
                <div className="left-header">
                <p className="index-logo">Melodify</p>
                </div>
                <div className="right-header">
                    <img src={Menu} alt="Menu" onClick={showMenu} />
                </div>
            </div>
        </div>
    );
}

export default Navbar;
