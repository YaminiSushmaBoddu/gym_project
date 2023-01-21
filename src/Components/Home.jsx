import React from 'react'
import './Styles/Home.css'
import hero_image from './assets/hero_image.png';
import hero_image_back from './assets/hero_image_back.png'
import Heart from './assets/heart.png'
import Calories from './assets/calories.png'
const Home = () => {
  return (
    <div className='home'>
      <div className="left_h">
        <div className='the_best_ad'>
        <div>
          </div>
          <span>The best Fitness club in the town</span>
        </div>
        {/* Heading */}
        <div className="hero_text">
          <div>
            <span className='stroke'>shape </span>
            <span> your</span>
          </div>
          <div>
            <span> Ideal Body</span>
          </div>
          <div>
            <span>In here we will Help you to shape your ideal body and live up your life to fullest</span>
          </div>
        </div>
        {/* {Figures} */}
        <div className="figures">
          <div>
            <span>+140</span>
            <span>expert coachs</span>
          </div>
          <div>
            <span>+978</span>
            <span>members joined</span>
          </div>
          <div>
            <span>+50</span>
            <span>Fitness programs</span>
          </div>
        </div>
        {/* {Buttons} */}
          <div className="home_buttons">
            <button type='button' className='btn'>Get Started</button>
            <button type='button' className='btn'>Learn More</button>
          </div>
      </div>
      <div className="right_h">
        <button type='button' className='btn '>Join Now</button>
        <div className='heart'>
            <img src={Heart} alt="" />
            <span>Heart Rate</span>
            <span>116 BPM</span>
        </div>
        {/* {Hero_Images} */}
        <img src={hero_image} className="hero_image" alt="" />
        <img src={hero_image_back} className="hero_image_back" alt="" />
        {/* {calories} */}
        <div className="calories">
          <img src={Calories} alt="" />
         <div>
         <span>CaloriesBurned</span>
          <span>220kcal</span></div>    
        </div>
      </div>
    </div>
  )
}

export default Home