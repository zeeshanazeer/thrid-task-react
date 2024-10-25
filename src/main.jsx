// https://react-icons.github.io/react-icons/
// npm i react-icons
import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import car1 from "./assets/man.jpg";
import { SlOptions } from "react-icons/sl";
import { FcLike } from "react-icons/fc";
import { BiCommentDetail } from "react-icons/bi";
import { IoMdShareAlt } from "react-icons/io";
import "./post.css";
import car from "./assets/car.webp"
import car3 from "./assets/car2.webp"
import car4 from "./assets/car3.jpg";
import car5 from "./assets/car4.jpg";
import car6 from "./assets/car5.jpg";
import car7 from "./assets/car6.jpg";

function Post() {
  return (
    <div className="post-container">
      <div className="post-header">
        <div className="post-user-detail">
          <img
            src={car1}
            alt="Hedy Lamarr"
            className="dp"
            id="my-id"
          />
          <div>
            <h3>Zakir Rehman</h3>
            <span>15 min ago</span>
          </div>
        </div>
        <SlOptions />
      </div>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
        architecto quaerat sunt illum, esse eveniet quas minima, non aperiam,
        praesentium impedit itaque enim fugit? Iure explicabo molestiae
        asperiores exercitationem minus.
      </p>
      <img src={car} alt="post image" className="post-photo" id="my-id" />

      <div>
        <FcLike />
        <BiCommentDetail />
        <IoMdShareAlt />
      </div>
    </div>
  );
}
function Post1() {
  return (
    <div className="post-container">
      <div className="post-header">
        <div className="post-user-detail">
          <img
            src={car1}
            alt="Hedy Lamarr"
            className="dp"
            id="my-id"
          />
          <div>
          <h3>Salman Nazeer</h3>
          <span>25 oct 2024</span>
          </div>
        </div>
        <SlOptions />
      </div>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
        architecto quaerat sunt illum, esse eveniet quas minima, non aperiam,
        praesentium impedit itaque enim fugit? Iure explicabo molestiae
        asperiores exercitationem minus.
      </p>
      <img src={car5} alt="post image" className="post-photo" id="my-id" />

      <div>
        <FcLike />
        <BiCommentDetail />
        <IoMdShareAlt />
      </div>
    </div>
  );
}
function Post2() {
  return (
    <div className="post-container">
      <div className="post-header">
        <div className="post-user-detail">
          <img
            src={car1}
            alt="Hedy Lamarr"
            className="dp"
            id="my-id"
          />
          <div>
          <h3>Imran Nazeer</h3>
          <span>25 oct 2024</span>
          </div>
        </div>
        <SlOptions />
      </div>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
        architecto quaerat sunt illum, esse eveniet quas minima, non aperiam,
        praesentium impedit itaque enim fugit? Iure explicabo molestiae
        asperiores exercitationem minus.
      </p>
      <img src={car4} alt="post image" className="post-photo" id="my-id" />

      <div>
        <FcLike />
        <BiCommentDetail />
        <IoMdShareAlt />
      </div>
    </div>
  );
}
function Post3() {
  return (
    <div className="post-container">
      <div className="post-header">
        <div className="post-user-detail">
          <img
            src={car1}
            alt="Hedy Lamarr"
            className="dp"
            id="my-id"
          />
          <div>
          <h3>Zohan Nazeer</h3>
          <span>25 oct 2024</span>
          </div>
        </div>
        <SlOptions />
      </div>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
        architecto quaerat sunt illum, esse eveniet quas minima, non aperiam,
        praesentium impedit itaque enim fugit? Iure explicabo molestiae
        asperiores exercitationem minus.
      </p>
      <img src={car3} alt="post image" className="post-photo" id="my-id" />

      <div>
        <FcLike />
        <BiCommentDetail />
        <IoMdShareAlt />
      </div>
    </div>
  );
}
function Post6() {
  return (
    <div className="post-container">
      <div className="post-header">
        <div className="post-user-detail">
          <img
            src={car1}
            alt="Hedy Lamarr"
            className="dp"
            id="my-id"
          />
          <div>
            <h3>Zeeshan Nazeer</h3>
            <span>25 oct 2024</span>
          </div>
        </div>
        <SlOptions />
      </div>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
        architecto quaerat sunt illum, esse eveniet quas minima, non aperiam,
        praesentium impedit itaque enim fugit? Iure explicabo molestiae
        asperiores exercitationem minus.
      </p>
      <img src={car6} alt="post image" className="post-photo" id="my-id" />

      <div>
        <FcLike />
        <BiCommentDetail />
        <IoMdShareAlt />
      </div>
    </div>
  );
}


function App() {
  return (
    <div style={{ display: "flex", gap: "20px", flexDirection: "column" }}>
      <Post />
      <Post1 />
      <Post2 />
      <Post3 />
      <Post6 />
      <Post />
      <Post3 />
      <Post3 />
      <Post2 />
      <Post6 />
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);