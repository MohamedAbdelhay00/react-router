import React, { useState } from 'react';
import './Portfolio.css';

export default function Card(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="col-md-4 col-sm-12">
      <div className="portfolioCard position-relative">
        <div className="img" onClick={openModal}>
          <img src={props.imgUrl} className="w-100 rounded" alt="Portfolio Image" />
        </div>
        <div className="portfolio-show  rounded text-light position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center">
          <i className="fa-solid fa-plus" onClick={openModal}></i>
        </div>

        {isModalOpen && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <img src={props.imgUrl} className="w-100 rounded" alt="Full-size Image" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
