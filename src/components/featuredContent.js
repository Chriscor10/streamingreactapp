import React from "react";
import featuredImg from "./img/f-t-1.png";
import "./featuredContent.css";

function FeaturedContent() {
  return (
    <div class="container">
      <div class="content-container">
        <div class="featured-content">
          <img src={featuredImg} alt="" class="featured-title" />
          <p class="featured-desc">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. A laborum
            quod accusamus? Minima aspernatur officia totam modi eligendi omnis
            repellat consequuntur odio? Reiciendis totam ipsum similique porro,
            sunt ipsam natus!
          </p>
          <button class="featured-button">WATCH</button>
        </div>
      </div>
    </div>
  );
}

export default FeaturedContent;
