// Portfolio.jsx

import React from 'react';
import './Portfolio.css';
import img1 from '../../imgs/img-1.png';
import img2 from '../../imgs/img-2.png';
import img3 from '../../imgs/img-3.png';
import Card from './Card';

export default function Portfolio() {
  return (
    <div className="portfolio text-center w-100 d-flex flex-column justify-content-center align-items-center">
      <h2>PORTFOLIO COMPONENT</h2>
      <div className="d-flex justify-content-center align-items-center">
        <div className="hr"></div>
        <i className="fa-solid fa-star m-3"></i>
        <div className="hr"></div>
      </div>
      <div className="row w-100 g-5">
        <Card imgUrl={img1} />
        <Card imgUrl={img2} />
        <Card imgUrl={img3} />
        <Card imgUrl={img1} />
        <Card imgUrl={img2} />
        <Card imgUrl={img3} />
      </div>
    </div>
  );
}
