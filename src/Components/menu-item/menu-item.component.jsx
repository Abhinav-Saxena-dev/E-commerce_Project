import React from "react";
import "./menu-item.component.style.scss";

const Menulist = (props) => {
  return (
    <div className={`${props.size} menu-item`}>
      <div className="backgroundImage" style = {{backgroundImage : `url(${props.image})`}} />
        <div className="content">
          <h1 className="title">{props.item}</h1>
          <span className="subtitle">SHOP NOW</span>
        </div>
      </div>
  );
};

export default Menulist;
