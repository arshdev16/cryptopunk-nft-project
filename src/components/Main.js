import React, { useState, useEffect } from "react";
import "./Main.css";
import instagram from "./assets/owner/instagram.png";
import twitter from "./assets/owner/twitter.png";
import more from "./assets/owner/more.png";

const Main = ({ punkList, selectedPunk }) => {
  const [activePunk, setActivePunk] = useState(punkList[0]);
  useEffect(() => {
    setActivePunk(punkList[selectedPunk]);
    console.log(punkList[selectedPunk]);
  },[punkList,selectedPunk]);
  return (
    <div className="main">
      <div className="mainContent">
        <div className="punkHighLight">
          <div className="punkContainer">
            <img
              src={activePunk.image_url}
              alt="Selected Punk"
              className="selectedPunk"
            />
          </div>
        </div>
        <div className="allDetails">
          <div className="punkDetails">
            <div className="title">{activePunk.name}</div>
            <span className="itemNumber">.#{activePunk.token_id}</span>
          </div>
          <div className="owner">
            <div className="ownerImageContainer">
              <img
                src={activePunk.owner.profile_img_url}
                className="ownerImage"
                alt="Owner"
              />
            </div>
            <div className="ownerDetails">
              <div className="ownerNameandHandle">
                <span className="ownerWallet">
                  {activePunk.owner.address}
                </span>
                <span className="ownerHandle">@arsh1611</span>
              </div>
            </div>
          </div>
        </div>
        <div className="SocialMediaImages">
          <img src={instagram} alt="instagram" className="image" />
          <img src={twitter} alt="twitter" className="image" />
          <img src={more} alt="more" className="image" />
        </div>
      </div>
    </div>
  );
};

export default Main;
