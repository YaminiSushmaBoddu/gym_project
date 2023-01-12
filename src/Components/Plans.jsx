import React from 'react'
import { plansData } from '../data/plansData'
import "./Styles/Plan.css"
import whiteTick from './assets/whiteTick.png'
const Plans = () => {
  return (
    <div calssName="Plans-container">
      <div calssName="program-header" style={{gap: '2rem' }}>
        <span className="stroke">READY TO START</span>
        <span>YOUR JOURNEY</span>
        <span className="stroke">NOW WITHUS</span>

      </div>
      {/* Plans card */}
      <div className="plans">
        {plansData.map((plan, i) => (
          <div className="plan" key={i}>
            {plan.icon}
            <span>{plan.name}</span>
            <span>$ {plan.price}</span>

            <div calssName="features">
              {plan.features.map((feature, i) => (
                <div calssName="feature">
                  <img src={whiteTick} alt="" />
                  <span key={i}>{feature}</span>
                </div>

              ))}
            </div>
            <div>
              <span>see more benefits </span>

            </div>
            <button className="btn">Join now</button>
          </div>


        ))}

      </div>
    </div>
  );
};

export default Plans;