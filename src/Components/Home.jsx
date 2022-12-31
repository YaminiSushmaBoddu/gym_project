import React from 'react'
import './Styles/Home.css'
const Home = () => {
  return (
    <div className='home'>
      <div className="left_h">
        <div className='the_best_ad'>
          <div></div>
          <span>The best Fitness club in the town</span>
        </div>
         {/* Heading */}
           <div className="hero_text">
              <div>
                <span>shape </span>
                <span> your</span>
              </div>
              <div>
                <span> Ideal Body</span>
              </div>
           </div>
      </div>
      <div className="right_h">Right</div>
    </div>
  )
}

export default Home