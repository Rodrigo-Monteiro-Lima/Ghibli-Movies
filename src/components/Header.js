import { Link, useHistory } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';
import { GiFilmSpool } from 'react-icons/gi';
import logo from '../images/logo_ghibli.png';
import '../styles/Header.css';

export default function Header() {
  const { location: { pathname } } = useHistory();

  return (
    <header>
      <img src={ logo } alt="logo-ghibli" />
      <nav>
        { pathname === '/favorites'
          ? (
            <Link to="/">
              <GiFilmSpool />
              Films
            </Link>
          ) : (
            <Link to="/favorites">
              <FaHeart />
              Favorites
            </Link>
          )}
      </nav>
    </header>
  );
}
