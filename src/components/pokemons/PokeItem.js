import React from 'react';
import PropTypes from 'prop-types';

const PokeItem = ({ pokeurl: { name, id } }) => {
  // const [data, setData] = useState({});
  // const [isLoading, setIsLoading] = useState(false);

  // fetch(url)
  //   .then((res) => res.json())
  //   .then(function (pokeData) {
  //     console.log(pokeData);

  //     // renderPokemon(pokeData);
  //   });

  // useEffect(() => {
  //   async function fetchData() {
  //     const result = await axios(url);
  //     // console.log(result.data.sprites.back_default);
  //     setData(result.data);
  //     setIsLoading(false);
  //   }
  //   fetchData();
  // }, [url]);

  return (
    <div className='col-sm-3'>
      <div className='card mb-2' style={{ width: '100%' }}>
        <img
          src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`}
          className='card-img-top'
          alt=''
          style={{ padding: '0px 5px 5px 5px' }}
        />
        <div className='card-body text-center'>
          <h5 className='card-title' style={{ textTransform: 'capitalize' }}>
            {name}
          </h5>
          {/* <a
            href={url}
            className='btn btn-link'
            style={{
              backgroundColor: '#276c7b',
              color: 'white',
            }}
          >
            More
          </a> */}
        </div>
      </div>
    </div>
  );
};

PokeItem.propTypes = {
  pokemon: PropTypes.object.isRequired,
  pokeurl: PropTypes.object.isRequired,
};

export default PokeItem;
