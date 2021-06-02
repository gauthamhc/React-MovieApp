import React from "react";
import "./HeaderStyle.css";

const Header = (props) => {
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
            value={props.searchValue}
            className="input-field"
            placeholder="Search your favourite movie"
            onChange={(e) => props.setSearchValue(e.target.value)}
            value={props.searchValue}
          />
        </div>
      </div>
    </>
  );
};

export default Header;
