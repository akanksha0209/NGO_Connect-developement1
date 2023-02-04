import React from "react";
import "./ngo.cards.css";
import MapCardNgoComponent from "../mapcardcomponent/mapcard";

const NgoDonatecard = ({ img, author, title, reqdesc, needs }) => {
  return (
    <div className="card">
      <img className="ngocardimage" src={img} />
      <div className="card-body">
        <div className="writtencontent">
          <h3 className="ngocardh2">{title}</h3>
          <h4 className="ngocardh3">Need: {needs}</h4>
          <p>{reqdesc}</p>
          <h4>Address: </h4>
          <p>123, Wall Street, USA</p>

          <div className="Map"></div>
          <button className="ngocardbutton">Donate</button>
          <MapCardNgoComponent />
          <h5>{author}</h5>
        </div>
      </div>
    </div>
  );
};

export default NgoDonatecard;
