import React from "react";
import weth from "./assets/weth.png";
import "./CollectionCard.css";

const CollectionCard = ({ id, name, traits, image }) => {
  return (
    <div className="collectionCard">
      <img src={image} className="MainImage" alt="nft"/>
      <div className="name">
        {name} <div className="id">.#{id}</div>
      </div>
      <div className="priceContainer">
        <img src={weth} alt="weth" className="wethImage" />
        <div className="price">{traits.value}</div>
      </div>
    </div>
  );
};

export default CollectionCard;
