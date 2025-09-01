import React from "react";
import imagesData from "./imagesData";

const NameLogo = () => {
  return (
    <>
      <div className="figure">
        <img src={imagesData.todologo} alt="todo logo" className="logo" />
        <div className="figurecaption">
          Add Your Item Here <span>🧡</span>
        </div>
      </div>
    </>
  );
};

export default NameLogo;
