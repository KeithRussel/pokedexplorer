import React, { Fragment } from 'react';

const About = () => {
  return (
    <Fragment>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <small>Version 1.0.1</small>
            <h1>About Poxedex</h1>
            <p>
              Use the Advanced Search to explore Pokémon by type, weakness,
              Ability, and more! Search for a Pokémon by name or using its
              National Pokédex number.
            </p>
          </div>
        </div>
        <div className='row'>
          <div className='col-12'>
            <h6>Updates:</h6>
            <ul className='list-group list-group-flush mt-3'>
              <li className='list-group-item'>
                Update some components to make our codes lighter
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default About;
