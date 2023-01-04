import { useContext } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Movie from '../components/Movie';
import FilmsContext from '../context/FilmsContext';
import './Home.css';

function Home({ history }) {
  const films = useContext(FilmsContext);
  return (
    <>
      <Header history={ history } />
      <h1>Films</h1>
      <div className="movies">
        {films.films && films.films.map((film) => (
          <Movie
            film={ film }
            key={ film.id }
            handleFavorite={ films.handleFavorite }
          />
        ))}
      </div>
    </>
  );
}

Home.propTypes = {
  history: PropTypes.shape().isRequired,
};

export default Home;
