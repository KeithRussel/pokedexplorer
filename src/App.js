import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Alert from './components/layout/Alert';
import Home from './components/pages/Home';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';
import PokeState from './components/context/PokeState';

import AlertState from './components/context/alert/AlertState';

import './App.css';
const App = () => {
  // async componentDidMount() {
  //   // Get pokemons
  //   this.setState({ loading: true });

  //   const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=151`);
  //   this.setState({ pokemons: res.data.results, loading: false });

  //   console.log(res);
  // }

  // Search Pokemons
  // const searchPokemons = async (text) => {
  //   setLoading(true);

  //   const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${text}`);
  //   // this.setState({ pokeurls: res.data, loading: false });
  //   setPokeurls(res.data);
  //   setLoading(false);
  //   // console.table(res.data);
  // };

  return (
    <PokeState>
      <AlertState>
        <Router>
          <div className='App'>
            <Navbar />
            <div className='container'>
              <Alert />
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </PokeState>
  );
};

export default App;
