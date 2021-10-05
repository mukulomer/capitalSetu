import React from "react";
import "./styles.css";
import LikeIcon from "@material-ui/icons/FavoriteBorder";
import WatchlistIcon from "@material-ui/icons/PlaylistAddCheckOutlined";
import DeleteIcon from "@material-ui/icons/DeleteForeverOutlined";

export default function Movie(props) {
  const {
    id,
    title,
    rating,
    cast,
    discription,
    isliked,
    likeicon,
    watchlisted,
    handleLike,
    handleWatch,
    handleDelete
  } = props;

  return (
    <div class="box">
      <div class="card">
        <a href="movie1.html" />
        <img
          class="img"
          src="https://i2.wp.com/odishabytes.com/wp-content/uploads/2020/06/Dil-Bechara-movie-online-ott-release-e1595604448547.jpg"
          alt="movie"
        />

        <div class="rating">
          <img src="star.svg" class="icon" alt="icon" />
          <p>9.8/10</p>
        </div>
        <h3 class="name">Dil Bechara</h3>
        <p class="para">
          While struggling to survive, Manny and Kizie, who each have a terminal
          illness, fall in love with each other. Thereafter, the two try to
          spend the rest of their days being happy and staying positive.
        </p>
      </div>

      <div class="card">
        <a href="movie2.html" />
        <img
          class="img"
          src="https://sahinahi-media.azureedge.net/movieposters/Kuchh-Bheege-Alfaaz.jpg"
          alt="movie"
        />
        <div class="rating">
          <img src="star.svg" class="icon" alt="icon" />
          <p>8/10</p>
        </div>
        <h3 class="name">Kuch Bheege Alfaaz</h3>
        <p class="para">
          Alfaz, a popular but anonymous RJ, crosses paths with Archana, a
          lively woman suffering from vitiligo. They begin talking over the
          phone after Archana dials a wrong number and form an unlikely bond.
        </p>
      </div>

      <div class="card">
        <a href="movie3.html" />
        <img
          class="img"
          src="https://usercontent2.hubstatic.com/14477965_f520.jpg"
          alt="movie"
        />
        <div class="rating">
          <img src="star.svg" class="icon" alt="icon" />
          <p>8.8/10</p>
        </div>
        <h3 class="name">Five Feet Apart</h3>
        <p class="para">
          Seventeen-year-old Stella spends most of her time in the hospital as a
          cystic fibrosis patient. Her life is full of routines, boundaries and
          self-control -- all of which get put to the test when she meets Will,
          an impossibly charming teen who has the same illness
        </p>
      </div>
    </div>
  );
}
