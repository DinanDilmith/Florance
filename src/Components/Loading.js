import React from 'react'
import './Loading.css'
import navCover from '../Images/Florance.png';

export default function Loading() {
  return (
    <div className='spinner-div'>
        <img 
              src={navCover} 
              alt="Spinner" 
              style={{ width: "150px", height: "50px" }}
              className='spinner'
            />
    </div>
  )
}
