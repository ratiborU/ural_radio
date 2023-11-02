import React from 'react';
import image from "../assets/image 2.jpg";

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__image">
        <img src={image} alt="#" />
      </div>
      <button className="sidebar__button">
        Оформить подписку
      </button>
      <p className="sidebar__text">ISSN онлайн-версии:2588-0462</p>
      <p className="sidebar__text">ISSN печатной версии:2588-0454</p>
    </div>
  );
};

export default SideBar;