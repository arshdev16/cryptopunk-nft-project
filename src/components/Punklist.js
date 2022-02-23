import React from "react";
import CollectionCard from "./CollectionCard";
import "./Punklist.css";

const Punklist = ({ punkList, setSelectedPunk }) => {
  const change = (token_id) => {
    console.log(token_id);
  }
  return (
    <div className="punkList">
      {punkList.map((nft) => (
        <div onClick={function(){
          setSelectedPunk(nft.token_id)
        }}>
          <CollectionCard
            key={nft.token_id}
            id={nft.token_id}
            traits={nft.traits}
            name={nft.name}
            image={nft.image_url}
          />
        </div>
      ))}
    </div>
  );
};

export default Punklist;
