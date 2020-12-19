import React, { useContext } from 'react';

import PokeContext from '../context/pokeContext';

const PokeDetails = () => {
  const pokeContext = useContext(PokeContext);

  const {
    pokeurls: { name, types, stats },
  } = pokeContext;

  const colors = {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
    electric: '#FCF7D3',
    water: '#DEF3FD',
    ground: '#F4E7DA',
    rock: '#D5D5D4',
    fairy: '#FC3AFF',
    poison: '#98D7A5',
    bug: '#F8D5A3',
    dragon: '#97b3e6',
    psychic: '#eaeda1',
    flying: '#f5f5f5',
    fighting: '#e6e0d4',
    normal: 'f5f5f5',
  };

  // const main_types = Object.keys(colors);
  // console.log(main_types);

  let color;
  if (types) {
    const type = types[0].type.name;
    color = colors[type];
  } else {
    color = '#fff';
  }

  return (
    <div className='card-body' style={{ backgroundColor: `${color}` }}>
      {name ? (
        <h2 className='card-title' style={{ textTransform: 'capitalize' }}>
          Name: {name}
        </h2>
      ) : null}
      {types ? (
        <ul className='list-group list-group-horizontal mb-2'>
          <h5 className='mr-2'>Type:</h5>
          {types
            ? types.map((type, index) => (
                // {...type['type']['name'] === 'grass'}
                <li
                  className='list-group-item'
                  key={index}
                  style={{ textTransform: 'capitalize' }}
                >
                  {type['type']['name']}
                </li>
              ))
            : null}
        </ul>
      ) : null}
      {stats ? (
        <table className='table table-hover'>
          <thead>
            <tr>
              <th scope='col'>Base</th>
              <th scope='col'>Stats</th>
            </tr>
          </thead>
          <tbody>
            {stats
              ? stats.map((index) => (
                  <tr>
                    <th scope='row' style={{ textTransform: 'uppercase' }}>
                      {index.stat.name}
                    </th>
                    <td>{index.base_stat}</td>
                  </tr>
                ))
              : null}
          </tbody>
        </table>
      ) : null}
    </div>
  );
};

export default PokeDetails;
