import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function Header({ history }) {
  return (
    <header>
      <nav>
        {history.location.pathname === '/'
          ? <Link to="/favorites">Favorites</Link> : <Link to="/">Films</Link>}
      </nav>
    </header>
  );
}

Header.propTypes = {
  history: PropTypes.shape().isRequired,
};
