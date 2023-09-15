import React, { useState } from 'react'
import BreakTimer from '../BreakTimer/BreakTimer';
import './Container.css'
import InitialTimer from '../InitialTimer/Initialtimer';
import { logout } from '../../Functions/Function';

const Container = () => {
    const [isBreak, setIsBreak] = useState(false);
    
  return (
    <div className='counter_container'>
        <div className="Logout_container">
        <button onClick={logout}>logout</button>
        </div>
       
         {!isBreak ? (
            <BreakTimer setIsBreak={setIsBreak} />
          ) : (
            <InitialTimer setIsBreak={setIsBreak} />
          )}
    </div>
  )
}


export default Container