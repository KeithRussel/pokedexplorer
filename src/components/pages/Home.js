import React, { Fragment } from 'react';
import Search from '../pokemons/Search';
import Pokemons from '../pokemons/Pokemons';

const Home = () => (
  <Fragment>
    <Search />
    <Pokemons />
  </Fragment>
);

export default Home;
