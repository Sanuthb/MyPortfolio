import React from 'react'
import './box.css'
export default function Box({style,img}) {
  return (
    <div style={{...style}} className='about_box'>
        <img src={img} alt="profile" />
    </div>
  )
}