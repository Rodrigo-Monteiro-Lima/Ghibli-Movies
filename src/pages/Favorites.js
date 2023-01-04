import { useContext } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Movie from '../components/Movie';
import FilmsContext from '../context/FilmsContext';

export default function Favorites({ history }) {
  const films = useContext(FilmsContext);
  return (
    <>
      <Header history={ history } />
      <h1>Favorites</h1>
      {films.favorites.length === 0 ? 'No favorite films'
        : films.favorites.map((film) => (
          <Movie
            film={ film }
            key={ film.id }
            handleFavorite={ films.handleFavorite }
          />))}
    </>
  );
}

Favorites.propTypes = {
  history: PropTypes.shape().isRequired,
};
