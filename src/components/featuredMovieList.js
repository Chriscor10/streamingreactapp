import React from "react";
import featuredImg from "./img/f-t-1.png";
import "./featuredContent.css";
import movieListimg from "./img/1.jpeg";
import "./movieList.css";

function FeaturedMovieList() {
  return (
    <div class="container">
      <div className="content-container">
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

export default FeaturedMovieList;
