import React from 'react'
import BackImg from "../images/vid.mp4"
import "../css/Home.css"

const Home = () => {
  return (
    <>
      <div >
        <div className='home-body'>
          <video id='myVideo' src={BackImg} loop autoPlay muted >
          </video>
          <div className="content">
            <h1>Learnpedia</h1>
            <p>Welcome to the education domain</p>
            <a href="/signup" ><button className='home-btn'>Join for free</button></a>
            <a href="/business" ><button className='home-btn'>Try ERRORlist for business</button></a>
          </div>
        </div>
      </div>

    </>
  )
}

export default Home