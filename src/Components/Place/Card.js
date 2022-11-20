import React, { useState } from "react";
import "./Card.css";
import Destination from "./Destination";
import Favorite from "./Favorite";
let data = [
  {
    image: "https://source.unsplash.com/600x400/?munnar",
    title: "Munnar",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus",
  },
  {
    image: "https://source.unsplash.com/600x400/?ooty",
    title: "Ooti",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus",
  },
  {
    image: "https://source.unsplash.com/600x400/?kovalam",
    title: "Kovalam",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus",
  },
  {
    image: "https://source.unsplash.com/600x400/?manali",
    title: "Manali",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus",
  },
  {
    image: "https://source.unsplash.com/600x400/?dubai",
    title: "Dubai",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus",
  },
  {
    image: "https://source.unsplash.com/600x400/?zhangye",
    title: "Zhangye",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus",
  },
];
export default function Card() {
  // Get all favorite images
  let [favImages, setFavImages] = useState([]);

  function getFavImages(imgSrc) {
    setFavImages([...favImages, imgSrc]);
  }
  function removeFaveImages(imgSrc) {
    setFavImages(
      [...favImages].filter((currentImage) => {
        return currentImage != imgSrc;
      })
    );
  }
  return (
    <div className="place-card">
      <div className="row-one">
        <div className="card-destination">
          <h3>Destination</h3>
          <div className="box">
            {data.map((obj) => {
              return (
                <Destination
                  GetFaveImage={getFavImages}
                  key={obj.title}
                  image={obj.image}
                  title={obj.title}
                  desc={obj.desc}
                />
              );
            })}
          </div>
        </div>
        <div className="card-favorite">
          <h3>Favorite</h3>
          <Favorite favImages={favImages} removeFaveImages={removeFaveImages} />
        </div>
      </div>
    </div>
  );
}
