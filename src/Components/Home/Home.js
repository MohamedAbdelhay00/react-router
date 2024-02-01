import React from 'react'

import './Home.css';
import img from '../../imgs/avatar.svg'

export default function Home() {
  return (
    <div className='home text-center text-light p-5'>
      <img src={img} />
      <h2 className='pt-5'>START FRAMEWORK</h2>
      <div className='d-flex justify-content-center align-items-center'>
      <div className='hr'></div>
        <i className="fa-solid fa-star m-3"></i>
        <div className='hr'></div>
      </div>
      <p>Graphic Artist - Web Designer - Illustrator</p>
    </div>
  )
}
