import { Route, Switch } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import FilmsProvider from './context/FimlsProvider';

function App() {
  const [films, setFilms] = useState([]);
  const [favorites, setFavorites] = useState([]);
  useEffect(() => {
    fetch('https://ghibliapi.herokuapp.com/films')
      .then((result) => result.json())
      .then((data) => setFilms(data))
      .catch((error) => console.error(error));
  }, []);

  const handleFavorite = (movie) => {
    if (favorites.includes(movie)) {
      const newFavorites = favorites.filter((film) => film.id !== movie.id);
      setFavorites(newFavorites);
    } else {
      setFavorites([...favorites, movie]);
    }
    console.log();
  };
  const value = { films, favorites, handleFavorite };
  return (
    <FilmsProvider value={ value }>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/favorites" component={ Favorites } />
      </Switch>
    </FilmsProvider>
  );
}

export default App;
