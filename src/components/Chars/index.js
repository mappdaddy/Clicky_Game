import React from "react";
import "./style.css";

function Deck(props) {
  return (
    <div className="card">
      <div className="imgs">
        <img className="pointer" alt={props.name}
         src={process.env.PUBLIC_URL +props.image} 
         onClick={() => props.selectedFriend(props.id)}/>
      </div>
    </div>
  );
}

export default Deck;
