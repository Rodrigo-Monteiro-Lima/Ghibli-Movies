import React from 'react';
import PropTypes from 'prop-types';
import { BsSuitHeart } from 'react-icons/bs';

function Movie({ film, handleFavorite }) {
  return (
    <div className="movie">
      <h3>{film.original_title_romanised}</h3>
      <div className="image-container">
        <img src={ film.image } alt="" />
        <BsSuitHeart
          className="favorite"
          onClick={ () => handleFavorite(film) }
        />
      </div>
      <p>{film.description}</p>
    </div>
  );
}

Movie.propTypes = {
  film: PropTypes.shape().isRequired,
  handleFavorite: PropTypes.func.isRequired,
};

export default Movie;
