
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import AddSong from './Pages/AddSong/AddSong'
import CreatePlaylist from './Pages/CreatePlaylist/CreatePlaylist'
import Login from './Pages/Login/Login'
import Register from './Pages/Register/Register'
import ViewPlaylist from './Pages/ViewPlaylist/ViewPlaylist'
import ViewSong from './Pages/ViewSong/ViewSong'
import DisplayPlaylist from './Pages/DisplayPlaylist/DisplayPlaylist'
import ByArtistName from './Pages/ByArtistName/ByArtistName'
import SongByArtists from './Pages/SongByArtists/SongByArtists'
import Index from './Pages/Index/Index'
import AdminHome from './Pages/AdminHome/AdminHome'
import CustomerHome from './Pages/CustomerHome/CustomerHome'
import Membership from './Pages/Membership/Membership'
import Navbar from './Pages/Navbar/Navbar'
import Logout from './Pages/Logout/Logout'
import Footer from './Pages/Footer/Footer'
import ByGenreName from './Pages/ByGenreName/ByGenreName'
import SongsByGenre from './Pages/SongByGenre/SongByGenre'



function App() {

  return (
    <>
      {/* <AddSong /> */}
      {/* <ViewSong /> */}
      {/* <CreatePlaylist /> */}
      {/* <ViewPlaylist /> */}
      {/* <Register /> */}
      {/* <Login /> */}
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Index />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/registeration" element={<Register />}></Route>
        <Route path="/artists" element={<ByArtistName />}></Route>
        <Route path='songs/:artist' element={<SongByArtists />}></Route>
        <Route path='/createplaylist' element={<CreatePlaylist />}></Route>
        <Route path='/viewplaylist' element={<ViewPlaylist />}></Route>
        <Route path='/view/:name' element={<DisplayPlaylist />}></Route>
        <Route path="/addsong" element={<AddSong />}></Route>
        <Route path="/viewsong" element={<ViewSong />}></Route>
        <Route path="/admin" element={<AdminHome />}></Route>
        <Route path="/customer" element={<CustomerHome />}></Route>
        <Route path="/membership" element={<Membership />}></Route>
        <Route path='/logout' element={<Logout />}></Route>
        <Route path="/navbar" element={<Navbar />}></Route>
        <Route path='/footer' element={<Footer />}></Route>
        <Route path='/genre' element={<ByGenreName />}></Route>
        <Route path="/songs/genre/:genre" element={<SongsByGenre/>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
