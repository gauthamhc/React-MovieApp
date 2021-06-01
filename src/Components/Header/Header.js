import React from "react";
import "./HeaderStyle.css";

const Header = () => {
  return (
    <>
      <div className="movieContainer">
        <div className="title">
          <p>film fou</p>
        </div>
        <div className="input-icons">
          <i className="fas fa-search"></i>
          <input
            type="text"
            className="input-field"
            placeholder="Search your favourite movie"
          />
        </div>
      </div>
    </>
  );
};

export default Header;
