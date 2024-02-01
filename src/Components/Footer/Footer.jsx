import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <footer className='text-light text-center'>
      <div className='sec-1'>
        <div className='row w-100'>
          <div className='col-md-4 col-sm-12'>
            <h3>LOCATION</h3>
            <p>2215 John Daniel Drive</p>
            <p>Clark, MO 65243</p>
          </div>
          <div className='col-md-4 col-sm-12'>
            <h3>AROUND THE WEB</h3>
            <div className='icons'>
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-linkedin-in"></i>
            <i className="fa-solid fa-globe"></i>
            </div>
          </div>
          <div className='col-md-4 col-sm-12'>
            <h3>ABOUT FREELANCER</h3>
            <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
          </div>
        </div>
      </div>
      <div className='sec-2 p-4'>
        Copyright © Your Website 2021
      </div>
    </footer>
  )
}
