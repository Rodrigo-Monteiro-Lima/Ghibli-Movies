import PropTypes from 'prop-types';
import FilmsContext from './FilmsContext';

export default function FilmsProvider({ children, value }) {
  // const value = { films: [], favorites: [] };
  return (
    <FilmsContext.Provider value={ value }>
      <div>
        { children }
      </div>
    </FilmsContext.Provider>
  );
}

FilmsProvider.propTypes = {
  children: PropTypes.element.isRequired,
  value: PropTypes.shape().isRequired,
};
