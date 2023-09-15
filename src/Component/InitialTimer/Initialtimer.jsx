
import React, { useState, useEffect } from 'react';
import "./InitialTimer.css"
import { formatTime, handleStartPause } from '../../Functions/Function';

function InitialTimer({ setIsBreak }) {
  const [time, setTime] = useState(25*60);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval;

    if (isActive && time > 0) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (time === 0) {
      setIsBreak(true); 
    }

    return () => clearInterval(interval);
  }, [isActive, time, setIsBreak]);


  const handleReset = () => {
    setIsActive(false);
    setTime(25 * 60);
  };



  return (
    <div className='initial_timer_container'>
      <h1>Focus Time</h1>
      <div className='timer_Count'>{formatTime(time)}</div>

      <div className='start_reset_button'>
      <button onClick={() => {
        handleStartPause(setIsActive,isActive)
      }}>
        {isActive ? 'Pause' : 'Start'}
      </button>
      <button onClick={() => {
        handleReset()
      }}>Reset</button>

      </div>
    </div>
  );
}

export default InitialTimer;


