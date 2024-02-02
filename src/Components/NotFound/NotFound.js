import React from 'react'

import './NotFound.css'

export default function NotFound() {
  return (
    <div className='not-found text-center'>
      <i class="fa-regular fa-face-frown"></i>
      <h1>404</h1>
      <h2>Page not found</h2>
      <p>The page you are looking for doesn't exist or an other error occurred.</p>
      <p>Go back, or head over to home page to choose a new direction.</p>
    </div>
  )
}
