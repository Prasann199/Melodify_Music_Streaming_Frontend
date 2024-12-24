import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import "./Index.css";
import Play from "../../assets/play.svg"
import Footer from "../Footer/Footer";
import home from "../../assets/home.png";
import library from "../../assets/library.png"
import genere1 from "../../assets/genere1.jpg"
import genere2 from "../../assets/genere2.jpg"
import genere3 from "../../assets/Genere3.jpg"
import genere4 from "../../assets/genere4.jpg"
import Play_button from "../../assets/play_button.svg"
import Card from 'react-bootstrap/Card';
const Index = () => {
  const navigate = useNavigate();

  function handleLogin() {
    navigate("/login");
  }
  function handleRegister() {
    navigate("/registeration");
  }

  


  return (
    // <div className="Index">
    //   <Navbar style={{ positon: "absolute" }} />
    //   <div className="index-page1">
    //     <div className="index-video1">
    //       <video
    //         autoPlay
    //         loop
    //         muted
    //         src="https://videos.pexels.com/video-files/6274533/6274533-uhd_2560_1440_30fps.mp4"
    //       ></video>
    //     </div>
    //     <div className="index-main">
    //       <h2>Music Adding & Music Streaming</h2>
    //       <p>
    //         There are many variations of passages of songs and the songs are
    //         added by web application admins a theses are the admins who have
    //         registered themselves as admin and customer are users are those who
    //         are registered them seleves as customer or user
    //       </p>
    //       <div className="index-btns">
    //         <button onClick={handleLogin}>Login</button>
    //         <div className="register-btn">
    //           <button onClick={handleRegister}>Register</button>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="index-page2">
    //     <div className="indx-pge2-main">
    //       <div className="indx-pge2-main-left">
    //         <h1>About Our Web Application</h1>
    //       </div>
    //       <div className="indx-pge2-main-right">
    //         <p>
    //           Something related to website will contain all the things like what
    //           is the web application firstly means why we have to use the web
    //           application what all it have inside it to serve for the world how
    //           the people will use add songs.for another people and how the
    //           people of user type will use for their entertainement how people
    //           can earn money and how peoples will make their time beast with
    //           music
    //         </p>
    //         <p>
    //           for another people and how the people of user type will use for
    //           their entertainement how people can earn money and how peoples
    //           will make their time beast with music
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="index-page3">
    //     <h1>Playlist Based On Artists</h1>
    //     <div className="idx-main-pge3">
    //       <div className="idx-slider">

    //         <div className="idx-box">
    //           <div className="idx-img-box">
    //             <img src="https://images.pexels.com/photos/3783471/pexels-photo-3783471.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
    //           <div className="idx-overlay">
    //             <h3>Based On Artists</h3>
    //             <button>view more</button>
    //           </div>
    //           </div>
    //         </div>

    //         <div className="idx-box">
    //           <div className="idx-img-box">
    //             <img src="https://images.pexels.com/photos/2952834/pexels-photo-2952834.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
    //           <div className="idx-overlay">
    //             <h3>Based On Artists</h3>
    //             <button>view more</button>
    //           </div>
    //           </div>
    //         </div>            
            
    //         <div className="idx-box">
    //           <div className="idx-img-box">
    //             <img src="https://images.pexels.com/photos/1267350/pexels-photo-1267350.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
    //           <div className="idx-overlay">
    //             <h3>Based On Artists</h3>
    //             <button>view more</button>
    //           </div>
    //           </div>
    //         </div>

    //         <div className="idx-box">
    //           <div className="idx-img-box">
    //             <img src="https://images.pexels.com/photos/3101522/pexels-photo-3101522.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
    //           <div className="idx-overlay">
    //             <h3>Based On Artists</h3>
    //             <button>view more</button>
    //           </div>
    //           </div>
    //         </div>

    //         <div className="idx-box">
    //           <div className="idx-img-box">
    //             <img src="https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
    //           <div className="idx-overlay">
    //             <h3>Based On Artists</h3>
    //             <button>view more</button>
    //           </div>
    //           </div>
    //         </div>

    //         <div className="idx-box">
    //           <div className="idx-img-box">
    //             <img src="https://images.pexels.com/photos/1637108/pexels-photo-1637108.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
    //           <div className="idx-overlay">
    //             <h3>Based On Artists</h3>
    //             <button>view more</button>
    //           </div>
    //           </div>
    //         </div>

    //         <div className="idx-box">
    //           <div className="idx-img-box">
    //             <img src="https://images.pexels.com/photos/1309240/pexels-photo-1309240.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
    //           <div className="idx-overlay">
    //             <h3>Based On Artists</h3>
    //             <button>view more</button>
    //           </div>
    //           </div>
    //         </div>

            
    //         <div className="idx-box">
    //           <div className="idx-img-box">
    //             <img src="https://images.pexels.com/photos/3783471/pexels-photo-3783471.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
    //           <div className="idx-overlay">
    //             <h3>Based On Artists</h3>
    //             <button>view more</button>
    //           </div>
    //           </div>
    //         </div>

    //         <div className="idx-box">
    //           <div className="idx-img-box">
    //             <img src="https://images.pexels.com/photos/2952834/pexels-photo-2952834.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
    //           <div className="idx-overlay">
    //             <h3>Based On Artists</h3>
    //             <button>view more</button>
    //           </div>
    //           </div>
    //         </div>            
            
    //         <div className="idx-box">
    //           <div className="idx-img-box">
    //             <img src="https://images.pexels.com/photos/1267350/pexels-photo-1267350.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
    //           <div className="idx-overlay">
    //             <h3>Based On Artists</h3>
    //             <button>view more</button>
    //           </div>
    //           </div>
    //         </div>

    //         <div className="idx-box">
    //           <div className="idx-img-box">
    //             <img src="https://images.pexels.com/photos/3101522/pexels-photo-3101522.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
    //           <div className="idx-overlay">
    //             <h3>Based On Artists</h3>
    //             <button>view more</button>
    //           </div>
    //           </div>
    //         </div>

    //         <div className="idx-box">
    //           <div className="idx-img-box">
    //             <img src="https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
    //           <div className="idx-overlay">
    //             <h3>Based On Artists</h3>
    //             <button>view more</button>
    //           </div>
    //           </div>
    //         </div>

    //         <div className="idx-box">
    //           <div className="idx-img-box">
    //             <img src="https://images.pexels.com/photos/1637108/pexels-photo-1637108.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
    //           <div className="idx-overlay">
    //             <h3>Based On Artists</h3>
    //             <button>view more</button>
    //           </div>
    //           </div>
    //         </div>

    //         <div className="idx-box">
    //           <div className="idx-img-box">
    //             <img src="https://images.pexels.com/photos/1309240/pexels-photo-1309240.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
    //           <div className="idx-overlay">
    //             <h3>Based On Artists</h3>
    //             <button>view more</button>
    //           </div>
    //           </div>
    //         </div>

    //       </div>
    //     </div>
    //   </div>
    //   <div className="index-page4">
    //     <div className="idx-pge4-main">
    //       <div className="idx-pge4-top">
    //         <div className="idx-pge4-top-left">
    //           <h1>Listen</h1>
    //           <h1>Our</h1>
    //           <h1>Music</h1>
    //         </div>
    //         <div className="idx-pge4-top-right">
    //           <img
    //             src="https://images.pexels.com/photos/144429/pexels-photo-144429.jpeg?auto=compress&cs=tinysrgb&w=600"
    //             alt=""
    //           />
    //           <img
    //             src="https://images.pexels.com/photos/1490844/pexels-photo-1490844.jpeg?auto=compress&cs=tinysrgb&w=600"
    //             alt=""
    //           />
    //           <img
    //             src="https://images.pexels.com/photos/1001850/pexels-photo-1001850.jpeg?auto=compress&cs=tinysrgb&w=600"
    //             alt=""
    //           />
    //           <img
    //             src="https://images.pexels.com/photos/1047442/pexels-photo-1047442.jpeg?auto=compress&cs=tinysrgb&w=600"
    //             alt=""
    //           />
    //         </div>
    //       </div>
    //       <div className="idx-pge4-bottom">
    //         <p>
    //           Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quo
    //           aliquid tenetur nam molestias saepe excepturi illo possimus
    //           consequuntur soluta sint quia laboriosam nostrum eius, labore
    //           veniam magni repellat doloremque.
    //         </p>
    //         <p>
    //           Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
    //           provident vel. Magni, voluptatibus. Alias ducimus minus atque
    //           repellendus possimus. Totam suscipit expedita eum amet? Assumenda
    //           asperiores magni molestias doloribus eius mollitia, dolores
    //           laudantium impedit obcaecati?
    //         </p>
    //         <p>
    //           Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi
    //           ipsa molestias dolorum qui fuga assumenda, vitae veniam sint
    //           officiis quia distinctio inventore repellendus laudantium
    //           exercitationem rem soluta odit ducimus perspiciatis, deleniti
    //           quas.
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="index-page5">
    //     <div className="idx-pge5-left">
    //     <h1>Contact Us</h1>
    //       <form action="">
    //         <input type="text" placeholder="Enter your email"/>
    //         <textarea name="" id="" placeholder="Enter your Message"></textarea>
    //         <button>Submit</button>
    //       </form>
    //     </div>
    //     <div className="idx-pge5-right">
          
    //         <h2>" Music is a moral law. It gives soul to the mind. fight to the imagination. and charm and gaiety to life and to everything. "</h2>
            
    //     </div>
    //   </div>
    //   <Footer />
    // </div>
    <div className="index-page">
      {/* <div className="index-head">
        <p className="index-logo">Melodify</p>
        <div pill className="index-nav d-flex">
          <button className="home-btn" ><img className="img-fluid" src={home} alt="" /></button>
        <div className="index-search ">
          <input type="text" placeholder="What do you want to play?"/>
          <button type="button" class="btn btn-light btn-dm">Search</button>
        </div>
        </div>
        <div >
        <button onClick={handleRegister} type="button" class="index-signup-btn btn btn-primary m-2 btn-sm">Sign Up</button>
          <button onClick={handleLogin} type="button" class="index-login-btn btn btn-secondary m-2 btn-sm">Login</button>
        </div>
      </div> */}
      <div className="index-head2">
      
      <Navbar style={{ positon: "absolute" }} />
      </div>
      <div className="index-main">
        <div className="index-main-left ">
          <div className="index-main-left-top">
              <img onClick={handleLogin} className="img-fluid" src={library} alt="" />
              <h5 className="responsive-text">Your Library</h5>
              <p onClick={handleLogin} className="responsive-text">+</p>
          </div>
          <div className="index-main-left-content ">
            <div className="index-create-playlist">
              <h6 className="responsive-text">Create your first playlist</h6>
              <p className="responsive-text">it's easy, we'll help you</p>
              <button onClick={handleLogin} >Create Playlist</button>
            </div>
            <div className="index-find-podcast">
            <h6 className="responsive-text">Let's find some podcast to follow</h6>
              <p className="responsive-text">we'll keep you updated on new episodes</p>
              <button onClick={handleLogin} >Browse podcasts</button>
            </div>
          </div>
          <div className="index-main-left-bottom">
            <p className="responsive-text">" Where melodies meet voices, and rhythms blend with stories—your ultimate destination for music and podcasts "</p>
          </div>
        </div>
        <div className="index-main-right">
          <div className="row mx-3 mt-1">
            <h3 className="responsive-text2">Popular Artists</h3>
          </div>
          <div className="row index-by-artist">
            <div className="col-3 index-columns">
    <Card onClick={handleLogin} className="custom-card">
      <div className="image-container">
        <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpFYWz44jNiZRP_jBsg80l94p3txbxVDaAWA&s" />
      </div>
      <Card.Body>
        <Card.Title className="responsive-text">Card Title</Card.Title>
      </Card.Body>
      <div className="overlay " ><img src={Play_button} alt="" /></div>
    </Card>
            </div>
            <div className="col-3">
    <Card onClick={handleLogin} className="custom-card">
      <div className="image-container">
        <Card.Img variant="top" src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcStrv_oPE6vni313HxiliDz1adIGEbzlBmZH7Aczogkb7bLKVGz5chCNwrPYoCHR4KXYr0UjqWiEQHbwYIU6FgaiQ" />
      </div>
      <Card.Body>
        <Card.Title className="responsive-text">Card Title</Card.Title>
      </Card.Body>
      <div className="overlay " ><img src={Play_button} alt="" /></div>

    </Card>
            </div>
            <div className="col-3">
    <Card onClick={handleLogin} className="custom-card">
      <div className="image-container">
        <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYVQ5FrVA7D7o49s2zjgSkstA87mJtL7PZgA&s" />
      </div>
      <Card.Body>
        <Card.Title className="responsive-text">Card Title</Card.Title>
      </Card.Body>
      <div className="overlay " ><img src={Play_button} alt="" /></div>

    </Card>
            </div>
            <div className="col-3">
    <Card onClick={handleLogin} className="custom-card">
      <div className="image-container">
        <Card.Img variant="top" src="https://www.shreyaghoshal.com/assest/images/shreya-image.png" />
      </div>
      <Card.Body>
        <Card.Title className="responsive-text">Card Title</Card.Title>
      </Card.Body>
      <div className="overlay " ><img src={Play_button} alt="" /></div>

    </Card>
            </div>
</div>

        <div className="row mx-3 mt-1">
          <h3 className="responsive-text2">Popular Songs</h3>
        </div>
        <div className="row index-by-genere">
        <div className="col-3">
    <Card onClick={handleLogin} className="custom-card">
      <div className="image-container1">
        <Card.Img variant="top" src="https://i.scdn.co/image/ab67616d0000b27354e544672baa16145d67612b" />
      </div>
      <Card.Body>
        <Card.Title className="responsive-text">Card Title</Card.Title>
      </Card.Body>
      <div className="overlay " ><img src={Play_button} alt="" /></div>

    </Card>
        </div>
        <div className="col-3">
    <Card onClick={handleLogin} className="custom-card">
      <div className="image-container1">
        <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2Bwx9NHFB7fFiknC9snBQ6XlzP-AaxGlHXQ&s" />
      </div>
      <Card.Body>
        <Card.Title className="responsive-text">Card Title</Card.Title>
      </Card.Body>
      <div className="overlay " ><img src={Play_button} alt="" /></div>

    </Card>
        </div>
        <div className="col-3">
    <Card onClick={handleLogin} className="custom-card">
      <div className="image-container1">
        <Card.Img variant="top" src="https://i.scdn.co/image/ab67616d0000b273a0f38823e6bdb40b4f3555bd" />
      </div>
      <Card.Body>
        <Card.Title className="responsive-text">Card Title</Card.Title>
      </Card.Body>
      <div className="overlay " ><img src={Play_button} alt="" /></div>

    </Card>
        </div>
        <div className="col-3">
    <Card onClick={handleLogin} className="custom-card">
      <div className="image-container1">
        <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjqdpeG1HKq00Alj8GnIoc6RpftwHXVp4VIg&s" />
      </div>
      <Card.Body>
        <Card.Title className="responsive-text">Card Title</Card.Title>
      </Card.Body>
      <div className="overlay " ><img src={Play_button} alt="" /></div>

    </Card>
        </div>
        </div>
        <div className="row mx-3 mt-1">
          <h3>Popular Genere</h3>
        </div>
        <div className="row index-by-genere">
        <div className="col-3">
    <Card onClick={handleLogin} className="custom-card">
      <div className="image-container1">
        <Card.Img variant="top" src={genere1} />
      </div>
      <Card.Body>
        <Card.Title className="responsive-text">Card Title</Card.Title>
      </Card.Body>
      <div className="overlay " ><img src={Play_button} alt="" /></div>

    </Card>
  </div>
  <div className="col-3">
    <Card onClick={handleLogin} className="custom-card">
      <div className="image-container1">
        <Card.Img variant="top" src={genere2} />
      </div>
      <Card.Body>
        <Card.Title className="responsive-text">Card Title</Card.Title>
      </Card.Body>
      <div className="overlay " ><img src={Play_button} alt="" /></div>

    </Card>
  </div>
  <div className="col-3">
    <Card onClick={handleLogin} className="custom-card">
      <div className="image-container1">
        <Card.Img variant="top" src={genere3} />
      </div>
      <Card.Body>
        <Card.Title className="responsive-text">Card Title</Card.Title>
      </Card.Body>
      <div className="overlay " ><img src={Play_button} alt="" /></div>

    </Card>
  </div>
  <div className="col-3">
    <Card onClick={handleLogin} className="custom-card">
      <div className="image-container1">
        <Card.Img variant="top" src={genere4} />
      </div>
      <Card.Body>
        <Card.Title className="responsive-text">Card Title</Card.Title>
      </Card.Body>
      <div className="overlay " ><img src={Play_button} alt="" /></div>

    </Card>
  </div>
        </div>

        </div>
      </div>
      <div className="index-footer d-flex align-items-center px-4 py-2 m-0">
        <div className="col-6 ">
          <div className="row responsive-text">Preview Of Melodify</div>
          <div className="row responsive-text">Sign up to get unlimited songs and podcast without ads</div>
        </div>
        <div className="col-6 d-flex  justify-content-end">
        <button onClick={handleRegister} type="button" class="index-login-btn responsive-text">Sign up for free</button>
        </div>
      </div>
      
    </div>
  );
};

export default Index;
