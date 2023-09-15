
import React, { useState, useEffect } from 'react';
import "./BreakTimer.css"
import { formatTime, handleReset, handleStartPause } from '../../Functions/Function';


function BreakTimer({ setIsBreak }) {
  const [time, setTime] = useState(5* 60);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval;
    if (isActive && time > 0) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (time === 0) {
      setIsBreak(false); 
    }

    return () => clearInterval(interval);
  }, [isActive, time, setIsBreak]);

  return (
    <div className='break_timer_container'>
    <h1>Break Time</h1>
    <div className='time_container'>{formatTime(time)}</div>

    <div className='start_reset_button'>
    <button onClick={() => {
      handleStartPause(setIsActive,isActive)
    }}>
      {isActive ? 'Pause' : 'Start'}
    </button>
    <button onClick={() => {
      handleReset(setIsActive,setTime)
    }}>Reset</button>

    </div>
  </div>
  );
}

export default BreakTimer;


