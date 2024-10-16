import React from 'react'
import './Categories.css'
import Gift from './Gift'
import Weddings from './Weddings'

export default function Categories() {
  return (
    <div className='categories-div '>
        <Gift/>
        <Weddings/>
    </div>
  )
}
