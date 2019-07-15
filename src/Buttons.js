import React, { useState } from "react";
import "./App.css";

const Buttons = ({homeScore, setHomeScore, awayScore, setAwayScore}) => {
    return (
        <section className="buttons">
        <div className="homeButtons">
          <button onClick={() => setHomeScore(homeScore + 7)} className="homeButtons__touchdown">Home Touchdown</button>
          <button onClick={() => setHomeScore(homeScore + 3)} className="homeButtons__fieldGoal">Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button onClick={() => setAwayScore(awayScore + 7)} className="awayButtons__touchdown">Away Touchdown</button>
          <button onClick={() => setAwayScore(awayScore + 3)} className="awayButtons__fieldGoal">Away Field Goal</button>
        </div>
      </section>  
    );
};

export default Buttons;