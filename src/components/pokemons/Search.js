import React, { useState, useContext } from 'react';
import PokeContext from '../context/pokeContext';
import AlertContext from '../context/alert/alertContext';

const Search = () => {
  const pokeContext = useContext(PokeContext);
  const alertContext = useContext(AlertContext);

  const [text, setText] = useState();

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === '') {
      alertContext.setAlert('Please enter something', 'warning');
    } else {
      pokeContext.searchPokemons(text);
      setText('');
    }
  };

  const { pokeurls } = pokeContext;

  const onChange = (e) => setText(e.target.value);

  return (
    <div className='mb-4'>
      <form onSubmit={onSubmit}>
        <input
          className='form-control'
          type='text'
          name='text'
          placeholder='Search Pokemon...'
          style={{ marginBottom: '5px', borderRadius: '0' }}
          value={text}
          onChange={onChange}
        />
        <input
          className='btn btn-secondary btn-block'
          type='submit'
          value='Search'
        />
      </form>
      {Object.keys(pokeurls).length === 0 &&
      pokeurls.constructor === Object ? null : (
        <button
          className='btn btn-dark btn-block'
          onClick={pokeContext.clearPokemon}
        >
          Clear
        </button>
      )}
    </div>
  );
};

export default Search;
