import React, { useContext } from 'react';
import Spinner from '../layout/Spinner';
import PokeDetails from '../pokemons/PokeDetails';

import PokeContext from '../context/pokeContext';

const Pokemons = () => {
  const pokeContext = useContext(PokeContext);

  const {
    loading,
    pokeurls: { id },
  } = pokeContext;

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div className='container'>
        <div className='row'>
          <div className='card mb-3' style={{ width: '100%' }}>
            <div
              className='row no-gutters'
              style={{ border: '2px dotted #59c6e6' }}
            >
              <div className='col-md-5'>
                <img
                  className='bg-light'
                  src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`}
                  alt=''
                  style={{ width: '100%' }}
                />
              </div>
              <div className='col-md-7'>
                <PokeDetails />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

// Pokemons.propTypes = {
//   pokemons: PropTypes.array.isRequired,
//   loading: PropTypes.bool.isRequired,
//   pokeurls: PropTypes.object.isRequired,
// };

// const userStyle = {
//   display: 'grid',
//   gridTemplateColumns: 'repeat(3, 1fr)',
//   gridGap: '1rem',
// };

export default Pokemons;
