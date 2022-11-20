import React from "react";
import "./Favorite.css";
export default function Favorite(props) {
  return (
    <div className="favorite">
      <div className="card-container">
        <div className="card-image">
          
          {props.favImages.map((favImage,i) => {
            return (
              <div key={i} className="favor-container">
              <i  
              onClick={()=>{
              props.removeFaveImages(favImage)
              }}
               className="far fa-times-circle"></i>
              <img className="favImage" src={`${favImage}`} alt="" />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
}
