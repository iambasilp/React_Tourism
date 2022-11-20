import React, { Component, useState } from "react";
import "./Destination.css";
import Favorite from "./Favorite";
import heart from "../Images/heart-solid.svg";

export default function Destination(props) {
  let [favoriteState, setFavoriteState] = useState("Add to Favorite");
  let [classState, setClassState] = useState("");

  function addToFavorite(imgSrc) {
    setFavoriteState((preState) => {
      if (preState == "Add to Favorite") {
        props.GetFaveImage(imgSrc);
        return "Added to Favorite";
      } else {
        return "Add to Favorite";
      }
    });
    setClassState((preState) => {
      if (preState === "") {
        return "active";
      } else {
        return "";
      }
    });
  }
  return (
    <div className="destination">
      <div className="destination-container">
        <div className={`card ${classState}`}>
          <div className="card__header">
            <img src={heart} className="icon" alt="heart" />
            <img
              src={props.image}
              alt="card__image"
              className="card__image"
              width="600"
            />
          </div>
          <div className="card__body">
            <h4>{props.title}</h4>
            <p>{props.desc}</p>
            <button
              onClick={() => {
                addToFavorite(props.image);
              }}
              className={`card-button ${classState}`}
            >
              {favoriteState}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
